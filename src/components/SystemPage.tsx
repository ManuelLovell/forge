import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { supabase } from '../supabase/supabaseClient';
import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import { useForgeTheme } from '../helpers/ThemeContext';
import { RuntimeSystemData, useSceneStore } from '../helpers/BSCache';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { PageContainer, PageTitle, Card, Button, Input } from './SharedStyledComponents';
import { PopupModal } from './PopupModal';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { Upload, X } from 'lucide-react';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import LOGGER from '../helpers/Logger';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import { ensureConnected, isPremiumAuthorized, withSupabaseAuthRetry } from '../auth/authHelpers';
import {
  BUFF_VISUAL_PRESET_OPTIONS,
  DEBUFF_VISUAL_PRESET_OPTIONS,
  DEFAULT_BUFF_VISUAL_PRESET,
  DEFAULT_DEBUFF_VISUAL_PRESET,
  isBuffVisualPreset,
  isDebuffVisualPreset,
} from '../helpers/EffectVisualPresets';

const EXTENSION_ID = OwlbearIds.EXTENSIONID;
const BACKUP_KEY_PREFIX = 'com.battle-system.forge';

// Storage keys for system data
export const SystemKeys = {
  SYSTEM_NAME: `${EXTENSION_ID}/SystemName`,
  IMPORT_DATE: `${EXTENSION_ID}/ImportDate`,
  SNAPSHOT_PUBLIC_ID: `${EXTENSION_ID}/SnapshotPublicId`,
} as const;

interface SnapshotSystemRecord {
  snapshot_public_id: string;
  source_share_id: string;
  system_name: string;
  background_url: string;
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  card_layout: unknown;
  list_layout: unknown;
  attributes: unknown;
  imported_at: string;
  updated_at: string;
}

interface ThemeData {
  primary: string;
  offset: string;
  background: string;
  border: string;
  background_url: string;
}

interface SystemBackup {
  name: string;
  backupDate: string;
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  background_url: string;
  card_layout: CardLayoutComponent[];
  list_layout: ListLayoutComponent[];
  attributes: SystemAttribute[];
}

const getDefaultHpBidKeys = () => {
  const attributes = defaultGameSystem.attributes as SystemAttribute[];

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
    currentHpBid: currentHp?.attr_bid || '',
    maxHpBid: maxHp?.attr_bid || '',
  };
};

const DEFAULT_HP_BID_KEYS = getDefaultHpBidKeys();

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
};

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SystemInfo = styled.div<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`;

const SystemName = styled.h2<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  border-bottom: 2px solid ${props => props.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`;

const ImportDate = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`;

const SwatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`;

const ColorSwatch = styled.div<{ color: string; theme: ForgeTheme }>`
  background-color: ${props => props.color};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${props => props.theme.PRIMARY};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`;

const SwatchLabel = styled.div<{ theme: ForgeTheme }>`
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.PRIMARY};
  margin-top: 5px;
`;

const MappingSection = styled.div<{ theme: ForgeTheme }>`
  margin-top: 16px;
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`;

const MappingTitle = styled.h3<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`;

const MappingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MappingLabel = styled.label<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`;

