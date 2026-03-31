import { useMemo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OBR, { isImage, Item } from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSystemData } from '../helpers/useSystemData';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { SettingsConstants, UnitConstants, getPerPlayerSettingKey } from '../interfaces/MetadataKeys';
import { PageContainer, PageTitle } from './SharedStyledComponents';
import { ToggleControl } from './ToggleControl';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { closePartyHudModal, openPartyHudModal } from '../helpers/partyHudModal';

type PartyHudOrientation = 'bottom' | 'left' | 'top' | 'right';

const PARTY_SAVE_KEY = 'forge:party_save';

interface PartySaveData {
  savedAt: string;
  items: Item[];
}

const PartyList = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PartyControls = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.BORDER};
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const CenteredControlRow = styled(ControlRow)`
  justify-content: center;
`;

const ControlLabel = styled.span<{ theme: ForgeTheme }>`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`;

const ControlButton = styled.button<{ theme: ForgeTheme }>`
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  background: ${props => rgbaFromHex(props.theme.OFFSET, 0.45)};
  color: ${props => props.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const ControlSelect = styled.select<{ theme: ForgeTheme }>`
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.55)};
  color: ${props => props.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`;

const ControlHint = styled.p<{ theme: ForgeTheme }>`
  margin: 0;
  font-size: 12px;
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.8)};
`;

const ToggleRow = styled.div<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${props => props.$disabled ? 0.55 : 1};
`;

const ToggleLabel = styled.span<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 12px;
`;

const PartyItem = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.BORDER};
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const TokenImageStack = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`;

const TokenImage = styled.img<{ theme: ForgeTheme; $overlay?: boolean; $full?: boolean }>`
  width: ${props => props.$full ? '100%' : '40px'};
  height: ${props => props.$full ? '100%' : '40px'};
  min-width: ${props => props.$full ? '100%' : '40px'};
  position: absolute;
  left: ${props => props.$overlay ? '20px' : '0'};
  top: ${props => props.$overlay ? '20px' : '0'};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.BORDER};
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.6)};
`;

const UnitMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

const UnitName = styled.span<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

const PortraitInput = styled.input<{ theme: ForgeTheme }>`
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.55)};
  color: ${props => props.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const EmptyState = styled.p<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin: 0;
`;

const SaveTimestamp = styled.span<{ theme: ForgeTheme }>`
  display: block;
  font-size: 10px;
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.55)};
  text-align: center;
  margin-top: 4px;
`;

const getNextOrientation = (current: PartyHudOrientation): PartyHudOrientation => {
  switch (current) {
    case 'bottom':
      return 'left';
    case 'left':
      return 'top';
    case 'top':
      return 'right';
    case 'right':
    default:
      return 'bottom';
  }
};

const isPartyHudOrientation = (value: unknown): value is PartyHudOrientation => {
  return value === 'bottom' || value === 'left' || value === 'top' || value === 'right';
};

