import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PageContainer, PageTitle, Button, Card } from './SharedStyledComponents';
import { ToggleControl } from './ToggleControl';
import { PopupModal } from './PopupModal';
import { SettingsTooltip } from './SettingsTooltip';
import { getSettingsTooltips } from './SettingsTooltipContent';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { bulkImportUnitCollection, exportUnitCollection } from '../helpers/unitCollectionDb';
import { isValidDiscordWebhookUrl } from '../helpers/DiscordWebhook';
import {
  connectBattleSystem,
  getSharedAuthSnapshot,
  getUserTier,
  isConnected,
  type UserTier,
  validateCurrentConnection,
} from '../auth/authHelpers';
import { useSystemData } from '../helpers/useSystemData';
import { toResolvedDiceNotation, validateFormula } from '../helpers/FormulaParser';
import { getConfiguredHpBidKeys } from '../helpers/hpAttributeMapping';
import { useTranslation } from '../i18n/Translation';
import { TrackForgeEvent } from '../helpers/forgeMetrics';

// Styled Components
const SectionTitle = styled.h2<{ theme: ForgeTheme }>`
  ${tw`text-xl font-semibold mb-4 pb-2`}
  color: ${props => props.theme.PRIMARY};
  border-bottom: 2px solid ${props => props.theme.BORDER};
`;