const MappingSelect = styled.select<{ theme: ForgeTheme }>`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.PRIMARY};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const ErrorMessage = styled.div<{ theme: ForgeTheme }>`
  background-color: ${() => rgbaFromHex('#FF0000', 0.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${props => props.theme.PRIMARY};
  margin: 15px 0;
`;

const SuccessMessage = styled.div<{ theme: ForgeTheme }>`
  background-color: ${() => rgbaFromHex('#00FF00', 0.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${props => props.theme.PRIMARY};
  margin: 15px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const ModalText = styled.p<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

const BackupSection = styled.div`
  margin-top: 30px;
`;

const BackupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BackupItem = styled.div<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackupInfo = styled.div`
  flex: 1;
`;

const BackupName = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const BackupDate = styled.div<{ theme: ForgeTheme }>`
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.7)};
  font-size: 13px;
  font-style: italic;
`;

const BackupActions = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button<{ theme: ForgeTheme; $variant?: 'danger' }>`
  background-color: ${props => props.$variant === 'danger'
    ? rgbaFromHex('#FF0000', 0.2)
    : rgbaFromHex(props.theme.OFFSET, 0.5)};
  border: 2px solid ${props => props.$variant === 'danger' ? '#FF0000' : props.theme.BORDER};
  border-radius: 6px;
  color: ${props => props.$variant === 'danger' ? '#FF0000' : props.theme.PRIMARY};
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$variant === 'danger'
    ? rgbaFromHex('#FF0000', 0.3)
    : props.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const SystemPage = () => {
  const { theme, updateThemeFromSystem } = useForgeTheme();
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const runtimeSystemData = useSceneStore((state) => state.systemData);
  const setRuntimeSystemData = useSceneStore((state) => state.setSystemData);
  const [isPremiumAuth, setIsPremiumAuth] = useState<boolean>(() => isPremiumAuthorized());

  const [shareId, setShareId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Current system info - loaded from cache
  const [currentSystemName, setCurrentSystemName] = useState<string>('');
  const [currentImportDate, setCurrentImportDate] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeData | null>(null);
  const [systemAttributes, setSystemAttributes] = useState<SystemAttribute[]>([]);
  const [hpCurrentBid, setHpCurrentBid] = useState('');
  const [hpMaxBid, setHpMaxBid] = useState('');
  const [buffVisualPreset, setBuffVisualPreset] = useState(DEFAULT_BUFF_VISUAL_PRESET);
  const [debuffVisualPreset, setDebuffVisualPreset] = useState(DEFAULT_DEBUFF_VISUAL_PRESET);

  // Backup management
  const [backups, setBackups] = useState<SystemBackup[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => Promise<void>) | null>(null);
  const [confirmMessage, setConfirmMessage] = useState('');

  // Load current system info from cache and backups on mount
  useEffect(() => {
    setIsPremiumAuth(isPremiumAuthorized());
    loadCurrentSystemFromCache();
    loadBackups();
  }, [sceneMetadata, roomMetadata, runtimeSystemData]);

  // Load current system info from cache and backups on mount
  useEffect(() => {
    loadCurrentSystemFromCache();
    loadBackups();
  }, [sceneMetadata, roomMetadata, runtimeSystemData]);

  const loadCurrentSystemFromCache = () => {
    try {
      if (!isPremiumAuthorized()) {
        const defaultTheme: ThemeData = {
          primary: defaultGameSystem.theme_primary,
          offset: defaultGameSystem.theme_offset,
          background: defaultGameSystem.theme_background,
          border: defaultGameSystem.theme_border,
          background_url: defaultGameSystem.background_url,
        };

        setCurrentSystemName(defaultGameSystem.name);
        setCurrentImportDate(null);
        setCurrentTheme(defaultTheme);
        setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
        setHpCurrentBid(DEFAULT_HP_BID_KEYS.currentHpBid);
        setHpMaxBid(DEFAULT_HP_BID_KEYS.maxHpBid);
        setBuffVisualPreset(DEFAULT_BUFF_VISUAL_PRESET);
        setDebuffVisualPreset(DEFAULT_DEBUFF_VISUAL_PRESET);
        return;
      }

      if (runtimeSystemData) {
        const configuredCurrentHpBid = sceneMetadata[SettingsConstants.HP_CURRENT_BID] as string | undefined;
        const configuredMaxHpBid = sceneMetadata[SettingsConstants.HP_MAX_BID] as string | undefined;
        const configuredBuffVisualPreset = sceneMetadata[SettingsConstants.BUFF_VISUAL_PRESET];
        const configuredDebuffVisualPreset = sceneMetadata[SettingsConstants.DEBUFF_VISUAL_PRESET];

        setCurrentSystemName(runtimeSystemData.systemName);
        setCurrentImportDate(runtimeSystemData.importDate);
        setCurrentTheme(runtimeSystemData.theme);
        setSystemAttributes(runtimeSystemData.attributes);
        setHpCurrentBid(configuredCurrentHpBid || '');
        setHpMaxBid(configuredMaxHpBid || '');
        setBuffVisualPreset(isBuffVisualPreset(configuredBuffVisualPreset) ? configuredBuffVisualPreset : DEFAULT_BUFF_VISUAL_PRESET);
        setDebuffVisualPreset(isDebuffVisualPreset(configuredDebuffVisualPreset) ? configuredDebuffVisualPreset : DEFAULT_DEBUFF_VISUAL_PRESET);
        return;
      }

      const roomSystemName = roomMetadata[SystemKeys.SYSTEM_NAME] as string | undefined;
      const roomImportDate = roomMetadata[SystemKeys.IMPORT_DATE] as string | undefined;
      const configuredCurrentHpBid = sceneMetadata[SettingsConstants.HP_CURRENT_BID] as string | undefined;
      const configuredMaxHpBid = sceneMetadata[SettingsConstants.HP_MAX_BID] as string | undefined;
      const configuredBuffVisualPreset = sceneMetadata[SettingsConstants.BUFF_VISUAL_PRESET];
      const configuredDebuffVisualPreset = sceneMetadata[SettingsConstants.DEBUFF_VISUAL_PRESET];

      setCurrentSystemName(roomSystemName || defaultGameSystem.name);
      setCurrentImportDate(roomImportDate || null);
      setCurrentTheme({
        primary: defaultGameSystem.theme_primary,
        offset: defaultGameSystem.theme_offset,
        background: defaultGameSystem.theme_background,
        border: defaultGameSystem.theme_border,
        background_url: defaultGameSystem.background_url,
      });
      setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
      setHpCurrentBid(configuredCurrentHpBid || '');
      setHpMaxBid(configuredMaxHpBid || '');
      setBuffVisualPreset(isBuffVisualPreset(configuredBuffVisualPreset) ? configuredBuffVisualPreset : DEFAULT_BUFF_VISUAL_PRESET);
      setDebuffVisualPreset(isDebuffVisualPreset(configuredDebuffVisualPreset) ? configuredDebuffVisualPreset : DEFAULT_DEBUFF_VISUAL_PRESET);

    } catch (err) {
      LOGGER.error('Error loading system from cache:', err);
    }
  };

  const saveHpAttributeMapping = async (key: string, value: string) => {
    if (DATA_STORED_IN_ROOM) {
      await OBR.room.setMetadata({ [key]: value });
      return;
    }
    await OBR.scene.setMetadata({ [key]: value });
  };

  const parseSnapshotArrayField = <T,>(value: unknown, fieldName: string): T[] => {
    if (Array.isArray(value)) {
      return value as T[];
    }

    if (typeof value === 'string') {
      let parsed: unknown;
      try {
        parsed = JSON.parse(value);
      } catch {
        throw new Error(`Imported ${fieldName} is not valid JSON`);
      }

      if (!Array.isArray(parsed)) {
        throw new Error(`Imported ${fieldName} is not a JSON array`);
      }

      return parsed as T[];
    }

    throw new Error(`Imported ${fieldName} has invalid type`);
  };

  const numericAttributes = systemAttributes.filter((attribute) => attribute.attr_type === 'numb');

  const loadBackups = () => {
    try {
      const backupList: SystemBackup[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(`${BACKUP_KEY_PREFIX}.`) && key.endsWith('.backup')) {
          const data = localStorage.getItem(key);
          if (data) {
            const backup = JSON.parse(data) as SystemBackup;
            backupList.push(backup);
          }
        }
      }

      // Sort by backup date (newest first)
      backupList.sort((a, b) => new Date(b.backupDate).getTime() - new Date(a.backupDate).getTime());
      setBackups(backupList);

    } catch (err) {
      LOGGER.error('Error loading backups:', err);
    }
  };

  const createBackup = async (_systemName: string) => {
    try {
      if (!runtimeSystemData) {
        LOGGER.warn('Cannot create backup: runtime system data is unavailable');
        return;
      }

      const currentName = runtimeSystemData.systemName || defaultGameSystem.name;

      const backup: SystemBackup = {
        name: currentName,
        backupDate: new Date().toISOString(),
        theme_primary: runtimeSystemData.theme.primary,
        theme_offset: runtimeSystemData.theme.offset,
        theme_background: runtimeSystemData.theme.background,
        theme_border: runtimeSystemData.theme.border,
        background_url: runtimeSystemData.theme.background_url,
        card_layout: runtimeSystemData.cardLayout,
        list_layout: runtimeSystemData.listLayout,
        attributes: runtimeSystemData.attributes,
      };

      const backupKey = `${BACKUP_KEY_PREFIX}.${currentName}.backup`;
      localStorage.setItem(backupKey, JSON.stringify(backup));

      LOGGER.log(`Backup created for ${currentName}`);
      loadBackups(); // Refresh backup list

    } catch (err) {
      LOGGER.error('Error creating backup:', err);
      throw err;
    }
  };

  const deleteBackup = (systemName: string) => {
    try {
      const backupKey = `${BACKUP_KEY_PREFIX}.${systemName}.backup`;
      localStorage.removeItem(backupKey);
      LOGGER.log(`Backup deleted for ${systemName}`);
      loadBackups(); // Refresh backup list
      setSuccess(`Backup for "${systemName}" deleted successfully`);
    } catch (err) {
      LOGGER.error('Error deleting backup:', err);
      setError('Failed to delete backup');
    }
  };

  const confirmAction = (message: string, action: () => Promise<void>) => {
    setConfirmMessage(message);
    setPendingAction(() => action);
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    setShowConfirmModal(false);
    if (pendingAction) {
      await pendingAction();
      setPendingAction(null);
    }
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    setPendingAction(null);
    setConfirmMessage('');
  };

  const fetchAndSaveSystem = async () => {
    if (!shareId.trim()) {
      setError('Please enter a share_id');
      return;
    }

    // Show confirmation before importing
    confirmAction(
      'This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?',
      async () => {
        await performSystemImport();
      }
    );
  };

  const performSystemImport = async () => {
    if (!isPremiumAuthorized()) {
      setError('Premium account required. Connect and use a premium Battle-System account before importing systems.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await ensureConnected();
      const { data, error: fetchError } = await withSupabaseAuthRetry(async () => {
        return supabase
          .rpc('bs_forge_import_system_snapshot', {
            p_source_share_id: shareId.trim(),
          });
      });

      if (fetchError) throw fetchError;

      if (!data) {
        setError('No system found with that share_id');
        setLoading(false);
        return;
      }

      const importedSnapshot = (Array.isArray(data) ? data[0] : data) as SnapshotSystemRecord | null;
      if (!importedSnapshot || typeof importedSnapshot.snapshot_public_id !== 'string') {
        throw new Error('Snapshot import did not return a valid record');
      }

      const cardLayout = parseSnapshotArrayField<CardLayoutComponent>(importedSnapshot.card_layout, 'card_layout');
      const listLayout = parseSnapshotArrayField<ListLayoutComponent>(importedSnapshot.list_layout, 'list_layout');
      const attributes = parseSnapshotArrayField<SystemAttribute>(importedSnapshot.attributes, 'attributes');

      if (!Array.isArray(attributes)) {
        throw new Error('Imported attributes are not a valid array');
      }

      // Create backup of current system before overwriting
      await createBackup(currentSystemName);

      // Prepare theme data
      const themeData: ThemeData = {
        primary: importedSnapshot.theme_primary,
        offset: importedSnapshot.theme_offset,
        background: importedSnapshot.theme_background,
        border: importedSnapshot.theme_border,
        background_url: importedSnapshot.background_url,
      };

      const importTimestamp = new Date().toISOString();

      await OBR.room.setMetadata({
        [SystemKeys.SNAPSHOT_PUBLIC_ID]: importedSnapshot.snapshot_public_id,
        [SystemKeys.SYSTEM_NAME]: importedSnapshot.system_name,
        [SystemKeys.IMPORT_DATE]: importTimestamp,
      });

      setRuntimeSystemData({
        theme: themeData,
        cardLayout,
        listLayout,
        attributes,
        systemName: importedSnapshot.system_name,
        importDate: importTimestamp,
        snapshotPublicId: importedSnapshot.snapshot_public_id,
      });

      // Update local state
      setCurrentSystemName(importedSnapshot.system_name);
      setCurrentImportDate(importTimestamp);
      setCurrentTheme(themeData);

      // Apply new theme
      updateThemeFromSystem(
        themeData.primary,
        themeData.offset,
        themeData.background,
        themeData.border,
        themeData.background_url
      );

      setSuccess(`System "${importedSnapshot.system_name}" loaded successfully! Backup created.`);
      setShareId('');

      LOGGER.log('System snapshot imported and loaded:', {
        systemName: importedSnapshot.system_name,
        snapshotPublicId: importedSnapshot.snapshot_public_id,
      });

    } catch (err: unknown) {
      LOGGER.error('Error fetching system:', err);
      setError(getErrorMessage(err, 'An error occurred while fetching the system'));
    } finally {
      setLoading(false);
    }
  };

  const importFromBackup = async (backup: SystemBackup) => {
    confirmAction(
      `This will restore the system "${backup.name}" from backup. A backup of your current system will be created. Do you want to continue?`,
      async () => {
        await performBackupRestore(backup);
      }
    );
  };

  const performBackupRestore = async (backup: SystemBackup) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (!isPremiumAuthorized()) {
        setError('Premium account required. Connect and use a premium Battle-System account before restoring backups for room sharing.');
        return;
      }

      await ensureConnected();

      // Create backup of current system (may overwrite if same name)
      await createBackup(currentSystemName);

      // Prepare theme data
      const themeData: ThemeData = {
        primary: backup.theme_primary,
        offset: backup.theme_offset,
        background: backup.theme_background,
        border: backup.theme_border,
        background_url: backup.background_url,
      };

      if (!Array.isArray(backup.card_layout) || !Array.isArray(backup.list_layout) || !Array.isArray(backup.attributes)) {
        throw new Error('Backup data is invalid');
      }

      const restoreTimestamp = new Date().toISOString();

      const restoreSourceKey = `forge-backup:${backup.name.trim().toLowerCase()}`;
      const { data: publishData, error: publishError } = await withSupabaseAuthRetry(async () => {
        return supabase.rpc('bs_forge_upsert_user_snapshot_payload', {
          p_source_share_id: restoreSourceKey,
          p_system_name: backup.name,
          p_background_url: backup.background_url,
          p_theme_primary: backup.theme_primary,
          p_theme_offset: backup.theme_offset,
          p_theme_background: backup.theme_background,
          p_theme_border: backup.theme_border,
          p_card_layout: backup.card_layout,
          p_list_layout: backup.list_layout,
          p_attributes: backup.attributes,
        });
      });

      if (publishError) {
        throw publishError;
      }

      const publishedSnapshot = (Array.isArray(publishData) ? publishData[0] : publishData) as SnapshotSystemRecord | null;
      if (!publishedSnapshot || typeof publishedSnapshot.snapshot_public_id !== 'string') {
        throw new Error('Backup restore snapshot publish failed');
      }

      const restoredRuntimeData: RuntimeSystemData = {
        theme: themeData,
        cardLayout: backup.card_layout,
        listLayout: backup.list_layout,
        attributes: backup.attributes,
        systemName: backup.name,
        importDate: restoreTimestamp,
        snapshotPublicId: publishedSnapshot.snapshot_public_id,
      };

      setRuntimeSystemData(restoredRuntimeData);

      await OBR.room.setMetadata({
        [SystemKeys.SNAPSHOT_PUBLIC_ID]: publishedSnapshot.snapshot_public_id,
        [SystemKeys.SYSTEM_NAME]: backup.name,
        [SystemKeys.IMPORT_DATE]: restoreTimestamp,
      });

      // Update local state
      setCurrentSystemName(backup.name);
      setCurrentImportDate(restoreTimestamp);
      setCurrentTheme(themeData);

      // Apply theme
      updateThemeFromSystem(
        themeData.primary,
        themeData.offset,
        themeData.background,
        themeData.border,
        themeData.background_url
      );

      setSuccess(`System "${backup.name}" restored from backup successfully!`);
      LOGGER.log('System restored from backup:', backup.name);

    } catch (err: unknown) {
      LOGGER.error('Error restoring backup:', err);
      setError('Failed to restore system from backup');
    } finally {
      setLoading(false);
    }
  };

  const resetToDefault = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const defaultTheme: ThemeData = {
        primary: defaultGameSystem.theme_primary,
        offset: defaultGameSystem.theme_offset,
        background: defaultGameSystem.theme_background,
        border: defaultGameSystem.theme_border,
        background_url: defaultGameSystem.background_url,
      };

      setRuntimeSystemData({
        theme: defaultTheme,
        cardLayout: defaultGameSystem.card_layout as CardLayoutComponent[],
        listLayout: defaultGameSystem.list_layout as ListLayoutComponent[],
        attributes: defaultGameSystem.attributes as SystemAttribute[],
        systemName: defaultGameSystem.name,
        importDate: null,
        snapshotPublicId: null,
      });

      await OBR.room.setMetadata({
        [SystemKeys.SNAPSHOT_PUBLIC_ID]: null,
        [SystemKeys.SYSTEM_NAME]: defaultGameSystem.name,
        [SystemKeys.IMPORT_DATE]: null,
      });

      // Update local state
      setCurrentSystemName(defaultGameSystem.name);
      setCurrentImportDate(null);
      setCurrentTheme(defaultTheme);

      // Apply theme
      updateThemeFromSystem(
        defaultTheme.primary,
        defaultTheme.offset,
        defaultTheme.background,
        defaultTheme.border,
        defaultTheme.background_url
      );

      setSuccess('Reset to default system successfully!');
    } catch (err: unknown) {
      setError('Failed to reset to default system');
      LOGGER.error('Error resetting to default:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isImportLocked = !isPremiumAuth;
  const isHpMappingLocked = !isPremiumAuth;

  return (
    <motion.div
      key="system"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>System Configuration</PageTitle>

        {/* Current System Display */}
        <SystemName theme={theme}>{currentSystemName}</SystemName>

        {currentImportDate ? (
          <ImportDate theme={theme}>
            Imported: {formatDate(currentImportDate)}
          </ImportDate>
        ) : (
          <ImportDate theme={theme}>
            Using Default System
          </ImportDate>
        )}

        {currentTheme && (
          <>
            <SwatchContainer>
              <div>
                <ColorSwatch color={currentTheme.primary} theme={theme}>
                  {currentTheme.primary}
                </ColorSwatch>
                <SwatchLabel theme={theme}>PRIMARY</SwatchLabel>
              </div>
              <div>
                <ColorSwatch color={currentTheme.offset} theme={theme}>
                  {currentTheme.offset}
                </ColorSwatch>
                <SwatchLabel theme={theme}>OFFSET</SwatchLabel>
              </div>
              <div>
                <ColorSwatch color={currentTheme.background} theme={theme}>
                  {currentTheme.background}
                </ColorSwatch>
                <SwatchLabel theme={theme}>BG</SwatchLabel>
              </div>
              <div>
                <ColorSwatch color={currentTheme.border} theme={theme}>
                  {currentTheme.border}
                </ColorSwatch>
                <SwatchLabel theme={theme}>BORDER</SwatchLabel>
              </div>
            </SwatchContainer>

            <MappingSection theme={theme}>
              <MappingTitle theme={theme}>System Settings</MappingTitle>
              <MappingRow>
                <MappingLabel theme={theme}>Current HP</MappingLabel>
                <MappingSelect
                  theme={theme}
                  value={hpCurrentBid}
                  disabled={isHpMappingLocked}
                  onChange={async (e) => {
                    if (isHpMappingLocked) {
                      return;
                    }
                    const value = e.target.value;
                    setHpCurrentBid(value);
                    await saveHpAttributeMapping(SettingsConstants.HP_CURRENT_BID, value);
                  }}
                >
                  <option value="">-- Select Attribute --</option>
                  {numericAttributes.map((attribute) => (
                    <option key={attribute.attr_bid} value={attribute.attr_bid}>
                      {attribute.attr_abbr} — {attribute.attr_name}
                    </option>
                  ))}
                </MappingSelect>
              </MappingRow>
              <MappingRow>
                <MappingLabel theme={theme}>Max HP</MappingLabel>
                <MappingSelect
                  theme={theme}
                  value={hpMaxBid}
                  disabled={isHpMappingLocked}
                  onChange={async (e) => {
                    if (isHpMappingLocked) {
                      return;
                    }
                    const value = e.target.value;
                    setHpMaxBid(value);
                    await saveHpAttributeMapping(SettingsConstants.HP_MAX_BID, value);
                  }}
                >
                  <option value="">-- Select Attribute --</option>
                  {numericAttributes.map((attribute) => (
                    <option key={attribute.attr_bid} value={attribute.attr_bid}>
                      {attribute.attr_abbr} — {attribute.attr_name}
                    </option>
                  ))}
                </MappingSelect>
              </MappingRow>
              {isHpMappingLocked && (
                <ImportDate theme={theme}>
                  Premium account required to edit HP mapping.
                </ImportDate>
              )}
              <MappingRow>
                <MappingLabel theme={theme}>Buff Visual</MappingLabel>
                <MappingSelect
                  theme={theme}
                  value={buffVisualPreset}
                  onChange={async (e) => {
                    const value = e.target.value;
                    if (!isBuffVisualPreset(value)) {
                      return;
                    }
                    setBuffVisualPreset(value);
                    await saveHpAttributeMapping(SettingsConstants.BUFF_VISUAL_PRESET, value);
                  }}
                >
                  {BUFF_VISUAL_PRESET_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </MappingSelect>
              </MappingRow>
              <MappingRow>
                <MappingLabel theme={theme}>Debuff Visual</MappingLabel>
                <MappingSelect
                  theme={theme}
                  value={debuffVisualPreset}
                  onChange={async (e) => {
                    const value = e.target.value;
                    if (!isDebuffVisualPreset(value)) {
                      return;
                    }
                    setDebuffVisualPreset(value);
                    await saveHpAttributeMapping(SettingsConstants.DEBUFF_VISUAL_PRESET, value);
                  }}
                >
                  {DEBUFF_VISUAL_PRESET_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </MappingSelect>
              </MappingRow>
            </MappingSection>
          </>
        )}

        {/* Import New System */}
        <SystemInfo theme={theme}>
          <h3 style={{ color: theme.PRIMARY, marginTop: 0 }}>Import New System</h3>
          <p style={{ color: rgbaFromHex(theme.PRIMARY, 0.8), fontSize: '14px' }}>
            {isImportLocked
              ? 'Premium account required to import new/custom systems.'
              : 'Enter a share_id to download and activate a new game system configuration.'}
          </p>

          <InputGroup>
            <Input
              theme={theme}
              type="text"
              value={shareId}
              onChange={(e) => setShareId(e.target.value)}
              placeholder={isImportLocked ? '' : 'Enter Share Id...'}
              disabled={loading || isImportLocked}
              onKeyPress={(e) => e.key === 'Enter' && fetchAndSaveSystem()}
            />
          </InputGroup>

          <ButtonGroup>
            <Button
              theme={theme}
              onClick={fetchAndSaveSystem}
              disabled={loading || isImportLocked || !shareId.trim()}
            >
              {loading ? '....!' : 'Import System'}
            </Button>
            <Button
              theme={theme}
              variant="secondary"
              onClick={resetToDefault}
              disabled={loading}
            >
              Use Default
            </Button>
          </ButtonGroup>
        </SystemInfo>

        {error && (
          <ErrorMessage theme={theme}>
            <strong>Error:</strong> {error}
          </ErrorMessage>
        )}

        {success && (
          <SuccessMessage theme={theme}>
            <strong>Success:</strong> {success}
          </SuccessMessage>
        )}

        {/* Backup Management */}
        {backups.length > 0 && (
          <BackupSection>
            <Card theme={theme}>
              <h3 style={{ color: theme.PRIMARY, marginTop: 0, marginBottom: '15px' }}>
                System Backups
              </h3>
              <BackupList>
                {backups.map((backup) => (
                  <BackupItem key={`${backup.name}-${backup.backupDate}`} theme={theme}>
                    <BackupInfo>
                      <BackupName theme={theme}>{backup.name}</BackupName>
                      <BackupDate theme={theme}>
                        Backed up: {formatDate(backup.backupDate)}
                      </BackupDate>
                    </BackupInfo>
                    <BackupActions>
                      <IconButton
                        theme={theme}
                        onClick={() => importFromBackup(backup)}
                        disabled={loading}
                        title="Import this backup"
                      >
                        <Upload size={18} />
                      </IconButton>
                      <IconButton
                        theme={theme}
                        $variant="danger"
                        onClick={() => deleteBackup(backup.name)}
                        disabled={loading}
                        title="Delete this backup"
                      >
                        <X size={18} />
                      </IconButton>
                    </BackupActions>
                  </BackupItem>
                ))}
              </BackupList>
            </Card>
          </BackupSection>
        )}
      </PageContainer>

      <PopupModal
        isOpen={showConfirmModal}
        title="Confirm Action"
        onClose={handleCancel}
        actions={(
          <>
            <Button theme={theme} variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button theme={theme} onClick={handleConfirm}>
              Confirm
            </Button>
          </>
        )}
      >
        <ModalText theme={theme}>{confirmMessage}</ModalText>
      </PopupModal>
    </motion.div>
  );
};
