import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PageContainer, PageTitle, Button, Card } from './SharedStyledComponents';
import { ToggleControl } from './ToggleControl';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';

// Styled Components
const SectionTitle = styled.h2<{ theme: ForgeTheme }>`
  ${tw`text-xl font-semibold mb-4 pb-2`}
  color: ${props => props.theme.PRIMARY};
  border-bottom: 2px solid ${props => props.theme.BORDER};
`;

const ControlRow = styled.div<{ theme: ForgeTheme }>`
  ${tw`flex items-center justify-between py-1 last:border-b-0`}
  color: ${props => props.theme.PRIMARY};
`;

const ControlLabel = styled.label<{ theme: ForgeTheme }>`
  ${tw`text-base cursor-pointer flex-1 text-left`}
  color: ${props => props.theme.PRIMARY};
`;

const SubControlRow = styled.div<{ theme: ForgeTheme }>`
  ${tw`flex items-center gap-3 ml-4`}
  color: ${props => props.theme.PRIMARY};
`;

const SubControlLabel = styled.label<{ theme: ForgeTheme }>`
  ${tw`text-sm`}
  color: ${props => props.theme.PRIMARY};
`;

const SmallInput = styled.input<{ theme: ForgeTheme }>`
  ${tw`rounded px-3 py-1 text-sm`}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const SmallSelect = styled.select<{ theme: ForgeTheme }>`
  ${tw`rounded px-3 py-1 text-sm`}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ButtonGroup = tw.div`
  flex gap-3 mt-2 justify-center
`;

