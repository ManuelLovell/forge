import { useState } from 'react';
import { motion } from 'framer-motion';
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

export const SettingsPage = () => {
  // Collection Management state
  const [collectionStates, setCollectionStates] = useState({});

  // List Controls state
  const [showRollerColumn, setShowRollerColumn] = useState(false);
  const [diceRange, setDiceRange] = useState('D20');
  const [showCardAccess, setShowCardAccess] = useState(false);

  // Player Controls state
  const [showPlayerView, setShowPlayerView] = useState(false);
  const [showNonPartyUnits, setShowNonPartyUnits] = useState(false);
  const [showHpColorIndicator, setShowHpColorIndicator] = useState(false);
  const [hpColorText, setHpColorText] = useState('');

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
            <Button onClick={() => console.log('Export clicked')}>Export</Button>
            <Button onClick={() => console.log('Import clicked')}>Import</Button>
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
              onChange={setShowRollerColumn}
            />
          </ControlRow>
          {showRollerColumn && (
            <SubControlRow>
              <SubControlLabel>Dice Range: </SubControlLabel>
              <TextInput
                type="text"
                value={diceRange}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setDiceRange(value);
                  console.log('Dice Range:', value);
                }}
                placeholder="D20"
                maxLength={4}
              />
            </SubControlRow>
          )}

          <ControlRow>
            <ControlLabel>Show Card Access</ControlLabel>
            <ToggleControl
              label="Show Card Access"
              isOn={showCardAccess}
              onChange={setShowCardAccess}
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
              onChange={setShowPlayerView}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show Non-Party Units</ControlLabel>
            <ToggleControl
              label="Show Non-Party Units"
              isOn={showNonPartyUnits}
              onChange={setShowNonPartyUnits}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show HP Color Indicator</ControlLabel>
            <ToggleControl
              label="Show HP Color Indicator"
              isOn={showHpColorIndicator}
              onChange={setShowHpColorIndicator}
            />
          </ControlRow>
          {showHpColorIndicator && (
            <SubControlRow>
              <SubControlLabel>Battle-System ID: </SubControlLabel>
              <TextInput
                type="text"
                value={hpColorText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value.slice(0, 4);
                  setHpColorText(value);
                  console.log('HP Color Text:', value);
                }}
                placeholder="Z123"
                maxLength={4}
              />
            </SubControlRow>
          )}
        </SettingsSection>

        {/* Game Controls */}
        <SettingsSection>
          <SectionTitle>Game Controls</SectionTitle>
          
          <ControlRow>
            <ControlLabel>Show HP Bars on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Bars on tokens"
              isOn={showHpBars}
              onChange={setShowHpBars}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show HP Numbers on tokens</ControlLabel>
            <ToggleControl
              label="Show HP Numbers on tokens"
              isOn={showHpNumbers}
              onChange={setShowHpNumbers}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show names on tokens</ControlLabel>
            <ToggleControl
              label="Show names on tokens"
              isOn={showNames}
              onChange={setShowNames}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Show Turn label</ControlLabel>
            <ToggleControl
              label="Show Turn label"
              isOn={showTurnLabel}
              onChange={setShowTurnLabel}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Use Descriptive Names</ControlLabel>
            <ToggleControl
              label="Use Descriptive Duplicates Names"
              isOn={useDescriptiveDuplicates}
              onChange={setUseDescriptiveDuplicates}
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
              onChange={setEnableRumble}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable Bones! Integration</ControlLabel>
            <ToggleControl
              label="Enable Bones! Integration"
              isOn={enableBones}
              onChange={setEnableBones}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable Dice+ Integration</ControlLabel>
            <ToggleControl
              label="Enable Dice+ Integration"
              isOn={enableDicePlus}
              onChange={setEnableDicePlus}
            />
          </ControlRow>

          <ControlRow>
            <ControlLabel>Enable OBR Notification</ControlLabel>
            <ToggleControl
              label="Enable OBR Notification"
              isOn={enableObrNotification}
              onChange={setEnableObrNotification}
            />
          </ControlRow>
          {enableObrNotification && (
            <SubControlRow>
              <ControlLabel style={{ minWidth: 'auto' }}>Show Notification to All</ControlLabel>
              <ToggleControl
                label="Show Notification to All"
                isOn={showNotificationToAll}
                onChange={setShowNotificationToAll}
              />
            </SubControlRow>
          )}

          <ControlRow>
            <ControlLabel>Enable Discord Logging</ControlLabel>
            <ToggleControl
              label="Enable Discord Logging"
              isOn={enableDiscordLogging}
              onChange={setEnableDiscordLogging}
            />
          </ControlRow>
          {enableDiscordLogging && (
            <SubControlRow>
              <SubControlLabel>Discord Url: </SubControlLabel>
              <TextInput
                type="text"
                value={hpColorText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setHpColorText(value);
                  console.log('Some kind of Discord Url', value);
                }}
                placeholder="http://www.discord.com/your-webhook-url"
                maxLength={4}
              />
            </SubControlRow>
          )}
        </SettingsSection>
      </SettingsContainer>
    </motion.div>
  );
};