const ControlRow = styled.div<{ theme: ForgeTheme }>`
  ${tw`flex items-center justify-between py-1`}
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
  const { t } = useTranslation();
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
  const [showNamesToGm, setShowNamesToGm] = useState(false);
  const [showTurnEffect, setshowTurnEffect] = useState(false);
  const [useDescriptiveDuplicates, setUseDescriptiveDuplicates] = useState(false);

  // Dice Controls state
  const [enableRumble, setEnableRumble] = useState(false);
  const [enableBones, setEnableBones] = useState(false);
  const [enableDicePlus, setEnableDicePlus] = useState(false);
  const [enableTextBasedRolls, setEnableTextBasedRolls] = useState(false);
  const [enableRollResolution, setEnableRollResolution] = useState(false);
  const [rollResolutionAllUsers, setRollResolutionAllUsers] = useState(false);
  const [rollResolutionBid, setRollResolutionBid] = useState('');
  const [enableObrNotification, setEnableObrNotification] = useState(false);
  const [showNotificationToAll, setShowNotificationToAll] = useState(false);
  const [enableDiscordLogging, setEnableDiscordLogging] = useState(false);
  const [discordUrl, setDiscordUrl] = useState('');

  // Other
  const [enableConsoleLog, setEnableConsoleLog] = useState(false);
  const importFileInputRef = useRef<HTMLInputElement | null>(null);
  const clashImportFileInputRef = useRef<HTMLInputElement | null>(null);
  const [authConnected, setAuthConnected] = useState<boolean>(() => isConnected());
  const [authTier, setAuthTier] = useState<UserTier>(() => getUserTier());
  const [isConnectingAuth, setIsConnectingAuth] = useState(false);
  const [isImportConfirmOpen, setIsImportConfirmOpen] = useState(false);
  const tooltips = getSettingsTooltips(t);

  useEffect(() => {
    let mounted = true;

    const syncAuthStatus = async () => {
      const valid = await validateCurrentConnection();
      if (mounted) {
        setAuthConnected(valid && isConnected());
        setAuthTier(getUserTier());
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
    if (storageContainer[SettingsConstants.SHOW_NAMES_TO_GM] !== undefined) {
      setShowNamesToGm(storageContainer[SettingsConstants.SHOW_NAMES_TO_GM] as boolean);
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
    if (storageContainer[SettingsConstants.ENABLE_ROLL_RESOLUTION] !== undefined) {
      setEnableRollResolution(storageContainer[SettingsConstants.ENABLE_ROLL_RESOLUTION] as boolean);
    } else {
      setEnableRollResolution(false);
    }
    if (storageContainer[SettingsConstants.ROLL_RESOLUTION_ALL_USERS] !== undefined) {
      setRollResolutionAllUsers(storageContainer[SettingsConstants.ROLL_RESOLUTION_ALL_USERS] as boolean);
    } else {
      setRollResolutionAllUsers(false);
    }
    if (storageContainer[SettingsConstants.ROLL_RESOLUTION_BID] !== undefined) {
      setRollResolutionBid((storageContainer[SettingsConstants.ROLL_RESOLUTION_BID] as string) || '');
    } else {
      setRollResolutionBid('');
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

  const rollResolutionAttributes = attributes
    .filter((attribute) => attribute.attr_type === 'numb' || attribute.attr_type === 'resource')
    .sort((a, b) => (a.attr_name || '').localeCompare(b.attr_name || ''));

  const validateInitiativeModifierExpr = (expression: string, bid: string): { valid: boolean; error?: string } => {
    const trimmedExpression = expression.trim();
    if (!trimmedExpression) {
      return { valid: false, error: t('settings.exprRequiredError') };
    }

    if (!bid) {
      return { valid: false, error: t('settings.selectNumericAttributeError') };
    }

    const hasVariable = /@STAT/i.test(trimmedExpression);
    if (!hasVariable) {
      return { valid: false, error: t('settings.exprMustIncludeStatError') };
    }

    if (/\d\s*d\s*\d|\bd\s*\d/i.test(trimmedExpression)) {
      return { valid: false, error: t('settings.diceNotAllowedError') };
    }

    const formulaWithBid = trimmedExpression.replace(/@STAT/gi, `@${bid}`);
    if (!validateFormula(formulaWithBid)) {
      return { valid: false, error: t('settings.invalidSyntaxError') };
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
      await OBR.notification.show(validation.error || t('settings.invalidModifierSettingsError'), 'WARNING');
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
      await OBR.notification.show(validation.error || t('settings.invalidModifierExpressionError'), 'WARNING');
      return;
    }

    await persistInitiativeModifierSettings(initiativeModifierBid, normalizedExpr);
  };

  const handleTestInitiativeModifier = async () => {
    if (!initiativeModifierBid) {
      await OBR.notification.show(t('settings.selectAttributeBeforeTestingError'), 'WARNING');
      return;
    }

    const normalizedExpr = initiativeModifierExpr.replace(/\bx\b/gi, '@STAT');
    const validation = validateInitiativeModifierExpr(normalizedExpr, initiativeModifierBid);
    if (!validation.valid) {
      await OBR.notification.show(validation.error || t('settings.invalidModifierExpressionError'), 'WARNING');
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
      await OBR.notification.show(t('settings.couldNotResolveModifierError'), 'ERROR');
      return;
    }

    const modifierValueRaw = Number(resolvedModifier.notation);
    const modifierValue = Number.isFinite(modifierValueRaw) ? Math.trunc(modifierValueRaw) : 0;
    const total = baseRoll + modifierValue;
    const displayExpr = normalizedExpr.replace(/@STAT/gi, String(TEST_STAT_VALUE));

    await OBR.notification.show(
      t('settings.mockInitiativeResult', {
        sides,
        baseRoll,
        expression: displayExpr,
        modifier: modifierValue,
        total,
      }),
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
      await OBR.notification.show(t('settings.collectionExportComplete', { count: records.length }), 'SUCCESS');
    } catch (error) {
      LOGGER.log('Collection export failed', error);
      await OBR.notification.show(t('settings.collectionExportFailed'), 'ERROR');
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
        await OBR.notification.show(t('settings.collectionImportArrayError'), 'ERROR');
        return;
      }

      const summary = await bulkImportUnitCollection(parsed);
      await OBR.notification.show(
        t('settings.collectionImportCompleteSummary', {
          created: summary.created,
          updated: summary.updated,
          skipped: summary.skipped,
        }),
        'SUCCESS',
      );
    } catch (error) {
      LOGGER.log('Collection import failed', error);
      await OBR.notification.show(t('settings.collectionImportFailed'), 'ERROR');
    } finally {
      event.target.value = '';
    }
  };

  const handleConnectBattleSystem = async () => {
    const connectStartedAt = performance.now();
    setIsConnectingAuth(true);

    try {
      const wasConnected = isConnected();
      await connectBattleSystem();
      await OBR.broadcast.sendMessage(
        OwlbearIds.AUTHSYNCCHANNEL,
        {
          type: 'BS_AUTH_STATE',
          source: OwlbearIds.EXTENSIONID,
          snapshot: getSharedAuthSnapshot(),
        },
        { destination: 'LOCAL' },
      );
      const nowConnected = isConnected();
      const currentTier = getUserTier();
      setAuthConnected(nowConnected);
      setAuthTier(currentTier);

      if (!wasConnected && nowConnected) {
        void TrackForgeEvent({
          eventName: 'auth_connected',
          eventCategory: 'auth',
          playerId: useSceneStore.getState().playerData?.id ?? null,
          success: true,
          durationMs: Math.max(0, Math.round(performance.now() - connectStartedAt)),
          metadata: {
            scope: 'forge',
            tier: currentTier,
          },
        });
      }

      await OBR.notification.show(t('settings.connectedAccount'), 'SUCCESS');
    } catch (error) {
      LOGGER.error('Battle-System auth connection failed', error);
      void TrackForgeEvent({
        eventName: 'error_raised',
        eventCategory: 'error',
        playerId: useSceneStore.getState().playerData?.id ?? null,
        success: false,
        durationMs: Math.max(0, Math.round(performance.now() - connectStartedAt)),
        errorCode: 'forge_auth_connect_failed',
        errorMessage: error instanceof Error ? error.message : 'forge_auth_connect_failed',
        metadata: {
          operation: 'connect_battle_system',
        },
      });
      await OBR.notification.show(t('settings.unableToConnectAccount'), 'ERROR');
      setAuthConnected(isConnected());
      setAuthTier(getUserTier());
    } finally {
      setIsConnectingAuth(false);
    }
  };

  const handleClashImportClick = () => {
    clashImportFileInputRef.current?.click();
  };

  const handleClashImportFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    try {
      const text = await selectedFile.text();
      const parsed = JSON.parse(text);

      if (!Array.isArray(parsed)) {
        await OBR.notification.show(t('settings.clashImportArrayError'), 'ERROR');
        return;
      }

      // Import clashToForgeMapper to convert Clash data
      const { migrateClashCollectionFromJson } = await import(
        '../utilities/clashToForgeMapper'
      );
      const hpBidKeys = getConfiguredHpBidKeys(storageContainer, attributes);
      const migration = migrateClashCollectionFromJson(parsed, {
        hp: {
          currentHpBid: hpBidKeys.currentHpBid,
          maxHpBid: hpBidKeys.maxHpBid,
          attributes,
        },
      });

      if (migration.records.length === 0) {
        await OBR.notification.show(t('settings.clashImportFailed'), 'ERROR');
        return;
      }

      const summary = await bulkImportUnitCollection(migration.records);
      await OBR.notification.show(
        t('settings.clashImportCompleteSummary', {
          created: summary.created,
          updated: summary.updated,
          skipped: summary.skipped,
          failed: migration.skipped,
        }),
        'SUCCESS',
      );
    } catch (error) {
      LOGGER.log('Clash collection import failed', error);
      await OBR.notification.show(t('settings.clashImportFailed'), 'ERROR');
    } finally {
      event.target.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>{t('settings.pageTitle')}</PageTitle>

        <Card theme={theme}>
          <SectionTitle theme={theme}>{t('settings.accountSectionTitle')}</SectionTitle>
          <ButtonGroup>
            <Button
              theme={theme}
              onClick={() => {
                void handleConnectBattleSystem();
              }}
              disabled={isConnectingAuth}
            >
              {isConnectingAuth ? t('settings.connecting') : (authConnected ? t('settings.reconnectAccount') : t('settings.connectAccount'))}
            </Button>
          </ButtonGroup>
          <AuthStatus theme={theme} $connected={authConnected}>
            {authConnected
              ? t('settings.statusConnected', { tier: authTier })
              : t('settings.statusDisconnected')}
          </AuthStatus>
        </Card>

        {/* Collection Management */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>{t('settings.collectionSectionTitle')}</SectionTitle>
          <ButtonGroup>
            <Button theme={theme} onClick={handleExportCollection}>{t('settings.export')}</Button>
            <Button theme={theme} onClick={handleImportClick}>{t('settings.import')}</Button>
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
          <SectionTitle theme={theme}>{t('settings.listControlsSectionTitle')}</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.reverseInitiative}>{t('settings.reverseInitiative')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.reverseInitiative')}
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
              <SettingsTooltip theme={theme} text={tooltips.popcornInitiative}>{t('settings.popcornInitiative')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.popcornInitiative')}
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
              <SettingsTooltip theme={theme} text={tooltips.initiativeDie}>{t('settings.initiativeDie')}</SettingsTooltip>
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
              <SettingsTooltip theme={theme} text={tooltips.initiativeModifierAttr}>{t('settings.initiativeModifier')}</SettingsTooltip>
            </SubControlLabel>
            <SmallSelect
              theme={theme}
              value={initiativeModifierBid}
              onChange={async (e) => {
                await handleInitiativeModifierBidChange(e.target.value);
              }}
            >
              <option value="">{t('settings.none')}</option>
              {numericAttributes.map((attribute) => (
                <option key={attribute.attr_bid} value={attribute.attr_bid}>
                  {attribute.attr_abbr} — {attribute.attr_name}
                </option>
              ))}
            </SmallSelect>
          </SubControlRow>
          <SubControlRow theme={theme}>
            <SubControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.initiativeModifierMath}>{t('settings.math')}</SettingsTooltip>
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
              {t('settings.test')}
            </InlineActionButton>
          </SubControlRow>
          <SubControlHint theme={theme}>
            {t('settings.initiativeModifierHint')}
          </SubControlHint>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showCardColumn}>{t('settings.showCardColumn')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showCardColumn')}
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
          <SectionTitle theme={theme}>{t('settings.playerControlsSectionTitle')}</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showPlayerView}>{t('settings.showPlayerView')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showPlayerView')}
              isOn={showPlayerView}
              onChange={async (value) => {
                setShowPlayerView(value);
                await saveData(SettingsConstants.SHOW_PLAYER_VIEW, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showNonPartyUnits}>{t('settings.showNonPartyUnits')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showNonPartyUnits')}
              isOn={showNonPartyUnits}
              onChange={async (value) => {
                setShowNonPartyUnits(value);
                await saveData(SettingsConstants.SHOW_NON_PARTY_UNITS, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showHpNumbersOnList}>{t('settings.showHpNumbersOnList')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showHpNumbersOnList')}
              isOn={showListHpNumbers}
              onChange={async (value) => {
                setShowListHpNumbers(value);
                await saveData(SettingsConstants.SHOW_LIST_HP_NUMBERS, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.ownerOnlyEdit}>{t('settings.ownerOnlyEdit')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.ownerOnlyEdit')}
              isOn={showOwnerOnlyEdit}
              onChange={async (value) => {
                setShowOwnerOnlyEdit(value);
                await saveData(SettingsConstants.SHOW_OWNER_ONLY_EDIT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showAdjustHpContextMenu}>{t('settings.showAdjustHpContextMenu')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showAdjustHpContextMenu')}
              isOn={showModifyUnitContextMenu}
              onChange={async (value) => {
                setShowModifyUnitContextMenu(value);
                await saveData(SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showViewUnitContextMenuForPlayers}>{t('settings.showViewUnitContextMenuForPlayers')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showViewUnitContextMenuForPlayers')}
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
          <SectionTitle theme={theme}>{t('settings.gameControlsSectionTitle')}</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showHpBarsOnTokens}>{t('settings.showHpBarsOnTokens')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showHpBarsOnTokens')}
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
                <SettingsTooltip theme={theme} text={tooltips.hpOrientation}>{t('settings.orientation')}</SettingsTooltip>
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
                <option value="top">{t('common.orientation.top')}</option>
                <option value="bottom">{t('common.orientation.bottom')}</option>
                <option value="left">{t('common.orientation.left')}</option>
                <option value="right">{t('common.orientation.right')}</option>
              </SmallSelect>
            </SubControlRow>
          )}

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showHpNumbersOnTokens}>{t('settings.showHpNumbersOnTokens')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showHpNumbersOnTokens')}
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
              <SettingsTooltip theme={theme} text={tooltips.showDeathEffect}>{t('settings.showDeathEffect')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showDeathEffect')}
              isOn={showDeathEffect}
              onChange={async (value) => {
                setShowDeathEffect(value);
                await saveData(SettingsConstants.SHOW_DEATH_EFFECT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showNamesOnTokens}>{t('settings.showNamesOnTokens')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showNamesOnTokens')}
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
              <SettingsTooltip theme={theme} text={tooltips.showNamesToGm}>{t('settings.showNamesToGm')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showNamesToGm')}
              isOn={showNamesToGm}
              onChange={async (value) => {
                setShowNamesToGm(value);
                await saveData(SettingsConstants.SHOW_NAMES_TO_GM, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showTurnEffect}>{t('settings.showTurnEffect')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showTurnEffect')}
              isOn={showTurnEffect}
              onChange={async (value) => {
                setshowTurnEffect(value);
                await saveData(SettingsConstants.SHOW_TURN_EFFECT, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.useDescriptiveNames}>{t('settings.useDescriptiveNames')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.useDescriptiveNames')}
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
          <SectionTitle theme={theme}>{t('settings.diceControlsSectionTitle')}</SectionTitle>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.enableTextBasedRolls}>{t('settings.enableTextBasedRolls')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableTextBasedRolls')}
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
              <SettingsTooltip theme={theme} text={tooltips.enableRumble}>{t('settings.enableRumble')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableRumble')}
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
              <SettingsTooltip theme={theme} text={tooltips.enableBones}>{t('settings.enableBones')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableBones')}
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
              <SettingsTooltip theme={theme} text={tooltips.enableDicePlus}>{t('settings.enableDicePlus')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableDicePlus')}
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
              <SettingsTooltip theme={theme} text={tooltips.enableObrNotification}>{t('settings.enableObrNotification')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableObrNotification')}
              isOn={enableObrNotification}
              onChange={async (value) => {
                setEnableObrNotification(value);
                await saveData(SettingsConstants.ENABLE_OBR_NOTIFICATION, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.enableRollResolution}>{t('settings.enableRollResolution')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableRollResolution')}
              isOn={enableRollResolution}
              onChange={async (value) => {
                setEnableRollResolution(value);
                await saveData(SettingsConstants.ENABLE_ROLL_RESOLUTION, value);
              }}
            />
          </ControlRow>
          {enableRollResolution && (
            <>
              <SubControlRow theme={theme}>
                <SubControlLabel theme={theme}>
                  <SettingsTooltip theme={theme} text={tooltips.rollResolutionAllUsers}>{t('settings.rollResolutionAllUsers')}</SettingsTooltip>
                </SubControlLabel>
                <ToggleControl
                  label={t('settings.rollResolutionAllUsers')}
                  isOn={rollResolutionAllUsers}
                  onChange={async (value) => {
                    setRollResolutionAllUsers(value);
                    await saveData(SettingsConstants.ROLL_RESOLUTION_ALL_USERS, value);
                  }}
                />
              </SubControlRow>
              <SubControlRow theme={theme}>
                <SubControlLabel theme={theme}>
                  <SettingsTooltip theme={theme} text={tooltips.rollResolutionAttribute}>{t('settings.rollResolutionAttribute')}</SettingsTooltip>
                </SubControlLabel>
                <SmallSelect
                  theme={theme}
                  value={rollResolutionBid}
                  onChange={async (e) => {
                    const value = e.target.value;
                    setRollResolutionBid(value);
                    await saveData(SettingsConstants.ROLL_RESOLUTION_BID, value);
                  }}
                >
                  <option value="">{t('settings.none')}</option>
                  {rollResolutionAttributes.map((attribute) => (
                    <option key={attribute.attr_bid} value={attribute.attr_bid}>
                      {attribute.attr_abbr} — {attribute.attr_name}{attribute.attr_type === 'resource' ? t('system.resourceOptionSuffix') : ''}
                    </option>
                  ))}
                </SmallSelect>
              </SubControlRow>
              <SubControlHint theme={theme}>{t('settings.rollResolutionHint')}</SubControlHint>
            </>
          )}

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.showResultsToAll}>{t('settings.showResultsToAll')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.showResultsToAll')}
              isOn={showNotificationToAll}
              onChange={async (value) => {
                setShowNotificationToAll(value);
                await saveData(SettingsConstants.SHOW_NOTIFICATION_TO_ALL, value);
              }}
            />
          </ControlRow>

          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.enableDiscordLogging}>{t('settings.enableDiscordLogging')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableDiscordLogging')}
              isOn={enableDiscordLogging}
              onChange={async (value) => {
                if (value) {
                  const webhookUrl = discordUrl.trim();
                  if (!isValidDiscordWebhookUrl(webhookUrl)) {
                    await OBR.notification.show(t('settings.invalidDiscordWebhookWarning'), 'WARNING');
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
              <SettingsTooltip theme={theme} text={tooltips.discordUrl}>{t('settings.discordUrl')}</SettingsTooltip>
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
          <SectionTitle theme={theme}>{t('settings.otherSectionTitle')}</SectionTitle>
          <ControlRow theme={theme}>
            <ControlLabel theme={theme}>
              <SettingsTooltip theme={theme} text={tooltips.enableConsoleLog}>{t('settings.enableConsoleLog')}</SettingsTooltip>
            </ControlLabel>
            <ToggleControl
              label={t('settings.enableConsoleLog')}
              isOn={enableConsoleLog}
              onChange={async (value) => {
                setEnableConsoleLog(value);
                LOGGER.setEnabled(value);
                await saveData(SettingsConstants.ENABLE_CONSOLE_LOG, value);
              }}
            />
          </ControlRow>
        </Card>

        {/* Clash Collection Import */}
        <Card theme={theme}>
          <SectionTitle theme={theme}>{t('settings.clashImportSectionTitle')}</SectionTitle>
          <ButtonGroup>
            <SettingsTooltip theme={theme} text={t('settings.clashImportTooltip')}>
              <Button theme={theme} onClick={handleClashImportClick}>
                {t('settings.clashImportLocal')}
              </Button>
            </SettingsTooltip>
          </ButtonGroup>
          <input
            ref={clashImportFileInputRef}
            type="file"
            accept=".txt,.json,text/plain,application/json"
            onChange={handleClashImportFile}
            style={{ display: 'none' }}
          />
        </Card>
      </PageContainer>

      <PopupModal
        isOpen={isImportConfirmOpen}
        title={t('settings.confirmImportTitle')}
        onClose={() => setIsImportConfirmOpen(false)}
        actions={(
          <>
            <Button theme={theme} variant="secondary" onClick={() => setIsImportConfirmOpen(false)}>
              {t('settings.cancel')}
            </Button>
            <Button theme={theme} onClick={handleConfirmImport}>
              {t('settings.continue')}
            </Button>
          </>
        )}
      >
        <ModalText theme={theme}>
          {t('settings.importConfirmMessage')}
        </ModalText>
      </PopupModal>
    </motion.div>
  );
};
