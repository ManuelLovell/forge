import { useEffect, useMemo, useState } from 'react';
import type { Item } from '@owlbear-rodeo/sdk';
import OBR, { isImage } from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { EXTENSION_ID, MOCK_BIDS } from '../helpers/MockData';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { SettingsConstants, UnitConstants, getPerPlayerSettingKey } from '../interfaces/MetadataKeys';
import type { SystemAttribute } from '../interfaces/SystemResponse';
import { supabase } from '../supabase/supabaseClient';

type PartyHudOrientation = 'bottom' | 'left' | 'top' | 'right';

type CacheState = {
  sceneMetadata: Record<string, unknown>;
  roomMetadata: Record<string, unknown>;
  items: Item[];
};

type ThemeData = {
  primary: string;
  offset: string;
  background: string;
  border: string;
  background_url?: string;
};

const SYSTEM_KEYS = {
  SNAPSHOT_PUBLIC_ID: `${OwlbearIds.EXTENSIONID}/SnapshotPublicId`,
} as const;

const DEFAULT_THEME: ThemeData = {
  primary: defaultGameSystem.theme_primary,
  offset: defaultGameSystem.theme_offset,
  background: defaultGameSystem.theme_background,
  border: defaultGameSystem.theme_border,
  background_url: defaultGameSystem.background_url,
};

const HUD_VIEWPORT_INSET_DEFAULT_PX = 50;
const HUD_VIEWPORT_INSET_ONE_BOSS_PX = 75;
const HUD_VIEWPORT_INSET_TWO_BOSS_PX = 120;
const HUD_CARD_GAP_PX = 8;
const HUD_ROW_CARD_WIDTH_PX = 190;
const HUD_ROW_CARD_HEIGHT_PX = 90;
const HUD_COLUMN_CARD_WIDTH_PX = 120;
const HUD_COLUMN_CARD_HEIGHT_PX = 150;
const HUD_DESKTOP_MIN_WIDTH_PX = 1024;
const HUD_AUTO_SCALE_MEMBER_THRESHOLD = 6;

const Root = styled.div<{ $theme: ThemeData }>`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`;

const HudPanel = styled.div<{ $orientation: PartyHudOrientation; $inset: number }>`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${props => `calc(100vw - ${props.$inset * 2}px)`};
  max-height: ${props => `calc(100vh - ${props.$inset * 2}px)`};
  ${props => {
    if (props.$orientation === 'top') {
      return `top: ${props.$inset}px; left: 50%; transform: translateX(-50%);`;
    }
    if (props.$orientation === 'left') {
      return `left: ${props.$inset}px; top: 50%; transform: translateY(-50%);`;
    }
    if (props.$orientation === 'right') {
      return `right: ${props.$inset}px; top: 50%; transform: translateY(-50%);`;
    }
    return `bottom: ${props.$inset}px; left: 50%; transform: translateX(-50%);`;
  }}
`;

const HudScaleFrame = styled.div<{ $scaledWidth: number; $scaledHeight: number }>`
  width: ${props => `${props.$scaledWidth}px`};
  height: ${props => `${props.$scaledHeight}px`};
  overflow: hidden;
`;

const HudScaleContent = styled.div<{
  $contentWidth: number;
  $contentHeight: number;
  $scale: number;
}>`
  width: ${props => `${props.$contentWidth}px`};
  height: ${props => `${props.$contentHeight}px`};
  transform: ${props => `scale(${props.$scale})`};
  transform-origin: top left;
`;

const HudContainer = styled.div<{ $orientation: PartyHudOrientation }>`
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_WIDTH_PX}px` : 'auto'};
  display: flex;
  gap: ${HUD_CARD_GAP_PX}px;
  ${props => (props.$orientation === 'left' || props.$orientation === 'right')
    ? 'flex-direction: column;'
    : 'flex-direction: row;'}
