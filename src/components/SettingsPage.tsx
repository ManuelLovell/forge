import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import {
  SectionTitle,
  ControlRow,
  ControlLabel,
  SubControlRow,
  SubControlLabel,
  SmallInput,
  ButtonGroup,
} from './SettingsStyles';
import { PageContainer, PageTitle, Button, Card } from './SharedStyledComponents';
import { ToggleControl } from './ToggleControl';
import LOGGER from '../helpers/Logger';
import { SettingsConstants } from '../interfaces/SettingsKeys.d';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';

export const SettingsPage = () => {
  const { theme } = useForgeTheme();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  // List Controls state
  const [showRollerColumn, setShowRollerColumn] = useState(false);
  const [popcornInitiative, setPopcornInitiative] = useState(false);
  const [reverseInitiative, setReverseInitiative] = useState(false);
  const [diceRange, setDiceRange] = useState('D20');
  const [showCardAccess, setShowCardAccess] = useState(false);

  // Player Controls state
  const [showPlayerView, setShowPlayerView] = useState(false);
  const [showNonPartyUnits, setShowNonPartyUnits] = useState(false);
  const [showHpColorIndicator, setShowHpColorIndicator] = useState(false);

  // Game Controls state
  const [showHpBars, setShowHpBars] = useState(false);
  const [showHpNumbers, setShowHpNumbers] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [showTurnLabel, setShowTurnLabel] = useState(false);
  const [useDescriptiveDuplicates, setUseDescriptiveDuplicates] = useState(false);

  // Dice Controls state
  const [enableRumble, setEnableRumble] = useState(false);
  const [enableBones, setEnableBones] = useState(false);
  const [enableDicePlus, setEnableDicePlus] = useState(false);
  const [enableObrNotification, setEnableObrNotification] = useState(false);
  const [showNotificationToAll, setShowNotificationToAll] = useState(false);
  const [enableDiscordLogging, setEnableDiscordLogging] = useState(false);
  const [discordUrl, setDiscordUrl] = useState('');

  //Control for setting the data to Room or to Scene
  const dataStoredinRoom = false; // For now, all settings are saved to Room level
  const storageContainer = dataStoredinRoom ? roomMetadata : sceneMetadata;
  // Load settings from cached metadata when it changes
  useEffect(() => {
    if (!cacheReady) return;
    
    // Load all settings from metadata
    if (storageContainer[SettingsConstants.SHOW_ROLLER_COLUMN] !== undefined) {
      setShowRollerColumn(storageContainer[SettingsConstants.SHOW_ROLLER_COLUMN] as boolean);
    }
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
    if (storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] !== undefined) {
      setShowNonPartyUnits(storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_HP_COLOR_INDICATOR] !== undefined) {
      setShowHpColorIndicator(storageContainer[SettingsConstants.SHOW_HP_COLOR_INDICATOR] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_HP_BARS] !== undefined) {
      setShowHpBars(storageContainer[SettingsConstants.SHOW_HP_BARS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_HP_NUMBERS] !== undefined) {
      setShowHpNumbers(storageContainer[SettingsConstants.SHOW_HP_NUMBERS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_NAMES] !== undefined) {
      setShowNames(storageContainer[SettingsConstants.SHOW_NAMES] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_TURN_LABEL] !== undefined) {
      setShowTurnLabel(storageContainer[SettingsConstants.SHOW_TURN_LABEL] as boolean);
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
  }, [cacheReady, storageContainer]);

  const saveData = async (key: string, value: any) => {
    if (dataStoredinRoom) {
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
            <ControlLabel theme={theme}>Show Roller Column</ControlLabel>
            <ToggleControl
              label="Show Roller Column"
              isOn={showRollerColumn}
              onChange={async (value) => {
                setShowRollerColumn(value);
                await saveData(SettingsConstants.SHOW_ROLLER_COLUMN, value);
              }}
            />
          </ControlRow>
          {showRollerColumn && (
            <SubControlRow theme={theme}>
              <SubControlLabel theme={theme}>Dice Range: </SubControlLabel>
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
            </SubControlRow>
          )}

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
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show HP Numbers on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Numbers on tokens"
              isOn={showHpNumbers}
              onChange={async (value) => {
                setShowHpNumbers(value);
                await saveData(SettingsConstants.SHOW_HP_NUMBERS, value);
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
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>Show Turn label</ControlLabel>
            <ToggleControl
              label="Show Turn label"
              isOn={showTurnLabel}
              onChange={async (value) => {
                setShowTurnLabel(value);
                await saveData(SettingsConstants.SHOW_TURN_LABEL, value);
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
      </PageContainer>
    </motion.div>
  );
};
