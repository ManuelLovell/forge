import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PageContainer, PageTitle, Button, Card } from './SharedStyledComponents';
import { ToggleControl } from './ToggleControl';
import { PopupModal } from './PopupModal';
import { SettingsTooltip } from './SettingsTooltip';
import { SETTINGS_TOOLTIPS } from './SettingsTooltipContent';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { bulkImportUnitCollection, exportUnitCollection } from '../helpers/unitCollectionDb';
import { isValidDiscordWebhookUrl } from '../helpers/DiscordWebhook';
import { connectBattleSystem, isConnected, validateCurrentConnection } from '../auth/authHelpers';
import { useSystemData } from '../helpers/useSystemData';
import { toResolvedDiceNotation, validateFormula } from '../helpers/FormulaParser';

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
  ${tw`flex items-center place-content-between gap-3 ml-4`}
  color: ${props => props.theme.PRIMARY};
`;

const SubControlLabel = styled.label<{ theme: ForgeTheme }>`
  ${tw`text-sm`}
  text-align: left;
  color: ${props => props.theme.PRIMARY};
`;

const SubControlHint = styled.p<{ theme: ForgeTheme }>`
  ${tw`text-xs mt-1`}
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.7)};
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

const InlineActionButton = styled.button<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.45)};
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ButtonGroup = tw.div`
  flex gap-3 mt-2 justify-center
`;

const AuthStatus = styled.p<{ theme: ForgeTheme; $connected: boolean }>`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${props => props.$connected ? props.theme.PRIMARY : rgbaFromHex(props.theme.PRIMARY, 0.75)};
`;

const ModalText = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.9)};
  margin: 0;
  line-height: 1.5;