`;

const MemberCard = styled.div<{ $theme: ThemeData; $orientation: PartyHudOrientation }>`
  border: 2px solid ${props => props.$theme.border};
  border-radius: 10px;
  background: ${props => rgbaFromHex(props.$theme.background, 0.58)};
  position: relative;
  display: flex;
  gap: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '0' : '0'};
  align-items: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'stretch' : 'center'};
  flex-direction: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'column' : 'row'};
  padding: 0;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_WIDTH_PX}px` : `${HUD_ROW_CARD_WIDTH_PX}px`};
  min-width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_WIDTH_PX}px` : `${HUD_ROW_CARD_WIDTH_PX}px`};
  height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_HEIGHT_PX}px` : `${HUD_ROW_CARD_HEIGHT_PX}px`};
  min-height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_HEIGHT_PX}px` : `${HUD_ROW_CARD_HEIGHT_PX}px`};
  overflow: hidden;
`;

const CurrentTurnSheenOverlay = styled.div<{ $theme: ThemeData }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  z-index: 12;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      112deg,
      transparent 0 45%,
      ${props => rgbaFromHex(props.$theme.offset, 0.14)} 45% 50%,
      ${props => rgbaFromHex(props.$theme.offset, 0.38)} 50% 54%,
      ${props => rgbaFromHex(props.$theme.primary, 0.18)} 54% 58%,
      ${props => rgbaFromHex(props.$theme.offset, 0.14)} 58% 62%,
      transparent 62% 100%
    );
    background-size: 220% 100%;
    background-position: 125% 0;
    animation: currentTurnSheenSweep 2.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow:
      inset 0 0 0 1px ${props => rgbaFromHex(props.$theme.offset, 0.45)},
      0 0 10px ${props => rgbaFromHex(props.$theme.offset, 0.28)};
    animation: currentTurnSheenPulse 1.8s ease-in-out infinite;
  }

  @keyframes currentTurnSheenSweep {
    0% {
      background-position: 125% 0;
    }
    55% {
      background-position: -130% 0;
    }
    100% {
      background-position: -130% 0;
    }
  }

  @keyframes currentTurnSheenPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`;

const PortraitStack = styled.div<{ $orientation: PartyHudOrientation }>`
  position: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'absolute' : 'relative'};
  inset: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '0' : 'auto'};
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '100%' : '50%'};
  height: 100%;
  min-width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '100%' : '50%'};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const Portrait = styled.img<{ $theme: ThemeData; $orientation: PartyHudOrientation }>`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '0' : '-10px'};
  top: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '-10px' : '0'};
  border-radius: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '6px' : '0'};
  object-fit: cover;
  border: none;
  background: ${props => rgbaFromHex(props.$theme.background, 0.7)};
  -webkit-mask-image: ${props => (props.$orientation === 'left' || props.$orientation === 'right')
    ? 'none'
    : 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)'};
  mask-image: ${props => (props.$orientation === 'left' || props.$orientation === 'right')
    ? 'none'
    : 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)'};
