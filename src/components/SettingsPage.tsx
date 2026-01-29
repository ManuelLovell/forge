import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import {
  SettingsContainer,
  SettingsTitle,
  SettingsSection,
  SectionTitle,
  ControlRow,
  ControlLabel,
  SubControlRow,
  SubControlLabel,
  TextInput,
  Button,
  ButtonGroup,
} from './SettingsStyles';
import { ToggleControl } from './ToggleControl';
import LOGGER from '../helpers/Logger';
import { SettingsConstants } from '../interfaces/SettingsKeys.d';
import { useSceneStore } from '../helpers/BSCache';

export const SettingsPage = () => {
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  // List Controls state
  const [showRollerColumn, setShowRollerColumn] = useState(false);
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

  // Load settings from cached metadata when it changes
  useEffect(() => {
    if (!cacheReady) return;
    
    // Load all settings from metadata
    if (roomMetadata[SettingsConstants.SHOW_ROLLER_COLUMN] !== undefined) {
      setShowRollerColumn(roomMetadata[SettingsConstants.SHOW_ROLLER_COLUMN] as boolean);
    }
    if (roomMetadata[SettingsConstants.DICE_RANGE] !== undefined) {
      setDiceRange(roomMetadata[SettingsConstants.DICE_RANGE] as string);
    }
    if (roomMetadata[SettingsConstants.SHOW_CARD_ACCESS] !== undefined) {
      setShowCardAccess(roomMetadata[SettingsConstants.SHOW_CARD_ACCESS] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_PLAYER_VIEW] !== undefined) {
      setShowPlayerView(roomMetadata[SettingsConstants.SHOW_PLAYER_VIEW] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_NON_PARTY_UNITS] !== undefined) {
      setShowNonPartyUnits(roomMetadata[SettingsConstants.SHOW_NON_PARTY_UNITS] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_HP_COLOR_INDICATOR] !== undefined) {
      setShowHpColorIndicator(roomMetadata[SettingsConstants.SHOW_HP_COLOR_INDICATOR] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_HP_BARS] !== undefined) {
      setShowHpBars(roomMetadata[SettingsConstants.SHOW_HP_BARS] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_HP_NUMBERS] !== undefined) {
      setShowHpNumbers(roomMetadata[SettingsConstants.SHOW_HP_NUMBERS] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_NAMES] !== undefined) {
      setShowNames(roomMetadata[SettingsConstants.SHOW_NAMES] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_TURN_LABEL] !== undefined) {
      setShowTurnLabel(roomMetadata[SettingsConstants.SHOW_TURN_LABEL] as boolean);
    }
    if (roomMetadata[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] !== undefined) {
      setUseDescriptiveDuplicates(roomMetadata[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] as boolean);
    }
    if (roomMetadata[SettingsConstants.ENABLE_RUMBLE] !== undefined) {
      setEnableRumble(roomMetadata[SettingsConstants.ENABLE_RUMBLE] as boolean);
    }
    if (roomMetadata[SettingsConstants.ENABLE_BONES] !== undefined) {
      setEnableBones(roomMetadata[SettingsConstants.ENABLE_BONES] as boolean);
    }
    if (roomMetadata[SettingsConstants.ENABLE_DICE_PLUS] !== undefined) {
      setEnableDicePlus(roomMetadata[SettingsConstants.ENABLE_DICE_PLUS] as boolean);
    }
    if (roomMetadata[SettingsConstants.ENABLE_OBR_NOTIFICATION] !== undefined) {
      setEnableObrNotification(roomMetadata[SettingsConstants.ENABLE_OBR_NOTIFICATION] as boolean);
    }
    if (roomMetadata[SettingsConstants.SHOW_NOTIFICATION_TO_ALL] !== undefined) {
      setShowNotificationToAll(roomMetadata[SettingsConstants.SHOW_NOTIFICATION_TO_ALL] as boolean);
    }
    if (roomMetadata[SettingsConstants.ENABLE_DISCORD_LOGGING] !== undefined) {
      setEnableDiscordLogging(roomMetadata[SettingsConstants.ENABLE_DISCORD_LOGGING] as boolean);
    }
    if (roomMetadata[SettingsConstants.DISCORD_URL] !== undefined) {
      setDiscordUrl(roomMetadata[SettingsConstants.DISCORD_URL] as string);
    }
  }, [cacheReady, roomMetadata]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <SettingsContainer>
        <SettingsTitle>Settings</SettingsTitle>

        {/* Collection Management */}
        <SettingsSection>
          <SectionTitle>Collection Management</SectionTitle>
          <ButtonGroup>
            <Button onClick={() => LOGGER.log('Export clicked')}>Export</Button>
            <Button onClick={() => LOGGER.log('Import clicked')}>Import</Button>
          </ButtonGroup>
        </SettingsSection>

        {/* List Controls, Defaults */}
        <SettingsSection>
          <SectionTitle>List Controls, Defaults</SectionTitle>
          
          <ControlRow>
            <ControlLabel>Show Roller Column</ControlLabel>
            <ToggleControl
              label="Show Roller Column"
              isOn={showRollerColumn}
              onChange={async (value) => {
                setShowRollerColumn(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_ROLLER_COLUMN]: value });
              }}
            />
          </ControlRow>
          {showRollerColumn && (
            <SubControlRow>
              <SubControlLabel>Dice Range: </SubControlLabel>
              <TextInput
                type="text"
                value={diceRange}
                onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setDiceRange(value);
                  await OBR.room.setMetadata({ [SettingsConstants.DICE_RANGE]: value });
                  LOGGER.log('Dice Range:', value);
                }}
                placeholder="D20"
                maxLength={3}
              />
            </SubControlRow>
          )}

          <ControlRow>
            <ControlLabel>Show Card Access</ControlLabel>
            <ToggleControl
              label="Show Card Access"
              isOn={showCardAccess}
              onChange={async (value) => {
                setShowCardAccess(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_CARD_ACCESS]: value });
              }}
            />
          </ControlRow>
        </SettingsSection>

        {/* Player Controls */}
        <SettingsSection>
          <SectionTitle>Player Controls</SectionTitle>
          
          <ControlRow>
            <ControlLabel>Show Player View</ControlLabel>
            <ToggleControl
              label="Show Player View"
              isOn={showPlayerView}
              onChange={async (value) => {
                setShowPlayerView(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_PLAYER_VIEW]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show Non-Party Units</ControlLabel>
            <ToggleControl
              label="Show Non-Party Units"
              isOn={showNonPartyUnits}
              onChange={async (value) => {
                setShowNonPartyUnits(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_NON_PARTY_UNITS]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show HP Color Indicator</ControlLabel>
            <ToggleControl
              label="Show HP Color Indicator"
              isOn={showHpColorIndicator}
              onChange={async (value) => {
                setShowHpColorIndicator(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_HP_COLOR_INDICATOR]: value });
              }}
            />
          </ControlRow>
        </SettingsSection>

        {/* Game Controls */}
        <SettingsSection>
          <SectionTitle>Game Controls</SectionTitle>
          
          <ControlRow>
            <ControlLabel>Show HP Bars on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Bars on tokens"
              isOn={showHpBars}
              onChange={async (value) => {
                setShowHpBars(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_HP_BARS]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show HP Numbers on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Numbers on tokens"
              isOn={showHpNumbers}
              onChange={async (value) => {
                setShowHpNumbers(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_HP_NUMBERS]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show names on tokens</ControlLabel>
            <ToggleControl
              label="Show names on tokens"
              isOn={showNames}
              onChange={async (value) => {
                setShowNames(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_NAMES]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show Turn label</ControlLabel>
            <ToggleControl
              label="Show Turn label"
              isOn={showTurnLabel}
              onChange={async (value) => {
                setShowTurnLabel(value);
                await OBR.room.setMetadata({ [SettingsConstants.SHOW_TURN_LABEL]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Use Descriptive Names</ControlLabel>
            <ToggleControl
              label="Use Descriptive Duplicates Names"
              isOn={useDescriptiveDuplicates}
              onChange={async (value) => {
                setUseDescriptiveDuplicates(value);
                await OBR.room.setMetadata({ [SettingsConstants.USE_DESCRIPTIVE_DUPLICATES]: value });
              }}
            />
          </ControlRow>
        </SettingsSection>

        {/* Dice Controls */}
        <SettingsSection>
          <SectionTitle>Dice Controls</SectionTitle>
          
          <ControlRow>
            <ControlLabel>Enable Rumble! Integration</ControlLabel>
            <ToggleControl
              label="Enable Rumble! Integration"
              isOn={enableRumble}
              onChange={async (value) => {
                setEnableRumble(value);
                await OBR.room.setMetadata({ [SettingsConstants.ENABLE_RUMBLE]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable Bones! Integration</ControlLabel>
            <ToggleControl
              label="Enable Bones! Integration"
              isOn={enableBones}
              onChange={async (value) => {
                setEnableBones(value);
                await OBR.room.setMetadata({ [SettingsConstants.ENABLE_BONES]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable Dice+ Integration</ControlLabel>
            <ToggleControl
              label="Enable Dice+ Integration"
              isOn={enableDicePlus}
              onChange={async (value) => {
                setEnableDicePlus(value);
                await OBR.room.setMetadata({ [SettingsConstants.ENABLE_DICE_PLUS]: value });
              }}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable OBR Notification</ControlLabel>
            <ToggleControl
              label="Enable OBR Notification"
              isOn={enableObrNotification}
              onChange={async (value) => {
                setEnableObrNotification(value);
                await OBR.room.setMetadata({ [SettingsConstants.ENABLE_OBR_NOTIFICATION]: value });
              }}
            />
          </ControlRow>
          {enableObrNotification && (
            <SubControlRow>
              <ControlLabel style={{ minWidth: 'auto' }}>Show Notification to All</ControlLabel>
              <ToggleControl
                label="Show Notification to All"
                isOn={showNotificationToAll}
                onChange={async (value) => {
                  setShowNotificationToAll(value);
                  await OBR.room.setMetadata({ [SettingsConstants.SHOW_NOTIFICATION_TO_ALL]: value });
                }}
              />
            </SubControlRow>
          )}

          <ControlRow>
            <ControlLabel>Enable Discord Logging</ControlLabel>
            <ToggleControl
              label="Enable Discord Logging"
              isOn={enableDiscordLogging}
              onChange={async (value) => {
                setEnableDiscordLogging(value);
                await OBR.room.setMetadata({ [SettingsConstants.ENABLE_DISCORD_LOGGING]: value });
              }}
            />
          </ControlRow>
          {enableDiscordLogging && (
            <SubControlRow>
              <SubControlLabel>Discord Url: </SubControlLabel>
              <TextInput
                type="text"
                value={discordUrl}
                onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setDiscordUrl(value);
                  await OBR.room.setMetadata({ [SettingsConstants.DISCORD_URL]: value });
                  LOGGER.log('Discord URL:', value);
                }}
                placeholder="https://discord.com/api/webhooks/..."
                maxLength={200}
              />
            </SubControlRow>
          )}
        </SettingsSection>
      </SettingsContainer>
    </motion.div>
  );
};