`;

export const SettingsPage = () => {
  const { theme } = useForgeTheme();
  const { attributes } = useSystemData();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const sceneItems = useSceneStore((state) => state.items);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  // List Controls state
  const [popcornInitiative, setPopcornInitiative] = useState(false);
  const [reverseInitiative, setReverseInitiative] = useState(false);
  const [diceRange, setDiceRange] = useState('D20');
  const [showCardAccess, setShowCardAccess] = useState(false);
  const [initiativeModifierBid, setInitiativeModifierBid] = useState('');
  const [initiativeModifierExpr, setInitiativeModifierExpr] = useState('@STAT');

  // Player Controls state
  const [showPlayerView, setShowPlayerView] = useState(false);
  const [showNonPartyUnits, setShowNonPartyUnits] = useState(false);
  const [showListHpNumbers, setShowListHpNumbers] = useState(true);
  const [showOwnerOnlyEdit, setShowOwnerOnlyEdit] = useState(false);
  const [showModifyUnitContextMenu, setShowModifyUnitContextMenu] = useState(true);
  const [showViewUnitContextMenuForPlayers, setShowViewUnitContextMenuForPlayers] = useState(true);

  // Game Controls state
  const [showHpBars, setShowHpBars] = useState(false);
  const [hpBarOrientation, setHpBarOrientation] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
  const [showHpNumbers, setShowHpNumbers] = useState(false);
  const [showDeathEffect, setShowDeathEffect] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [showTurnEffect, setshowTurnEffect] = useState(false);
  const [useDescriptiveDuplicates, setUseDescriptiveDuplicates] = useState(false);

  // Dice Controls state
  const [enableRumble, setEnableRumble] = useState(false);
  const [enableBones, setEnableBones] = useState(false);
  const [enableDicePlus, setEnableDicePlus] = useState(false);
  const [enableTextBasedRolls, setEnableTextBasedRolls] = useState(false);
  const [enableObrNotification, setEnableObrNotification] = useState(false);
  const [showNotificationToAll, setShowNotificationToAll] = useState(false);
  const [enableDiscordLogging, setEnableDiscordLogging] = useState(false);
  const [discordUrl, setDiscordUrl] = useState('');

  // Other
  const [enableConsoleLog, setEnableConsoleLog] = useState(false);
  const importFileInputRef = useRef<HTMLInputElement | null>(null);
  const [authConnected, setAuthConnected] = useState<boolean>(() => isConnected());
  const [isConnectingAuth, setIsConnectingAuth] = useState(false);
  const [isImportConfirmOpen, setIsImportConfirmOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    const syncAuthStatus = async () => {
      const valid = await validateCurrentConnection();
      if (mounted) {
        setAuthConnected(valid);
      }
    };

    void syncAuthStatus();

    return () => {
      mounted = false;
    };
  }, []);

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
    if (storageContainer[SettingsConstants.INITIATIVE_MODIFIER_BID] !== undefined) {
      setInitiativeModifierBid((storageContainer[SettingsConstants.INITIATIVE_MODIFIER_BID] as string) || '');
    } else {
      setInitiativeModifierBid('');
    }
    if (storageContainer[SettingsConstants.INITIATIVE_MODIFIER_EXPR] !== undefined) {
      const rawExpr = (storageContainer[SettingsConstants.INITIATIVE_MODIFIER_EXPR] as string) || '@STAT';
      const normalizedLegacyExpr = rawExpr.replace(/\bx\b/gi, '@STAT').trim();
      setInitiativeModifierExpr(normalizedLegacyExpr.length > 0 ? normalizedLegacyExpr : '@STAT');
    } else {
      setInitiativeModifierExpr('@STAT');
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
    if (storageContainer[SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU] !== undefined) {
      setShowModifyUnitContextMenu(storageContainer[SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU] as boolean);
    } else {
      setShowModifyUnitContextMenu(true);
    }
    if (storageContainer[SettingsConstants.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS] !== undefined) {
      setShowViewUnitContextMenuForPlayers(storageContainer[SettingsConstants.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS] as boolean);
    } else {
      setShowViewUnitContextMenuForPlayers(true);
    }
    if (storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] !== undefined) {
      setShowNonPartyUnits(storageContainer[SettingsConstants.SHOW_NON_PARTY_UNITS] as boolean);
    }
    if (storageContainer[SettingsConstants.SHOW_LIST_HP_NUMBERS] !== undefined) {
      setShowListHpNumbers(storageContainer[SettingsConstants.SHOW_LIST_HP_NUMBERS] as boolean);
    } else {
      setShowListHpNumbers(true);
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
    if (storageContainer[SettingsConstants.SHOW_DEATH_EFFECT] !== undefined) {
      setShowDeathEffect(storageContainer[SettingsConstants.SHOW_DEATH_EFFECT] as boolean);
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
    if (storageContainer[SettingsConstants.ENABLE_TEXT_BASED_ROLLS] !== undefined) {
      setEnableTextBasedRolls(storageContainer[SettingsConstants.ENABLE_TEXT_BASED_ROLLS] as boolean);
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

  const saveData = async (key: string, value: unknown) => {
    if (DATA_STORED_IN_ROOM) {
      await OBR.room.setMetadata({ [key]: value });
    } else {
      await OBR.scene.setMetadata({ [key]: value });
    }
  };

  const getDiceSides = (range: string): number => {
    const trimmed = (range || '').trim();
    const matched = trimmed.match(/(\d+)/);
    const parsed = matched ? parseInt(matched[1], 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 20;
  };

  const numericAttributes = attributes
    .filter((attribute) => attribute.attr_type === 'numb')
    .sort((a, b) => (a.attr_name || '').localeCompare(b.attr_name || ''));

  const validateInitiativeModifierExpr = (expression: string, bid: string): { valid: boolean; error?: string } => {
    const trimmedExpression = expression.trim();
    if (!trimmedExpression) {
      return { valid: false, error: 'Expression is required.' };
    }

    if (!bid) {
      return { valid: false, error: 'Select a numeric attribute first.' };
    }

    const hasVariable = /@STAT/i.test(trimmedExpression);
    if (!hasVariable) {
      return { valid: false, error: 'Expression must include @STAT (the selected attribute value).' };
    }

    if (/\d\s*d\s*\d|\bd\s*\d/i.test(trimmedExpression)) {
      return { valid: false, error: 'Dice notation is not allowed in initiative modifiers.' };
    }

    const formulaWithBid = trimmedExpression.replace(/@STAT/gi, `@${bid}`);
    if (!validateFormula(formulaWithBid)) {
      return { valid: false, error: 'Invalid expression syntax.' };
    }

    return { valid: true };
  };

  const persistInitiativeModifierSettings = async (nextBid: string, nextExpr: string) => {
    await saveData(SettingsConstants.INITIATIVE_MODIFIER_BID, nextBid);
    await saveData(SettingsConstants.INITIATIVE_MODIFIER_EXPR, nextExpr);
  };

  const handleInitiativeModifierBidChange = async (nextBid: string) => {
    setInitiativeModifierBid(nextBid);

    if (!nextBid) {
      await persistInitiativeModifierSettings('', initiativeModifierExpr);
      return;
    }

    const validation = validateInitiativeModifierExpr(initiativeModifierExpr, nextBid);
    if (!validation.valid) {
      await OBR.notification.show(validation.error || 'Invalid initiative modifier settings.', 'WARNING');
    }

    await persistInitiativeModifierSettings(nextBid, initiativeModifierExpr);
  };

  const handleInitiativeModifierExprBlur = async () => {
    const trimmed = initiativeModifierExpr.trim();
    const normalizedExpr = (trimmed.length > 0 ? trimmed : '@STAT').replace(/\bx\b/gi, '@STAT');
    setInitiativeModifierExpr(normalizedExpr);

    if (!initiativeModifierBid) {
      await persistInitiativeModifierSettings('', normalizedExpr);
      return;
    }

    const validation = validateInitiativeModifierExpr(normalizedExpr, initiativeModifierBid);
    if (!validation.valid) {
      await OBR.notification.show(validation.error || 'Invalid initiative modifier expression.', 'WARNING');
      return;
    }

    await persistInitiativeModifierSettings(initiativeModifierBid, normalizedExpr);
  };

  const handleTestInitiativeModifier = async () => {
    if (!initiativeModifierBid) {
      await OBR.notification.show('Select an Initiative Modifier attribute before testing.', 'WARNING');
      return;
    }

    const normalizedExpr = initiativeModifierExpr.replace(/\bx\b/gi, '@STAT');
    const validation = validateInitiativeModifierExpr(normalizedExpr, initiativeModifierBid);
    if (!validation.valid) {
      await OBR.notification.show(validation.error || 'Invalid initiative modifier expression.', 'WARNING');
      return;
    }

    const TEST_STAT_VALUE = 14;
    const sides = getDiceSides(diceRange);
    const baseRoll = Math.floor(Math.random() * sides) + 1;
    const resolvedModifier = toResolvedDiceNotation(
      normalizedExpr.replace(/@STAT/gi, `@${initiativeModifierBid}`),
      {
        bidValueMap: {
          [initiativeModifierBid]: TEST_STAT_VALUE,
        },
        onMissingBid: 'useZero',
      }
    );

    if (!resolvedModifier.valid || !resolvedModifier.notation) {
      await OBR.notification.show('Could not resolve initiative modifier expression.', 'ERROR');
      return;
    }

    const modifierValueRaw = Number(resolvedModifier.notation);
    const modifierValue = Number.isFinite(modifierValueRaw) ? Math.trunc(modifierValueRaw) : 0;
    const total = baseRoll + modifierValue;
    const displayExpr = normalizedExpr.replace(/@STAT/gi, String(TEST_STAT_VALUE));

    await OBR.notification.show(
      `Mock Initiative: 1d${sides}(${baseRoll}) + ${displayExpr}(${modifierValue}) = ${total}`,
      'SUCCESS',
    );
  };

  const handleExportCollection = async () => {
    try {
      const records = await exportUnitCollection();
      const json = JSON.stringify(records, null, 2);
      const blob = new Blob([json], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `forge-collection-${new Date().toISOString().slice(0, 10)}.txt`;
      link.click();
      URL.revokeObjectURL(url);
      await OBR.notification.show(`Collection export complete. ${records.length} record(s) written.`, 'SUCCESS');
    } catch (error) {
      LOGGER.log('Collection export failed', error);
      await OBR.notification.show('Collection export failed. See console log for details.', 'ERROR');
    }
  };

  const handleImportClick = () => {
    setIsImportConfirmOpen(true);
  };

  const handleConfirmImport = () => {
    setIsImportConfirmOpen(false);
    importFileInputRef.current?.click();
  };

  const handleImportCollectionFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    try {
      const text = await selectedFile.text();
      const parsed = JSON.parse(text);

      if (!Array.isArray(parsed)) {
        await OBR.notification.show('Import file must contain a JSON array of collection records.', 'ERROR');
        return;
      }

      const summary = await bulkImportUnitCollection(parsed);
      await OBR.notification.show(
        `Collection import complete. Created: ${summary.created}, Updated: ${summary.updated}, Skipped: ${summary.skipped}.`,
        'SUCCESS',
      );
    } catch (error) {
      LOGGER.log('Collection import failed', error);
      await OBR.notification.show('Collection import failed. Ensure the file is valid JSON and try again.', 'ERROR');
    } finally {
      event.target.value = '';
    }
  };

  const handleConnectBattleSystem = async () => {
    setIsConnectingAuth(true);

    try {
      await connectBattleSystem();
      setAuthConnected(isConnected());
      await OBR.notification.show('Connected to Battle-System account.', 'SUCCESS');
    } catch (error) {
      LOGGER.error('Battle-System auth connection failed', error);
      await OBR.notification.show('Unable to connect to Battle-System account. Please try again.', 'ERROR');
      setAuthConnected(isConnected());
    } finally {
      setIsConnectingAuth(false);
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

        <Card theme={theme}>
          <SectionTitle theme={theme}>Battle-System Account</SectionTitle>
          <ButtonGroup>
            <Button
              theme={theme}
              onClick={() => {
                void handleConnectBattleSystem();
              }}
              disabled={isConnectingAuth}
            >
              {isConnectingAuth ? 'Connecting...' : (authConnected ? 'Reconnect to Battle-System' : 'Connect to Battle-System')}
            </Button>
          </ButtonGroup>
          <AuthStatus theme={theme} $connected={authConnected}>
            {authConnected ? 'Status: Connected' : 'Status: Disconnected'}
          </AuthStatus>
        </Card>

        {/* Collection Management */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Collection Management</SectionTitle>
          <ButtonGroup>
            <Button theme={theme} onClick={handleExportCollection}>Export</Button>
            <Button theme={theme} onClick={handleImportClick}>Import</Button>
          </ButtonGroup>
          <input
            ref={importFileInputRef}
            type="file"
            accept=".txt,.json,text/plain,application/json"
            onChange={handleImportCollectionFile}
            style={{ display: 'none' }}
          />
        </Card>

        {/* List Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>List Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.reverseInitiative}>Reverse Initiative</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.popcornInitiative}>Popcorn Initiative</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.initiativeDie}>Initiative Die:</SettingsTooltip>
            </ControlLabel>
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

          <SubControlRow theme={theme}>
            <SubControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.initiativeModifierAttr}>Initiative Modifier:</SettingsTooltip>
            </SubControlLabel>
            <SmallSelect
              theme={theme}
              value={initiativeModifierBid}
              onChange={async (e) => {
                await handleInitiativeModifierBidChange(e.target.value);
              }}
            >
              <option value="">None</option>
              {numericAttributes.map((attribute) => (
                <option key={attribute.attr_bid} value={attribute.attr_bid}>
                  {attribute.attr_abbr} — {attribute.attr_name}
                </option>
              ))}
            </SmallSelect>
          </SubControlRow>
          <SubControlRow theme={theme}>
            <SubControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.initiativeModifierMath}>Math:</SettingsTooltip>
            </SubControlLabel>
            <SmallInput
              theme={theme}
              type="text"
              value={initiativeModifierExpr}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInitiativeModifierExpr(e.target.value);
              }}
              onBlur={async () => {
                await handleInitiativeModifierExprBlur();
              }}
              placeholder="floor((@STAT-10)/2)"
              maxLength={120}
              disabled={!initiativeModifierBid}
            />
            <InlineActionButton
              theme={theme}
              type="button"
              onClick={() => {
                void handleTestInitiativeModifier();
              }}
              disabled={!initiativeModifierBid}
            >
              Test
            </InlineActionButton>
          </SubControlRow>
          <SubControlHint theme={theme}>
            Use @STAT as the selected attribute value. Example: floor((@STAT-10)/2)
          </SubControlHint>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showCardColumn}>Show Card Column</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showPlayerView}>Show Player View</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showNonPartyUnits}>Show Non-Party Units</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showHpNumbersOnList}>Show HP Numbers on List</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Show HP Numbers on List"
              isOn={showListHpNumbers}
              onChange={async (value) => {
                setShowListHpNumbers(value);
                await saveData(SettingsConstants.SHOW_LIST_HP_NUMBERS, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.ownerOnlyEdit}>GM/Owner Only Edit</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Owner Only Edit"
              isOn={showOwnerOnlyEdit}
              onChange={async (value) => {
                setShowOwnerOnlyEdit(value);
                await saveData(SettingsConstants.SHOW_OWNER_ONLY_EDIT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showAdjustHpContextMenu}>Show Adjust HP Context Menu</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Show Adjust HP Context Menu"
              isOn={showModifyUnitContextMenu}
              onChange={async (value) => {
                setShowModifyUnitContextMenu(value);
                await saveData(SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showViewUnitContextMenuForPlayers}>Show View Unit Context Menu for Players</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Show View Unit Context Menu for Players"
              isOn={showViewUnitContextMenuForPlayers}
              onChange={async (value) => {
                setShowViewUnitContextMenuForPlayers(value);
                await saveData(SettingsConstants.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS, value);
              }}
            />
          </ControlRow>
        </Card>

        {/* Game Controls */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>Game Controls</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showHpBarsOnTokens}>Show HP Bars on tokens</SettingsTooltip>
            </ControlLabel>
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
              <SubControlLabel theme={theme}>
                <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.hpOrientation}>Orientation:</SettingsTooltip>
              </SubControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showHpNumbersOnTokens}>Show HP Numbers on tokens</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showDeathEffect}>Show Death Effect</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Show Death Effect"
              isOn={showDeathEffect}
              onChange={async (value) => {
                setShowDeathEffect(value);
                await saveData(SettingsConstants.SHOW_DEATH_EFFECT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showNamesOnTokens}>Show Names on Tokens</SettingsTooltip>
            </ControlLabel>
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
                      const textItem = item as typeof item & { text?: { plainText?: string } };
                      if (unitName && textItem.text) {
                        textItem.text.plainText = String(unitName);
                      }
                    }
                  });
                }
                else {
                  LOGGER.log('Hiding names on tokens');
                  await OBR.scene.items.updateItems(unitsInList, (items) => {
                    for (let item of items) {
                      const textItem = item as typeof item & { text?: { plainText?: string } };
                      if (textItem.text) {
                        textItem.text.plainText = '';
                      }
                    }
                  });
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showTurnEffect}>Show Turn Effect</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.useDescriptiveNames}>Use Descriptive Names</SettingsTooltip>
            </ControlLabel>
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
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableTextBasedRolls}>Enable Text-Based Rolls</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable Text-Based Rolls"
              isOn={enableTextBasedRolls}
              onChange={async (value) => {
                setEnableTextBasedRolls(value);
                await saveData(SettingsConstants.ENABLE_TEXT_BASED_ROLLS, value);
                if (value) {
                  setEnableObrNotification(true);
                  setEnableRumble(false);
                  setEnableBones(false);
                  setEnableDicePlus(false);
                  await saveData(SettingsConstants.ENABLE_OBR_NOTIFICATION, true);
                  await saveData(SettingsConstants.ENABLE_RUMBLE, false);
                  await saveData(SettingsConstants.ENABLE_BONES, false);
                  await saveData(SettingsConstants.ENABLE_DICE_PLUS, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableRumble}>Enable Rumble! Integration</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable Rumble! Integration"
              isOn={enableRumble}
              onChange={async (value) => {
                setEnableRumble(value);
                await saveData(SettingsConstants.ENABLE_RUMBLE, value);
                if (value) {
                  setEnableBones(false);
                  setEnableDicePlus(false);
                  setEnableTextBasedRolls(false);
                  await saveData(SettingsConstants.ENABLE_BONES, false);
                  await saveData(SettingsConstants.ENABLE_DICE_PLUS, false);
                  await saveData(SettingsConstants.ENABLE_TEXT_BASED_ROLLS, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableBones}>Enable Bones! Integration</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable Bones! Integration"
              isOn={enableBones}
              onChange={async (value) => {
                setEnableBones(value);
                await saveData(SettingsConstants.ENABLE_BONES, value);
                if (value) {
                  setEnableRumble(false);
                  setEnableDicePlus(false);
                  setEnableTextBasedRolls(false);
                  await saveData(SettingsConstants.ENABLE_RUMBLE, false);
                  await saveData(SettingsConstants.ENABLE_DICE_PLUS, false);
                  await saveData(SettingsConstants.ENABLE_TEXT_BASED_ROLLS, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableDicePlus}>Enable Dice+ Integration</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable Dice+ Integration"
              isOn={enableDicePlus}
              onChange={async (value) => {
                setEnableDicePlus(value);
                await saveData(SettingsConstants.ENABLE_DICE_PLUS, value);
                if (value) {
                  setEnableRumble(false);
                  setEnableBones(false);
                  setEnableTextBasedRolls(false);
                  await saveData(SettingsConstants.ENABLE_RUMBLE, false);
                  await saveData(SettingsConstants.ENABLE_BONES, false);
                  await saveData(SettingsConstants.ENABLE_TEXT_BASED_ROLLS, false);
                }
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableObrNotification}>Enable OBR Notification</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable OBR Notification"
              isOn={enableObrNotification}
              onChange={async (value) => {
                setEnableObrNotification(value);
                await saveData(SettingsConstants.ENABLE_OBR_NOTIFICATION, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.showResultsToAll}>Show Results to All</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Show Results to All"
              isOn={showNotificationToAll}
              onChange={async (value) => {
                setShowNotificationToAll(value);
                await saveData(SettingsConstants.SHOW_NOTIFICATION_TO_ALL, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableDiscordLogging}>Enable Discord Logging</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label="Enable Discord Logging"
              isOn={enableDiscordLogging}
              onChange={async (value) => {
                if (value) {
                  const webhookUrl = discordUrl.trim();
                  if (!isValidDiscordWebhookUrl(webhookUrl)) {
                    await OBR.notification.show('Please enter a valid Discord webhook URL before enabling Discord logging.', 'WARNING');
                    setEnableDiscordLogging(false);
                    await saveData(SettingsConstants.ENABLE_DISCORD_LOGGING, false);
                    return;
                  }
                }

                setEnableDiscordLogging(value);
                await saveData(SettingsConstants.ENABLE_DISCORD_LOGGING, value);
              }}
            />
          </ControlRow>
          <ControlRow theme={theme}>
            <SubControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.discordUrl}>Discord Url:</SettingsTooltip>
            </SubControlLabel>
            <SmallInput
              theme={theme}
              type="text"
              value={discordUrl}
              onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const trimmedValue = value.trim();
                setDiscordUrl(value);
                await saveData(SettingsConstants.DISCORD_URL, trimmedValue);
                LOGGER.log('Discord URL:', trimmedValue);
              }}
              placeholder="https://discord.com/api/webhooks/..."
              maxLength={200}
            />
          </ControlRow>
        </Card>

        <Card theme={theme}>
          <SectionTitle theme={theme}>Other</SectionTitle>
          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={SETTINGS_TOOLTIPS.enableConsoleLog}>Enable Console Log</SettingsTooltip>
            </ControlLabel>
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

      <PopupModal
        isOpen={isImportConfirmOpen}
        title="Confirm Import"
        onClose={() => setIsImportConfirmOpen(false)}
        actions={(
          <>
            <Button theme={theme} variant="secondary" onClick={() => setIsImportConfirmOpen(false)}>
              Cancel
            </Button>
            <Button theme={theme} onClick={handleConfirmImport}>
              Continue
            </Button>
          </>
        )}
      >
        <ModalText theme={theme}>
          Import will overwrite duplicate records that share the same Name and Author. Continue?
        </ModalText>
      </PopupModal>
    </motion.div>
  );
};
