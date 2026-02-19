import { useEffect, useMemo, useState } from 'react';
import type { Item } from '@owlbear-rodeo/sdk';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import { Menu } from 'lucide-react';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { OwlbearIds } from '../helpers/Constants';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { UnitConstants } from '../interfaces/MetadataKeys';
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

const CardControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

const UnitSelect = styled.select<{ $theme: ThemeData }>`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => props.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`;

const CloseButton = styled.button<{ $theme: ThemeData }>`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
  display: block;
`;

const TrayOverlay = styled.div<{ $theme: ThemeData; $open: boolean }>`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${props => props.$open ? 'translateY(0)' : 'translateY(calc(100% - 40px))'};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`;

const TrayHandleBuffer = styled.div<{ $theme: ThemeData }>`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${props => rgbaFromHex(props.$theme.background, 0.50)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrayHandleButton = styled.button<{ $theme: ThemeData }>`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.98)};
  color: ${props => props.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;
`;

const TrayBody = styled.div<{ $theme: ThemeData }>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 14px 10px 10px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
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

const isFabricatedTrue = (raw: unknown): boolean => {
  if (raw === true) {
    return true;
  }

  if (typeof raw === 'string') {
    const normalized = raw.trim().toLowerCase();
    return normalized === 'true' || normalized === '1' || normalized === 'yes';
  }

  if (typeof raw === 'number') {
    return raw === 1;
  }

  return false;
};

export const CardPopoverPage = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(() => readUnitIdFromQuery());
  const [cache, setCache] = useState<CardCache>({ metadata: {}, items: [] });
  const [isReady, setIsReady] = useState(false);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

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

  const getUnitDisplayName = (item: Item): string => {
    const metadataName = item.metadata?.[UnitConstants.UNIT_NAME];
    if (typeof metadataName === 'string' && metadataName.trim()) {
      return metadataName;
    }

    const textName = (item as any).text?.plainText;
    if (typeof textName === 'string' && textName.trim()) {
      return textName;
    }

    if (typeof item.name === 'string' && item.name.trim()) {
      return item.name;
    }

    return 'Unknown';
  };

  const selectableUnits = useMemo(() => {
    return cache.items
      .filter((item) => isFabricatedTrue(item.metadata?.[UnitConstants.FABRICATED]))
      .filter((item) => item.id !== selectedUnitId)
      .map((item) => ({
        id: item.id,
        name: getUnitDisplayName(item),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [cache.items, selectedUnitId]);

  const unitItem = useMemo(() => {
    if (!selectedUnitId) {
      return null;
    }

    return cache.items.find((item) => item.id === selectedUnitId) || null;
  }, [cache.items, selectedUnitId]);

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
        ) : !selectedUnitId ? (
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
            controlContent={(
              <CardControls>
                <UnitSelect
                  $theme={theme}
                  aria-label="Choose Unit"
                  value=""
                  onChange={(event) => {
                    const nextUnitId = event.target.value;
                    if (!nextUnitId) {
                      return;
                    }

                    setSelectedUnitId(nextUnitId);
                  }}
                >
                  <option value="">Choose Unit</option>
                  {selectableUnits.map((unit) => (
                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                  ))}
                </UnitSelect>
                <CloseButton
                  type="button"
                  $theme={theme}
                  aria-label="Close Card"
                  onClick={async () => {
                    await OBR.popover.close(OwlbearIds.CARDSID);
                  }}
                >
                  <CloseIcon src="/close.svg" alt="" aria-hidden="true" />
                </CloseButton>
              </CardControls>
            )}
          />
        )}
      </ContentViewport>

      <TrayOverlay $theme={theme} $open={isTrayOpen}>
        <TrayHandleBuffer $theme={theme}>
          <TrayHandleButton
            type="button"
            $theme={theme}
            aria-label={isTrayOpen ? 'Close Tray' : 'Open Tray'}
            onClick={() => {
              setIsTrayOpen((prev) => !prev);
            }}
          >
            <Menu size={22} />
          </TrayHandleButton>
        </TrayHandleBuffer>
        <TrayBody $theme={theme} />
      </TrayOverlay>
    </Root>
  );
};

export default CardPopoverPage;