export const PartyPage = () => {
  const isHudModalOpenRef = useRef(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const { theme } = useForgeTheme();
  const { attributes } = useSystemData();
  const items = useSceneStore((state) => state.items);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const playerData = useSceneStore((state) => state.playerData);

  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';
  const currentPlayerId = playerData?.id;
  const partyHudOpenKey = getPerPlayerSettingKey(SettingsConstants.PARTY_HUD_OPEN, currentPlayerId);
  const partyHudOrientationKey = getPerPlayerSettingKey(SettingsConstants.PARTY_HUD_ORIENTATION, currentPlayerId);

  const hudOpenRaw = storageContainer[partyHudOpenKey] ?? storageContainer[SettingsConstants.PARTY_HUD_OPEN];
  const hudOpen = hudOpenRaw === true;
  const storedHudOrientation = storageContainer[partyHudOrientationKey] ?? storageContainer[SettingsConstants.PARTY_HUD_ORIENTATION];
  const hudOrientation: PartyHudOrientation = isPartyHudOrientation(storedHudOrientation)
    ? storedHudOrientation
    : 'bottom';
  const extraAttrOne = (storageContainer[SettingsConstants.PARTY_HUD_ATTR_ONE] as string | undefined) || '';
  const extraAttrTwo = (storageContainer[SettingsConstants.PARTY_HUD_ATTR_TWO] as string | undefined) || '';
  const showPartyHudHpBars = storageContainer[SettingsConstants.PARTY_HUD_SHOW_HP_BARS] === true;
  const showPartyHudHpNumbers = storageContainer[SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS] === true
    && !showPartyHudHpBars;

  const partyItems = items.filter((item) => item.metadata[UnitConstants.IN_PARTY] === true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PARTY_SAVE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as PartySaveData;
        setLastSaved(parsed.savedAt ?? null);
      }
    } catch {
      // ignore malformed save
    }
  }, []);

  const handleSaveParty = () => {
    const saveData: PartySaveData = {
      savedAt: new Date().toISOString(),
      items: partyItems,
    };
    localStorage.setItem(PARTY_SAVE_KEY, JSON.stringify(saveData));
    setLastSaved(saveData.savedAt);
  };

  const handleLoadParty = async () => {
    const raw = localStorage.getItem(PARTY_SAVE_KEY);
    if (!raw) return;
    try {
      const saveData = JSON.parse(raw) as PartySaveData;
      if (!saveData.items.length) return;

      // Remove any currently existing scene items that share an ID with the saved ones.
      const savedIds = new Set(saveData.items.map((i) => i.id));
      const conflictingIds = items
        .filter((item) => savedIds.has(item.id))
        .map((item) => item.id);

      if (conflictingIds.length > 0) {
        await OBR.scene.items.deleteItems(conflictingIds);
      }

      // Convert the anchor screen point to scene coordinates, then stagger each token.
      const [vpWidth, vpHeight] = await Promise.all([
        OBR.viewport.getWidth(),
        OBR.viewport.getHeight(),
      ]);

      const anchorScreen = { x: vpWidth * 0.75, y: vpHeight * 0.60 };
      const anchorScene = await OBR.viewport.inverseTransformPoint(anchorScreen);

      // Determine stagger distance in scene units by converting a screen offset.
      const offsetScreen = { x: anchorScreen.x - 75, y: anchorScreen.y - 75 };
      const offsetScene = await OBR.viewport.inverseTransformPoint(offsetScreen);
      const stepX = offsetScene.x - anchorScene.x;
      const stepY = offsetScene.y - anchorScene.y;

      const repositionedItems = saveData.items.map((item, index) => ({
        ...item,
        position: {
          x: anchorScene.x + stepX * index,
          y: anchorScene.y + stepY * index,
        },
      }));

      await OBR.scene.items.addItems(repositionedItems);
    } catch {
      // ignore malformed save
    }
  };

  const allowedAttributes = useMemo(() => {
    return attributes.filter((attribute) => {
      const type = String(attribute.attr_type || '').toLowerCase();
      return type === 'text' || type === 'numb' || type === 'bool';
    });
  }, [attributes]);

  const savePartySetting = async (key: string, value: unknown) => {
    if (DATA_STORED_IN_ROOM) {
      await OBR.room.setMetadata({ [key]: value });
      return;
    }

    await OBR.scene.setMetadata({ [key]: value });
  };

  const savePartySettings = async (values: Record<string, unknown>) => {
    if (DATA_STORED_IN_ROOM) {
      await OBR.room.setMetadata(values);
      return;
    }

    await OBR.scene.setMetadata(values);
  };

  const handleToggleHudOpen = async () => {
    const next = !hudOpen;
    await savePartySetting(partyHudOpenKey, next);

    if (!next) {
      await closePartyHudModal();
      isHudModalOpenRef.current = false;
      return;
    }

    await openPartyHudModal();
    isHudModalOpenRef.current = true;
  };

  const handleCycleOrientation = async () => {
    const nextOrientation = getNextOrientation(hudOrientation);
    await savePartySetting(partyHudOrientationKey, nextOrientation);
  };

  const updatePortraitUrl = async (unitId: string, value: string) => {
    const normalized = value.trim();

    await OBR.scene.items.updateItems([unitId], (itemsToUpdate) => {
      const metadata = { ...(itemsToUpdate[0].metadata || {}) };
      if (!normalized) {
        delete metadata[UnitConstants.PORTRAIT_URL];
      } else {
        metadata[UnitConstants.PORTRAIT_URL] = normalized;
      }
      itemsToUpdate[0].metadata = metadata;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ height: '100%' }}
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>Party</PageTitle>
        <PartyControls theme={theme}>
          <ControlRow>
            <ControlButton theme={theme} onClick={() => void handleCycleOrientation()}>
              Display: {hudOrientation.toUpperCase()}
            </ControlButton>
            <ControlButton theme={theme} onClick={() => void handleToggleHudOpen()}>
              {hudOpen ? 'Close Party HUD' : 'Open Party HUD'}
            </ControlButton>
          </ControlRow>

          {isCurrentUserGm && (
            <>
              <CenteredControlRow>
                <ControlLabel theme={theme}>Show in HUD:</ControlLabel>
                <ToggleRow $disabled={!isCurrentUserGm}>
                  <ToggleLabel theme={theme}>Show HP Bars</ToggleLabel>
                  <ToggleControl
                    label="Party HUD Show HP Bars"
                    isOn={showPartyHudHpBars}
                    onChange={(next) => {
                      if (!isCurrentUserGm) return;
                      if (next) {
                        void savePartySettings({
                          [SettingsConstants.PARTY_HUD_SHOW_HP_BARS]: true,
                          [SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS]: false,
                        });
                        return;
                      }
                      void savePartySetting(SettingsConstants.PARTY_HUD_SHOW_HP_BARS, false);
                    }}
                  />
                </ToggleRow>
                <ToggleRow $disabled={!isCurrentUserGm}>
                  <ToggleLabel theme={theme}>Show HP Numbers</ToggleLabel>
                  <ToggleControl
                    label="Party HUD Show HP Numbers"
                    isOn={showPartyHudHpNumbers}
                    onChange={(next) => {
                      if (!isCurrentUserGm) return;
                      if (next) {
                        void savePartySettings({
                          [SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS]: true,
                          [SettingsConstants.PARTY_HUD_SHOW_HP_BARS]: false,
                        });
                        return;
                      }
                      void savePartySetting(SettingsConstants.PARTY_HUD_SHOW_HP_NUMBERS, false);
                    }}
                  />
                </ToggleRow>
                <ControlSelect
                  theme={theme}
                  disabled={!isCurrentUserGm}
                  value={extraAttrOne}
                  onChange={(event) => {
                    const value = event.target.value;
                    void savePartySetting(SettingsConstants.PARTY_HUD_ATTR_ONE, value);
                    if (value && value === extraAttrTwo) {
                      void savePartySetting(SettingsConstants.PARTY_HUD_ATTR_TWO, '');
                    }
                  }}
                >
                  <option value="">Extra Slot 1 (None)</option>
                  {allowedAttributes.map((attribute) => (
                    <option key={attribute.attr_bid} value={attribute.attr_bid}>
                      {(attribute.attr_name || attribute.attr_bid)}
                    </option>
                  ))}
                </ControlSelect>

                <ControlSelect
                  theme={theme}
                  disabled={!isCurrentUserGm}
                  value={extraAttrTwo}
                  onChange={(event) => {
                    const value = event.target.value;
                    void savePartySetting(SettingsConstants.PARTY_HUD_ATTR_TWO, value);
                    if (value && value === extraAttrOne) {
                      void savePartySetting(SettingsConstants.PARTY_HUD_ATTR_ONE, '');
                    }
                  }}
                >
                  <option value="">Extra Slot 2 (None)</option>
                  {allowedAttributes.map((attribute) => (
                    <option key={attribute.attr_bid} value={attribute.attr_bid}>
                      {(attribute.attr_name || attribute.attr_bid)}
                    </option>
                  ))}
                </ControlSelect>
              </CenteredControlRow>

              <ControlHint theme={theme}>
                <>
                  Configure Party HUD and portraits.
                  <br />
                  LIST attributes are excluded.
                </>
              </ControlHint>
            </>
          )}
        </PartyControls>

        <PartyControls theme={theme}>
          <CenteredControlRow>
            <ControlButton
              theme={theme}
              onClick={handleSaveParty}
              disabled={partyItems.length === 0}
            >
              Save Party
            </ControlButton>
            <ControlButton
              theme={theme}
              onClick={() => void handleLoadParty()}
              disabled={lastSaved === null}
            >
              Load Party
            </ControlButton>
          </CenteredControlRow>
          <SaveTimestamp theme={theme}>
            {lastSaved
              ? `Last saved: ${new Date(lastSaved).toLocaleString()}`
              : 'No save available.'}
          </SaveTimestamp>
        </PartyControls>

        {partyItems.length === 0 ? (
          <EmptyState theme={theme}>
            No one is in the Party.  Add a unit using the ContextMenu on the token.
          </EmptyState>
        ) : (
          <PartyList theme={theme}>
            {partyItems.map((item) => {
              const portraitOverride = (item.metadata?.[UnitConstants.PORTRAIT_URL] as string | undefined) || '';
              const tokenUrl = isImage(item) ? item.image.url : undefined;
              const unitName = (item.metadata[UnitConstants.UNIT_NAME] as string) || item.name || 'Unknown';
              const isOwner = item.createdUserId === playerData?.id;
              const canEditPortraitOverride = isCurrentUserGm || isOwner;
              const basePortrait = tokenUrl || '/logo.png';
              const hasPortraitOverride = Boolean(portraitOverride);
              const overlayPortrait = hasPortraitOverride ? portraitOverride : '';

              return (
                <PartyItem key={item.id} theme={theme}>
                  <TokenImageStack>
                    <TokenImage
                      theme={theme}
                      src={basePortrait}
                      alt={unitName}
                      $full={!hasPortraitOverride}
                    />
                    {hasPortraitOverride && (
                      <TokenImage
                        theme={theme}
                        src={overlayPortrait}
                        alt={`${unitName} override`}
                        $overlay
                      />
                    )}
                  </TokenImageStack>
                  <UnitMeta>
                    <UnitName theme={theme} title={unitName}>{unitName}</UnitName>
                    {canEditPortraitOverride && (
                      <PortraitInput
                        theme={theme}
                        defaultValue={portraitOverride}
                        placeholder="Portrait URL override (optional)"
                        onBlur={(event) => {
                          void updatePortraitUrl(item.id, event.target.value);
                        }}
                      />
                    )}
                  </UnitMeta>
                </PartyItem>
              );
            })}
          </PartyList>
        )}
      </PageContainer>
    </motion.div>
  );
};