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
  CURRENT_THEME: `${OwlbearIds.EXTENSIONID}/CurrentTheme`,
  CURRENT_ATTR: `${OwlbearIds.EXTENSIONID}/CurrentAttr`,
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
  display: flex;
  gap: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '6px' : '0'};
  align-items: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'flex-start' : 'center'};
  flex-direction: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? 'column' : 'row'};
  padding: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '6px' : '0'};
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_WIDTH_PX}px` : `${HUD_ROW_CARD_WIDTH_PX}px`};
  min-width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_WIDTH_PX}px` : `${HUD_ROW_CARD_WIDTH_PX}px`};
  height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_HEIGHT_PX}px` : `${HUD_ROW_CARD_HEIGHT_PX}px`};
  min-height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? `${HUD_COLUMN_CARD_HEIGHT_PX}px` : `${HUD_ROW_CARD_HEIGHT_PX}px`};
  overflow: hidden;
`;

const PortraitStack = styled.div<{ $orientation: PartyHudOrientation }>`
  position: relative;
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '68px' : '50%'};
  height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '68px' : '100%'};
  min-width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '68px' : '50%'};
  min-height: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '68px' : '100%'};
  overflow: hidden;
`;

const Portrait = styled.img<{ $theme: ThemeData; $orientation: PartyHudOrientation }>`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
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

const MemberContent = styled.div<{ $orientation: PartyHudOrientation }>`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '4px' : '3px'};
  min-width: 0;
  flex: 1;
  width: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '100%' : '50%'};
  padding: ${props => (props.$orientation === 'left' || props.$orientation === 'right') ? '0' : '8px'};
  box-sizing: border-box;
  overflow: hidden;
`;

const MemberName = styled.div<{ $theme: ThemeData }>`
  color: ${props => props.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
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

  const countBossTokens = (items: Item[]): number => {
    return items.filter((item) => item.metadata?.[UnitConstants.BOSS_MODE] === true).length;
  };

  useEffect(() => {
    let mounted = true;

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
    const storedTheme = cache.sceneMetadata[SYSTEM_KEYS.CURRENT_THEME] as ThemeData | undefined;
    if (!storedTheme?.primary || !storedTheme?.offset || !storedTheme?.background || !storedTheme?.border) {
      return DEFAULT_THEME;
    }

    return storedTheme;
  }, [cache.sceneMetadata]);

  const attributes = useMemo(() => {
    const parsed = parseSystemArrayField<SystemAttribute>(cache.sceneMetadata[SYSTEM_KEYS.CURRENT_ATTR]);
    return parsed || (defaultGameSystem.attributes as SystemAttribute[]);
  }, [cache.sceneMetadata]);

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
        return type === 'text' || type === 'numb' || type === 'bool';
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

                  return (
                    <MemberCard key={item.id} $theme={theme} $orientation={orientation}>
                      <PortraitStack $orientation={orientation}>
                        <Portrait src={portrait} alt={unitName} $theme={theme} $orientation={orientation} />
                      </PortraitStack>
                      <MemberContent $orientation={orientation}>
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
