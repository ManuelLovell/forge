import { useEffect, useMemo, useState } from 'react';
import type { Item } from '@owlbear-rodeo/sdk';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { OwlbearIds } from '../helpers/Constants';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { CardLayoutRenderer, type CardLayoutTheme } from './CardLayoutRenderer';
import type { CardLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

const SYSTEM_KEYS = {
  CURRENT_THEME: `${OwlbearIds.EXTENSIONID}/CurrentTheme`,
  CURRENT_CARD: `${OwlbearIds.EXTENSIONID}/CurrentCard`,
  CURRENT_ATTR: `${OwlbearIds.EXTENSIONID}/CurrentAttr`,
} as const;

type CardCache = {
  metadata: Record<string, unknown>;
  items: Item[];
};

type ThemeData = CardLayoutTheme & {
  background_url?: string;
};

const DEFAULT_THEME: ThemeData = {
  primary: defaultGameSystem.theme_primary,
  offset: defaultGameSystem.theme_offset,
  background: defaultGameSystem.theme_background,
  border: defaultGameSystem.theme_border,
  background_url: defaultGameSystem.background_url,
};

const Root = styled.div<{ $theme: ThemeData }>`
  height: 100vh;
  width: 100%;
  background-color: ${props => rgbaFromHex(props.$theme.background, 0.5)};
  color: ${props => props.$theme.primary};
  border: 2px solid ${props => props.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${props => props.$theme.background_url
    ? `linear-gradient(${rgbaFromHex(props.$theme.background, 0.52)}, ${rgbaFromHex(props.$theme.background, 0.52)}), url(${props.$theme.background_url})`
    : 'none'};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const ContentViewport = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Message = styled.p<{ $theme: ThemeData }>`
  margin: 0;
  color: ${props => props.$theme.primary};
`;

const readUnitIdFromQuery = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('unitid');
  if (!raw) {
    return null;
  }

  const first = raw.split(',')[0]?.trim();
  return first || null;
};

const parseSystemArrayField = <T,>(raw: unknown): T[] | null => {
  if (Array.isArray(raw)) {
    return raw as T[];
  }

  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as T[]) : null;
    } catch {
      return null;
    }
  }

  return null;
};

export const CardPopoverPage = () => {
  const [unitId] = useState<string | null>(() => readUnitIdFromQuery());
  const [cache, setCache] = useState<CardCache>({ metadata: {}, items: [] });
  const [isReady, setIsReady] = useState(false);

  const cardLayout = useMemo(() => {
    const fromMetadata = parseSystemArrayField<CardLayoutComponent>(cache.metadata[SYSTEM_KEYS.CURRENT_CARD]);
    return fromMetadata || (defaultGameSystem.card_layout as CardLayoutComponent[]);
  }, [cache.metadata]);

  const attributes = useMemo(() => {
    const fromMetadata = parseSystemArrayField<SystemAttribute>(cache.metadata[SYSTEM_KEYS.CURRENT_ATTR]);
    return fromMetadata || (defaultGameSystem.attributes as SystemAttribute[]);
  }, [cache.metadata]);

  const theme = useMemo(() => {
    const currentTheme = cache.metadata[SYSTEM_KEYS.CURRENT_THEME] as ThemeData | undefined;
    if (!currentTheme?.primary || !currentTheme?.offset || !currentTheme?.background || !currentTheme?.border) {
      return DEFAULT_THEME;
    }

    return currentTheme;
  }, [cache.metadata]);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      const [metadata, items] = await Promise.all([
        OBR.scene.getMetadata(),
        OBR.scene.items.getItems(),
      ]);

      if (!isMounted) {
        return;
      }

      setCache({ metadata, items });
      setIsReady(true);
    };

    initialize();

    const unsubscribeMetadata = OBR.scene.onMetadataChange((metadata) => {
      if (!isMounted) return;
      setCache((prev) => ({ ...prev, metadata }));
    });

    const unsubscribeItems = OBR.scene.items.onChange((items) => {
      if (!isMounted) return;
      setCache((prev) => ({ ...prev, items }));
    });

    return () => {
      isMounted = false;
      unsubscribeMetadata();
      unsubscribeItems();
    };
  }, []);

  const unitItem = useMemo(() => {
    if (!unitId) {
      return null;
    }

    return cache.items.find((item) => item.id === unitId) || null;
  }, [cache.items, unitId]);

  const updateUnitMetadata = async (updates: Record<string, unknown>) => {
    if (!unitItem) {
      return;
    }

    await OBR.scene.items.updateItems([unitItem.id], (itemsToUpdate) => {
      const metadata = { ...itemsToUpdate[0].metadata };
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined) {
          delete (metadata as any)[key];
        } else {
          metadata[key] = value;
        }
      });
      itemsToUpdate[0].metadata = metadata;
    });

    setCache((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id !== unitItem.id) {
          return item;
        }

        const metadata = { ...item.metadata };
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined) {
            delete (metadata as any)[key];
          } else {
            metadata[key] = value;
          }
        });

        return {
          ...item,
          metadata,
        };
      }),
    }));
  };

  return (
    <Root $theme={theme}>
      <ContentViewport>
        {!isReady ? (
          <Message $theme={theme}>Loading card…</Message>
        ) : !unitId ? (
          <Message $theme={theme}>No unit id supplied in URL.</Message>
        ) : !unitItem ? (
          <Message $theme={theme}>Unit not found in current scene.</Message>
        ) : (
          <CardLayoutRenderer
            systemTheme={theme}
            backgroundUrl={theme.background_url}
            cardLayout={cardLayout}
            attributes={attributes}
            unitItem={unitItem}
            onUpdateMetadata={updateUnitMetadata}
          />
        )}
      </ContentViewport>
    </Root>
  );
};

export default CardPopoverPage;