export const SettingsPage = () => {
  const { theme } = useForgeTheme();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const sceneItems = useSceneStore((state) => state.items);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  // List Controls state
  const [popcornInitiative, setPopcornInitiative] = useState(false);
  const [reverseInitiative, setReverseInitiative] = useState(false);
  const [diceRange, setDiceRange] = useState('D20');
  const [showCardAccess, setShowCardAccess] = useState(false);

  // Player Controls state
  const [showPlayerView, setShowPlayerView] = useState(false);
  const [showNonPartyUnits, setShowNonPartyUnits] = useState(false);
  const [showHpColorIndicator, setShowHpColorIndicator] = useState(false);
  const [showOwnerOnlyEdit, setShowOwnerOnlyEdit] = useState(false);

  // Game Controls state
  const [showHpBars, setShowHpBars] = useState(false);
  const [hpBarOrientation, setHpBarOrientation] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
  const [showHpNumbers, setShowHpNumbers] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [showTurnEffect, setshowTurnEffect] = useState(false);
  const [useDescriptiveDuplicates, setUseDescriptiveDuplicates] = useState(false);

  // Dice Controls state
  const [enableRumble, setEnableRumble] = useState(false);
  const [enableBones, setEnableBones] = useState(false);
  const [enableDicePlus, setEnableDicePlus] = useState(false);
  const [enableObrNotification, setEnableObrNotification] = useState(false);
  const [showNotificationToAll, setShowNotificationToAll] = useState(false);
  const [enableDiscordLogging, setEnableDiscordLogging] = useState(false);
  const [discordUrl, setDiscordUrl] = useState('');

  // Other
  const [enableConsoleLog, setEnableConsoleLog] = useState(false);

  //Control for setting the data to Room or to Scene
  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  // Load settings from cached metadata when it changes
  useEffect(() => {
    if (!cacheReady) return;

    // Load all settings from metadata
    if (storageContainer[SettingsConstants.POPCORN_INITIATIVE] !== undefined) {
      setPopcornInitiative(storageContainer[SettingsConstants.POPCORN_INITIATIVE] as boolean);
    }
    if (storageContainer[SettingsConstants.REVERSE_INITIATIVE] !== undefined) {
      setReverseInitiative(storageContainer[SettingsConstants.REVERSE_INITIATIVE] as boolean);
    }
    if (storageContainer[SettingsConstants.DICE_RANGE] !== undefined) {
      setDiceRange(storageContainer[SettingsConstants.DICE_RANGE] as string);
    }
    if (storageContainer[SettingsConstants.SHOW_CARD_ACCESS] !== undefined) {
      setShowCardAccess(storageContainer[SettingsConstants.SHOW_CARD_ACCESS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_PLAYER_VIEW] !== undefined) {
      setShowPlayerView(storageContainer[SettingsConstants.SHOW_PLAYER_VIEW] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_OWNER_ONLY_EDIT] !== undefined) {
      setShowOwnerOnlyEdit(storageContainer[SettingsConstants.SHOW_OWNER_ONLY_EDIT] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] !== undefined) {
      setShowNonPartyUnits(storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_HP_COLOR_INDICATOR] !== undefined) {
      setShowHpColorIndicator(storageContainer[SettingsConstants.SHOW_HP_COLOR_INDICATOR] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_HP_BARS] !== undefined) {
      setShowHpBars(storageContainer[SettingsConstants.SHOW_HP_BARS] as boolean);
    }
    if (storageContainer[SettingsConstants.HP_BAR_ORIENTATION] !== undefined) {
      setHpBarOrientation(storageContainer[SettingsConstants.HP_BAR_ORIENTATION] as 'top' | 'bottom' | 'left' | 'right');
    }
    if (storageContainer[SettingsConstants.SHOW_HP_NUMBERS] !== undefined) {
      setShowHpNumbers(storageContainer[SettingsConstants.SHOW_HP_NUMBERS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_NAMES] !== undefined) {
      setShowNames(storageContainer[SettingsConstants.SHOW_NAMES] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_TURN_EFFECT] !== undefined) {
      setshowTurnEffect(storageContainer[SettingsConstants.SHOW_TURN_EFFECT] as boolean);
    }
    if (storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] !== undefined) {
      setUseDescriptiveDuplicates(storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] as boolean);
    }
    if (storageContainer[SettingsConstants.ENABLE_RUMBLE] !== undefined) {
      setEnableRumble(storageContainer[SettingsConstants.ENABLE_RUMBLE] as boolean);
    }
    if (storageContainer[SettingsConstants.ENABLE_BONES] !== undefined) {
      setEnableBones(storageContainer[SettingsConstants.ENABLE_BONES] as boolean);
    }
    if (storageContainer[SettingsConstants.ENABLE_DICE_PLUS] !== undefined) {
      setEnableDicePlus(storageContainer[SettingsConstants.ENABLE_DICE_PLUS] as boolean);
    }
    if (storageContainer[SettingsConstants.ENABLE_OBR_NOTIFICATION] !== undefined) {
      setEnableObrNotification(storageContainer[SettingsConstants.ENABLE_OBR_NOTIFICATION] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_NOTIFICATION_TO_ALL] !== undefined) {
      setShowNotificationToAll(storageContainer[SettingsConstants.SHOW_NOTIFICATION_TO_ALL] as boolean);
    }
    if (storageContainer[SettingsConstants.ENABLE_DISCORD_LOGGING] !== undefined) {
      setEnableDiscordLogging(storageContainer[SettingsConstants.ENABLE_DISCORD_LOGGING] as boolean);
    }
    if (storageContainer[SettingsConstants.DISCORD_URL] !== undefined) {
      setDiscordUrl(storageContainer[SettingsConstants.DISCORD_URL] as string);
    }
    if (storageContainer[SettingsConstants.ENABLE_CONSOLE_LOG] !== undefined) {
      const enabled = storageContainer[SettingsConstants.ENABLE_CONSOLE_LOG] as boolean;
      setEnableConsoleLog(enabled);
      LOGGER.setEnabled(enabled);
    } else {
      setEnableConsoleLog(false);
    }
  }, [cacheReady, storageContainer]);

  const saveData = async (key: string, value: any) => {
    if (DATA_STORED_IN_ROOM) {
      await OBR.room.setMetadata({ [key]: value });
    } else {
      await OBR.scene.setMetadata({ [key]: value });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>Settings</PageTitle>

        {/* Collection Management */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Collection Management</SectionTitle>
          <ButtonGroup>
            <Button theme={theme} onClick={() => LOGGER.log('Export clicked')}>Export</Button>
            <Button theme={theme} onClick={() => LOGGER.log('Import clicked')}>Import</Button>
          </ButtonGroup>
        </Card>

        {/* List Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>List Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Reverse Initiative</ControlLabel>
            <ToggleControl
              label="Reverse Initiative"
              isOn={reverseInitiative}
              onChange={async (value) => {
                setReverseInitiative(value);
                await saveData(SettingsConstants.REVERSE_INITIATIVE, value);
                // Turn off Popcorn Initiative if Reverse Initiative is turned on
                if (value && popcornInitiative) {
                  setPopcornInitiative(false);
                  await saveData(SettingsConstants.POPCORN_INITIATIVE, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Popcorn Initiative</ControlLabel>
            <ToggleControl
              label="Popcorn Initiative"
              isOn={popcornInitiative}
              onChange={async (value) => {
                setPopcornInitiative(value);
                await saveData(SettingsConstants.POPCORN_INITIATIVE, value);
                // Turn off Reverse Initiative if Popcorn Initiative is turned on
                if (value && reverseInitiative) {
                  setReverseInitiative(false);
                  await saveData(SettingsConstants.REVERSE_INITIATIVE, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
              <ControlLabel theme={theme}>Initiative Die: </ControlLabel>
              <SmallInput
                theme={theme}
                type="text"
                value={diceRange}
                onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setDiceRange(value);
                  await saveData(SettingsConstants.DICE_RANGE, value);
                  LOGGER.log('Dice Range:', value);
                }}
                placeholder="D20"
                maxLength={3}
              />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show Card Column</ControlLabel>
            <ToggleControl
              label="Show Stat Block Access"
              isOn={showCardAccess}
              onChange={async (value) => {
                setShowCardAccess(value);
                await saveData(SettingsConstants.SHOW_CARD_ACCESS, value);
              }}
            />
          </ControlRow>
        </Card>

        {/* Player Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Player Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show Player View</ControlLabel>
            <ToggleControl
              label="Show Player View"
              isOn={showPlayerView}
              onChange={async (value) => {
                setShowPlayerView(value);
                await saveData(SettingsConstants.SHOW_PLAYER_VIEW, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show Non-Party Units</ControlLabel>
            <ToggleControl
              label="Show Non-Party Units"
              isOn={showNonPartyUnits}
              onChange={async (value) => {
                setShowNonPartyUnits(value);
                await saveData(SettingsConstants.SHOW_NON_PARTY_UNITS, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show HP Color Indicator</ControlLabel>
            <ToggleControl
              label="Show HP Color Indicator"
              isOn={showHpColorIndicator}
              onChange={async (value) => {
                setShowHpColorIndicator(value);
                await saveData(SettingsConstants.SHOW_HP_COLOR_INDICATOR, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>GM/Owner Only Edit</ControlLabel>
            <ToggleControl
              label="Owner Only Edit"
              isOn={showOwnerOnlyEdit}
              onChange={async (value) => {
                setShowOwnerOnlyEdit(value);
                await saveData(SettingsConstants.SHOW_OWNER_ONLY_EDIT, value);
              }}
            />
          </ControlRow>
        </Card>

        {/* Game Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Game Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show HP Bars on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Bars on tokens"
              isOn={showHpBars}
              onChange={async (value) => {
                setShowHpBars(value);
                await saveData(SettingsConstants.SHOW_HP_BARS, value);
                if (value && showHpNumbers) {
                  setShowHpNumbers(false);
                  await saveData(SettingsConstants.SHOW_HP_NUMBERS, false);
                }
                if (value && storageContainer[SettingsConstants.HP_BAR_ORIENTATION] === undefined) {
                  setHpBarOrientation('bottom');
                  await saveData(SettingsConstants.HP_BAR_ORIENTATION, 'bottom');
                }
              }}
            />
          </ControlRow>
          {(showHpBars || showHpNumbers) && (
            <SubControlRow theme={theme}>
              <SubControlLabel theme={theme}>Orientation: </SubControlLabel>
              <SmallSelect
                theme={theme}
                value={hpBarOrientation}
                onChange={async (e) => {
                  const value = e.target.value as 'top' | 'bottom' | 'left' | 'right';
                  setHpBarOrientation(value);
                  await saveData(SettingsConstants.HP_BAR_ORIENTATION, value);
                }}
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </SmallSelect>
            </SubControlRow>
          )}

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show HP Numbers on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Numbers on tokens"
              isOn={showHpNumbers}
              onChange={async (value) => {
                setShowHpNumbers(value);
                await saveData(SettingsConstants.SHOW_HP_NUMBERS, value);
                if (value && showHpBars) {
                  setShowHpBars(false);
                  await saveData(SettingsConstants.SHOW_HP_BARS, false);
                }
                if (value && storageContainer[SettingsConstants.HP_BAR_ORIENTATION] === undefined) {
                  setHpBarOrientation('bottom');
                  await saveData(SettingsConstants.HP_BAR_ORIENTATION, 'bottom');
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show names on tokens</ControlLabel>
            <ToggleControl
              label="Show names on tokens"
              isOn={showNames}
              onChange={async (value) => {
                setShowNames(value);
                await saveData(SettingsConstants.SHOW_NAMES, value);
                const unitsInList = sceneItems.filter(item => item.metadata[UnitConstants.ON_LIST] === true);
                if (value) {
                  LOGGER.log('Showing names on tokens');
                  await OBR.scene.items.updateItems(unitsInList, (items) => {
                    for (let item of items) {
                      const unitName = item.metadata[UnitConstants.UNIT_NAME];
                      if (unitName) {
                        (item as any).text.plainText = unitName;
                      }
                    }
                  });
                }
                else {
                  LOGGER.log('Hiding names on tokens');
                  await OBR.scene.items.updateItems(unitsInList, (items) => {
                    for (let item of items) {
                      (item as any).text.plainText = '';
                    }
                  });
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show Turn Effect</ControlLabel>
            <ToggleControl
              label="Show Turn Effect"
              isOn={showTurnEffect}
              onChange={async (value) => {
                setshowTurnEffect(value);
                await saveData(SettingsConstants.SHOW_TURN_EFFECT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Use Descriptive Names</ControlLabel>
            <ToggleControl
              label="Use Descriptive Duplicates Names"
              isOn={useDescriptiveDuplicates}
              onChange={async (value) => {
                setUseDescriptiveDuplicates(value);
                await saveData(SettingsConstants.USE_DESCRIPTIVE_DUPLICATES, value);
              }}
            />
          </ControlRow>
        </Card>

        {/* Dice Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Dice Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable Rumble! Integration</ControlLabel>
            <ToggleControl
              label="Enable Rumble! Integration"
              isOn={enableRumble}
              onChange={async (value) => {
                setEnableRumble(value);
                await saveData(SettingsConstants.ENABLE_RUMBLE, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable Bones! Integration</ControlLabel>
            <ToggleControl
              label="Enable Bones! Integration"
              isOn={enableBones}
              onChange={async (value) => {
                setEnableBones(value);
                await saveData(SettingsConstants.ENABLE_BONES, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable Dice+ Integration</ControlLabel>
            <ToggleControl
              label="Enable Dice+ Integration"
              isOn={enableDicePlus}
              onChange={async (value) => {
                setEnableDicePlus(value);
                await saveData(SettingsConstants.ENABLE_DICE_PLUS, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable OBR Notification</ControlLabel>
            <ToggleControl
              label="Enable OBR Notification"
              isOn={enableObrNotification}
              onChange={async (value) => {
                setEnableObrNotification(value);
                await saveData(SettingsConstants.ENABLE_OBR_NOTIFICATION, value);
              }}
            />
          </ControlRow>
          {enableObrNotification && (
            <SubControlRow theme={theme}>
              <ControlLabel theme={theme} style={{ minWidth: 'auto' }}>Show Notification to All</ControlLabel>
              <ToggleControl
                label="Show Notification to All"
                isOn={showNotificationToAll}
                onChange={async (value) => {
                  setShowNotificationToAll(value);
                  await saveData(SettingsConstants.SHOW_NOTIFICATION_TO_ALL, value);
                }}
              />
            </SubControlRow>
          )}

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable Discord Logging</ControlLabel>
            <ToggleControl
              label="Enable Discord Logging"
              isOn={enableDiscordLogging}
              onChange={async (value) => {
                setEnableDiscordLogging(value);
                await saveData(SettingsConstants.ENABLE_DISCORD_LOGGING, value);
              }}
            />
          </ControlRow>
          {enableDiscordLogging && (
            <SubControlRow theme={theme}>
              <SubControlLabel theme={theme}>Discord Url: </SubControlLabel>
              <SmallInput
                theme={theme}
                type="text"
                value={discordUrl}
                onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setDiscordUrl(value);
                  await saveData(SettingsConstants.DISCORD_URL, value);
                  LOGGER.log('Discord URL:', value);
                }}
                placeholder="https://discord.com/api/webhooks/..."
                maxLength={200}
              />
            </SubControlRow>
          )}
        </Card>

        <Card theme={theme}>
          <SectionTitle theme={theme}>Other</SectionTitle>
          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Enable Console Log</ControlLabel>
            <ToggleControl
              label="Enable Console Log"
              isOn={enableConsoleLog}
              onChange={async (value) => {
                setEnableConsoleLog(value);
                LOGGER.setEnabled(value);
                await saveData(SettingsConstants.ENABLE_CONSOLE_LOG, value);
              }}
            />
          </ControlRow>
        </Card>
      </PageContainer>
    </motion.div>
  );
};