`;

const MemberContent = styled.div<{  $theme: ThemeData; $orientation: PartyHudOrientation }>`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '4px' : '3px'};
  min-width: 0;
  height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '50%' : '100%'};
  min-height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '50%' : '0'};
  justify-content: center;
  align-items: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'center' : 'stretch'};
  text-align: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'center' : 'left'};
  background: ${props => rgbaFromHex(props.$theme.background, 0.8)};
  border-radius: 6px;
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '100%' : '75%'};
  max-width: 100%;
  margin-left: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '0' : '-15%'};
  margin-top: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'auto' : '0'};
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
`;

const MemberName = styled.div<{ $theme: ThemeData }>`
  color: ${props => props.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HpTrack = styled.div<{ $theme: ThemeData }>`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.72)};
  overflow: hidden;
`;

const HpFill = styled.div<{ $percent: number }>`
  width: ${props => `${props.$percent}%`};
  height: 100%;
  background: ${props => {
    const hue = Math.max(0, Math.min(120, props.$percent * 1.2));
    return `linear-gradient(90deg, hsl(${hue} 78% 35%) 0%, hsl(${hue} 82% 50%) 100%)`;
  }};
  transition: width 0.2s ease, background 0.2s ease;
`;

const HpNumbers = styled.div<{ $theme: ThemeData }>`
  font-size: 10px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const StatPill = styled.div<{ $theme: ThemeData }>`
  border: 1px solid ${props => props.$theme.border};
  border-radius: 999px;
  background: ${props => rgbaFromHex(props.$theme.background, 0.6)};
  color: ${props => props.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EmptyState = styled.div<{ $theme: ThemeData }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$theme.primary};
  font-size: 14px;
`;

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

const parseSystemArrayField = <T,>(value: unknown): T[] | null => {
  if (Array.isArray(value)) {
    return value as T[];
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed as T[] : null;
    } catch {
      return null;
    }
  }

  return null;
};

const parseNumeric = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const getStorageValue = (cache: CacheState): Record<string, unknown> => {
  return DATA_STORED_IN_ROOM ? cache.roomMetadata : cache.sceneMetadata;
};

const getHpBidKeys = (attributes: SystemAttribute[]) => {
  const currentHp = attributes.find((attribute) => {
    const abbr = (attribute.attr_abbr || '').toUpperCase();
    const name = (attribute.attr_name || '').toLowerCase();
    return abbr === 'HP' || name === 'hit points';
  });

  const maxHp = attributes.find((attribute) => {
    const abbr = (attribute.attr_abbr || '').toUpperCase();
    const name = (attribute.attr_name || '').toLowerCase();
    return abbr === 'MHP' || name === 'max hit points';
  });

  return {
    currentHpBid: currentHp?.attr_bid || MOCK_BIDS.CURRENT_HP,
    maxHpBid: maxHp?.attr_bid || MOCK_BIDS.MAX_HP,
  };
};

const isOrientation = (value: unknown): value is PartyHudOrientation => {
  return value === 'bottom' || value === 'left' || value === 'top' || value === 'right';
};

const formatAttributeValue = (value: unknown, attrType: string): string => {
  const loweredType = attrType.toLowerCase();
  if (loweredType === 'bool') {
    return value === true ? 'Yes' : value === false ? 'No' : '-';
  }

   if (loweredType === 'resource') {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const current = Number((value as Record<string, unknown>).current);
      const max = Number((value as Record<string, unknown>).max);
      if (Number.isFinite(current) && Number.isFinite(max)) {
        return `${Math.trunc(current)}/${Math.trunc(max)}`;
      }
    }
    return '-';
  }

  if (value === null || value === undefined || value === '') {
    return '-';
  }

  return String(value);
};

const PartyHudPopoverPage = () => {
  const [cache, setCache] = useState<CacheState>({
    sceneMetadata: {},
    roomMetadata: {},
    items: [],
  });
  const [ready, setReady] = useState(false);
  const [viewportSize, setViewportSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  }));
  const [currentPlayerId, setCurrentPlayerId] = useState<string>('');
  const [bossTokenCount, setBossTokenCount] = useState(0);
  const [snapshotTheme, setSnapshotTheme] = useState<ThemeData | null>(null);
  const [snapshotAttributes, setSnapshotAttributes] = useState<SystemAttribute[] | null>(null);

  const countBossTokens = (items: Item[]): number => {
    return items.filter((item) => item.metadata?.[UnitConstants.BOSS_MODE] === true).length;
  };

  useEffect(() => {
    let mounted = true;

    const loadSnapshotData = async (roomMetadata: Record<string, unknown>) => {
      const snapshotId = roomMetadata[SYSTEM_KEYS.SNAPSHOT_PUBLIC_ID];
      if (typeof snapshotId !== 'string' || snapshotId.trim().length === 0) {
        if (mounted) {
          setSnapshotTheme(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
        p_snapshot_public_id: snapshotId,
      });

      if (error) {
        if (mounted) {
          setSnapshotTheme(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const snapshot = Array.isArray(data) ? data[0] : data;
      if (!snapshot || typeof snapshot !== 'object') {
        if (mounted) {
          setSnapshotTheme(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const parsed = snapshot as Partial<{
        theme_primary: string;
        theme_offset: string;
        theme_background: string;
        theme_border: string;
        background_url: string;
        attributes: unknown;
      }>;

      const attrArray = parseSystemArrayField<SystemAttribute>(parsed.attributes);

      if (
        typeof parsed.theme_primary !== 'string'
        || typeof parsed.theme_offset !== 'string'
        || typeof parsed.theme_background !== 'string'
        || typeof parsed.theme_border !== 'string'
        || !Array.isArray(attrArray)
      ) {
        if (mounted) {
          setSnapshotTheme(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      if (mounted) {
        setSnapshotTheme({
          primary: parsed.theme_primary,
          offset: parsed.theme_offset,
          background: parsed.theme_background,
          border: parsed.theme_border,
          background_url: typeof parsed.background_url === 'string' ? parsed.background_url : '',
        });
        setSnapshotAttributes(attrArray);
      }
    };

    const initialize = async () => {
      const [sceneMetadata, roomMetadata, items, playerId] = await Promise.all([
        OBR.scene.getMetadata(),
        OBR.room.getMetadata(),
        OBR.scene.items.getItems(),
        OBR.player.getId(),
      ]);

      if (!mounted) {
        return;
      }

      setCache({ sceneMetadata, roomMetadata, items });
      setCurrentPlayerId(playerId);
      setBossTokenCount(countBossTokens(items));
      await loadSnapshotData(roomMetadata);
      setReady(true);
    };

    initialize();

    const unsubscribeSceneMetadata = OBR.scene.onMetadataChange((sceneMetadata) => {
      if (!mounted) return;
      setCache((prev) => ({ ...prev, sceneMetadata }));
    });

    const unsubscribeRoomMetadata = OBR.room.onMetadataChange((roomMetadata) => {
      if (!mounted) return;
      setCache((prev) => ({ ...prev, roomMetadata }));
      void loadSnapshotData(roomMetadata);
    });

    const unsubscribeItems = OBR.scene.items.onChange((items) => {
      if (!mounted) return;
      setCache((prev) => ({ ...prev, items }));
      setBossTokenCount(countBossTokens(items));
    });

    const unsubscribePlayer = OBR.player.onChange((player) => {
      if (!mounted) return;
      setCurrentPlayerId(player.id || '');
    });

    return () => {
      mounted = false;
      unsubscribeSceneMetadata();
      unsubscribeRoomMetadata();
      unsubscribeItems();
      unsubscribePlayer();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const theme = useMemo(() => {
    if (snapshotTheme) {
      return snapshotTheme;
    }

    return DEFAULT_THEME;
  }, [snapshotTheme]);

  const attributes = useMemo(() => {
    if (snapshotAttributes) {
      return snapshotAttributes;
    }

    return defaultGameSystem.attributes as SystemAttribute[];
  }, [snapshotAttributes]);

  const storage = useMemo(() => getStorageValue(cache), [cache]);

  const orientation = useMemo<PartyHudOrientation>(() => {
    const orientationKey = getPerPlayerSettingKey(SettingsConstants.PARTY_HUD_ORIENTATION, currentPlayerId);
    const value = storage[orientationKey] ?? storage[SettingsConstants.PARTY_HUD_ORIENTATION];
    return isOrientation(value) ? value : 'bottom';
  }, [storage, currentPlayerId]);

  const extraAttrOne = (storage[SettingsConstants.PARTY_HUD_ATTR_ONE] as string | undefined) || '';
  const extraAttrTwo = (storage[SettingsConstants.PARTY_HUD_ATTR_TWO] as string | undefined) || '';

  const hasPartyHudHpBarsSetting = storage[SettingsConstants.PARTY_HUD_SHOW_HP_BARS] !== undefined;
  const hasPartyHudHpNumbersSetting = storage[SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS] !== undefined;
  const partyHudHpBarsEnabled = storage[SettingsConstants.PARTY_HUD_SHOW_HP_BARS] === true;
  const partyHudHpNumbersEnabledRaw = storage[SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS] === true;
  const partyHudHpNumbersEnabled = partyHudHpNumbersEnabledRaw && !partyHudHpBarsEnabled;
  const shouldUsePartyHudHpDefault = !hasPartyHudHpBarsSetting && !hasPartyHudHpNumbersSetting;
  const showPartyHudHpBars = shouldUsePartyHudHpDefault ? true : partyHudHpBarsEnabled;
  const showPartyHudHpNumbers = shouldUsePartyHudHpDefault ? false : partyHudHpNumbersEnabled;

  const extraAttributes = useMemo(() => {
    const bids = [extraAttrOne, extraAttrTwo].filter((bid, index, list) => bid && list.indexOf(bid) === index);
    return bids
      .map((bid) => attributes.find((attribute) => attribute.attr_bid === bid) || null)
      .filter((attribute): attribute is SystemAttribute => attribute !== null)
      .filter((attribute) => {
        const type = String(attribute.attr_type || '').toLowerCase();
        return type === 'text' || type === 'numb' || type === 'bool' || type === 'resource' || type === 'enum' || type === 'derived';
      });
  }, [attributes, extraAttrOne, extraAttrTwo]);

  const { currentHpBid, maxHpBid } = useMemo(() => {
    const inferred = getHpBidKeys(attributes);
    const configuredCurrent = storage[SettingsConstants.HP_CURRENT_BID] as string | undefined;
    const configuredMax = storage[SettingsConstants.HP_MAX_BID] as string | undefined;
    const validBids = new Set(attributes.map((attribute) => attribute.attr_bid));

    return {
      currentHpBid: configuredCurrent && validBids.has(configuredCurrent) ? configuredCurrent : inferred.currentHpBid,
      maxHpBid: configuredMax && validBids.has(configuredMax) ? configuredMax : inferred.maxHpBid,
    };
  }, [attributes, storage]);

  const partyItems = useMemo(() => {
    return cache.items
      .filter((item) => item.metadata?.[UnitConstants.IN_PARTY] === true)
      .sort((a, b) => {
        const aName = String(itemDisplayName(a));
        const bName = String(itemDisplayName(b));
        return aName.localeCompare(bName);
      });
  }, [cache.items]);

  const currentTurnId = useMemo(() => {
    const value = cache.sceneMetadata[SettingsConstants.CURRENT_TURN];
    return typeof value === 'string' && value.trim().length > 0 ? value : null;
  }, [cache.sceneMetadata]);

  const hudViewportInsetPx = useMemo(() => {
    if (orientation !== 'top') {
      return HUD_VIEWPORT_INSET_DEFAULT_PX;
    }

    if (bossTokenCount >= 2) {
      return HUD_VIEWPORT_INSET_TWO_BOSS_PX;
    }

    if (bossTokenCount === 1) {
      return HUD_VIEWPORT_INSET_ONE_BOSS_PX;
    }

    return HUD_VIEWPORT_INSET_DEFAULT_PX;
  }, [bossTokenCount, orientation]);

  const hudScaleLayout = useMemo(() => {
    const memberCount = Math.max(1, partyItems.length);
    const isColumnLayout = orientation === 'left' || orientation === 'right';
    const cardWidth = isColumnLayout ? HUD_COLUMN_CARD_WIDTH_PX : HUD_ROW_CARD_WIDTH_PX;
    const cardHeight = isColumnLayout ? HUD_COLUMN_CARD_HEIGHT_PX : HUD_ROW_CARD_HEIGHT_PX;

    const contentWidth = isColumnLayout
      ? cardWidth
      : (memberCount * cardWidth) + ((memberCount - 1) * HUD_CARD_GAP_PX);
    const contentHeight = isColumnLayout
      ? (memberCount * cardHeight) + ((memberCount - 1) * HUD_CARD_GAP_PX)
      : cardHeight;

    const availableWidth = Math.max(1, viewportSize.width - (hudViewportInsetPx * 2));
    const availableHeight = Math.max(1, viewportSize.height - (hudViewportInsetPx * 2));

    const shouldAutoScale = viewportSize.width >= HUD_DESKTOP_MIN_WIDTH_PX
      && partyItems.length >= HUD_AUTO_SCALE_MEMBER_THRESHOLD;

    const widthScale = availableWidth / contentWidth;
    const heightScale = availableHeight / contentHeight;
    const scale = shouldAutoScale ? Math.min(1, widthScale, heightScale) : 1;

    return {
      contentWidth,
      contentHeight,
      scale,
      scaledWidth: Math.max(1, Math.floor(contentWidth * scale)),
      scaledHeight: Math.max(1, Math.floor(contentHeight * scale)),
    };
  }, [orientation, partyItems.length, viewportSize.height, viewportSize.width, hudViewportInsetPx]);

  if (!ready) {
    return <Root $theme={theme} />;
  }

  return (
    <Root $theme={theme}>
      <HudPanel $orientation={orientation} $inset={hudViewportInsetPx}>
        {partyItems.length === 0 ? (
          <EmptyState $theme={theme}>No party units found.</EmptyState>
        ) : (
          <HudScaleFrame $scaledWidth={hudScaleLayout.scaledWidth} $scaledHeight={hudScaleLayout.scaledHeight}>
            <HudScaleContent
              $contentWidth={hudScaleLayout.contentWidth}
              $contentHeight={hudScaleLayout.contentHeight}
              $scale={hudScaleLayout.scale}
            >
              <HudContainer $orientation={orientation}>
                {partyItems.map((item) => {
                  const unitName = itemDisplayName(item);
                  const portraitOverride = (item.metadata?.[UnitConstants.PORTRAIT_URL] as string | undefined) || '';
                  const tokenUrl = isImage(item) ? item.image.url : undefined;
                  const basePortrait = tokenUrl || '/logo.png';
                  const portrait = portraitOverride || basePortrait;

                  const hpCurrentRaw = item.metadata?.[`${EXTENSION_ID}/${currentHpBid}`];
                  const hpMaxRaw = item.metadata?.[`${EXTENSION_ID}/${maxHpBid}`];
                  const hpCurrent = parseNumeric(hpCurrentRaw);
                  const hpMax = parseNumeric(hpMaxRaw);
                  const hpPercent = hpCurrent !== null && hpMax !== null && hpMax > 0
                    ? clamp((hpCurrent / hpMax) * 100, 0, 100)
                    : 0;
                  const isCurrentTurn = item.id === currentTurnId;

                  return (
                    <MemberCard key={item.id} $theme={theme} $orientation={orientation}>
                      <PortraitStack $orientation={orientation}>
                        <Portrait src={portrait} alt={unitName} $theme={theme} $orientation={orientation} />
                      </PortraitStack>
                      {isCurrentTurn && (
                        <CurrentTurnSheenOverlay $theme={theme} />
                      )}
                      <MemberContent $theme={theme} $orientation={orientation}>
                        <MemberName $theme={theme} title={unitName}>{unitName}</MemberName>

                        {showPartyHudHpBars && (
                          <HpTrack $theme={theme}>
                            <HpFill $percent={hpPercent} />
                          </HpTrack>
                        )}

                        {showPartyHudHpNumbers && (
                          <HpNumbers $theme={theme}>
                            HP: {hpCurrent !== null ? Math.trunc(hpCurrent) : '-'} / {hpMax !== null ? Math.trunc(hpMax) : '-'}
                          </HpNumbers>
                        )}

                        {extraAttributes.length > 0 && (
                          <StatsRow>
                            {extraAttributes.map((attribute) => {
                              const label = (attribute.attr_abbr || attribute.attr_name || attribute.attr_bid).trim();
                              const value = item.metadata?.[`${EXTENSION_ID}/${attribute.attr_bid}`];
                              const displayValue = formatAttributeValue(value, String(attribute.attr_type || ''));
                              return (
                                <StatPill key={`${item.id}-${attribute.attr_bid}`} $theme={theme}>
                                  {label}: {displayValue}
                                </StatPill>
                              );
                            })}
                          </StatsRow>
                        )}
                      </MemberContent>
                    </MemberCard>
                  );
                })}
              </HudContainer>
            </HudScaleContent>
          </HudScaleFrame>
        )}
      </HudPanel>
    </Root>
  );
};

const itemDisplayName = (item: Item): string => {
  const metadataName = item.metadata?.[UnitConstants.UNIT_NAME];
  if (typeof metadataName === 'string' && metadataName.trim()) {
    return metadataName.trim();
  }

  if (typeof item.name === 'string' && item.name.trim()) {
    return item.name.trim();
  }

  return 'Unknown';
};

export default PartyHudPopoverPage;
