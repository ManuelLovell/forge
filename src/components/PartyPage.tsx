import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import OBR, { isImage } from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSystemData } from '../helpers/useSystemData';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { PageContainer, PageTitle } from './SharedStyledComponents';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

type PartyHudOrientation = 'bottom' | 'left' | 'top' | 'right';

const PARTY_HUD_MODAL_ID = `${OwlbearIds.EXTENSIONID}-partyhud`;

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
  gap: 8px;
  flex-wrap: wrap;
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

const TokenImage = styled.img<{ theme: ForgeTheme; $overlay?: boolean }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
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

const openPartyHudModal = async () => {
  await OBR.modal.open({
    id: PARTY_HUD_MODAL_ID,
    url: '/pages/forgeparty.html',
    fullScreen: true,
    hideBackdrop: true,
    hidePaper: true,
    disablePointerEvents: true
  });
};

export const PartyPage = () => {
  const isHudModalOpenRef = useRef(false);
  const { theme } = useForgeTheme();
  const { attributes } = useSystemData();
  const items = useSceneStore((state) => state.items);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const playerData = useSceneStore((state) => state.playerData);

  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';

  const hudOpen = storageContainer[SettingsConstants.PARTY_HUD_OPEN] === true;
  const storedHudOrientation = storageContainer[SettingsConstants.PARTY_HUD_ORIENTATION];
  const hudOrientation: PartyHudOrientation = isPartyHudOrientation(storedHudOrientation)
    ? storedHudOrientation
    : 'bottom';
  const extraAttrOne = (storageContainer[SettingsConstants.PARTY_HUD_ATTR_ONE] as string | undefined) || '';
  const extraAttrTwo = (storageContainer[SettingsConstants.PARTY_HUD_ATTR_TWO] as string | undefined) || '';

  const partyItems = items.filter((item) => item.metadata[UnitConstants.IN_PARTY] === true);

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

  const handleToggleHudOpen = async () => {
    if (!isCurrentUserGm) {
      return;
    }

    const next = !hudOpen;
    await savePartySetting(SettingsConstants.PARTY_HUD_OPEN, next);

    if (!next) {
      await OBR.modal.close(PARTY_HUD_MODAL_ID);
      isHudModalOpenRef.current = false;
      return;
    }

    await openPartyHudModal();
    isHudModalOpenRef.current = true;
  };

  const handleCycleOrientation = async () => {
    if (!isCurrentUserGm) {
      return;
    }

    const nextOrientation = getNextOrientation(hudOrientation);
    await savePartySetting(SettingsConstants.PARTY_HUD_ORIENTATION, nextOrientation);
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

  useEffect(() => {
    let mounted = true;

    const syncHudModalState = async () => {
      if (hudOpen && !isHudModalOpenRef.current) {
        await openPartyHudModal();
        if (mounted) {
          isHudModalOpenRef.current = true;
        }
        return;
      }

      if (!hudOpen && isHudModalOpenRef.current) {
        await OBR.modal.close(PARTY_HUD_MODAL_ID);
        if (mounted) {
          isHudModalOpenRef.current = false;
        }
      }
    };

    void syncHudModalState();

    return () => {
      mounted = false;
    };
  }, [hudOpen]);

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
            <ControlButton theme={theme} onClick={() => void handleToggleHudOpen()} disabled={!isCurrentUserGm}>
              {hudOpen ? 'Close Party HUD' : 'Open Party HUD'}
            </ControlButton>
            <ControlButton theme={theme} onClick={() => void handleCycleOrientation()} disabled={!isCurrentUserGm}>
              Orientation: {hudOrientation.toUpperCase()}
            </ControlButton>
          </ControlRow>

          <ControlRow>
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
          </ControlRow>

          <ControlHint theme={theme}>
            {isCurrentUserGm
              ? 'Configure Party HUD and portraits. LIST attributes are excluded.'
              : 'Only the GM can configure Party HUD settings.'}
          </ControlHint>
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
                    <PortraitInput
                      theme={theme}
                      disabled={!isCurrentUserGm}
                      defaultValue={portraitOverride}
                      placeholder="Portrait URL override (optional)"
                      onBlur={(event) => {
                        void updatePortraitUrl(item.id, event.target.value);
                      }}
                    />
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