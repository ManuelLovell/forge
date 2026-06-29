import { useEffect, useMemo, useState } from 'react';
import type { Item } from '@owlbear-rodeo/sdk';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import { CircleQuestionMark, Cloudy, Download, Menu, Pin, BookMarked, Save, Search, Server, Star, Upload } from 'lucide-react';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import LOGGER from '../helpers/Logger';
import { MOCK_BIDS } from '../helpers/MockData';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { SettingsTooltip } from './SettingsTooltip';
import { createTheme } from '../helpers/ThemeConstants';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { CardLayoutRenderer, type CardLayoutTheme } from './CardLayoutRenderer';
import { TrackForgeEvent } from '../helpers/forgeMetrics';
// Example central dice roll usage (add where dice rolls are triggered)
// const metadata = DATA_STORED_IN_ROOM ? await OBR.room.getMetadata() : await OBR.scene.getMetadata();
// await sendCentralDiceRoll({
//   notation,
//   actionName,
//   senderName,
//   senderId,
//   senderColor,
// }, metadata);
import {
  deleteUnitCollectionRecord,
  filterExtensionMetadata,
  getAllUnitCollectionRecords,
  type UnitCollectionRecord,
  upsertUnitFromMetadata,
} from '../helpers/unitCollectionDb';
import { hydrateAuthFromSession, isPremiumAuthorized } from '../auth/authHelpers';
import type { CardLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';
import { supabase } from '../supabase/supabaseClient';
import {
  buildHpMetadataValue,
  getAttributeByBid,
  getConfiguredHpBidKeys,
  getHpMetadataKey,
  getHpValueFromMetadata,
} from '../helpers/hpAttributeMapping';
import { useTranslation } from '../i18n/Translation';

const SYSTEM_KEYS = {
  SNAPSHOT_PUBLIC_ID: `${OwlbearIds.EXTENSIONID}/SnapshotPublicId`,
} as const;

type UnitCollectionRemoteModule = typeof import('../helpers/unitCollectionRemote');

let remoteCollectionModulePromise: Promise<UnitCollectionRemoteModule> | null = null;

const loadRemoteCollectionModule = async (): Promise<UnitCollectionRemoteModule> => {
  if (!remoteCollectionModulePromise) {
    remoteCollectionModulePromise = import('../helpers/unitCollectionRemote');
  }

  return remoteCollectionModulePromise;
};

type CardCache = {
  metadata: Record<string, unknown>;
  items: Item[];
};

type UnitMetadataTransferPayload = {
  name: string;
  author: string;
  metadata: Record<string, unknown>;
};

type CollectionSearchRecord = UnitCollectionRecord & {
  source: 'local' | 'remote-user' | 'remote-shared';
};

type ThemeData = CardLayoutTheme & {
  background_url?: string;
};

const DEFAULT_THEME: ThemeData = {
  primary: defaultGameSystem.theme_primary,
  offset: defaultGameSystem.theme_offset,
  background: defaultGameSystem.theme_background,
  border: defaultGameSystem.theme_border,
  background_url: defaultGameSystem.background_url,
};

const Root = styled.div<{ $theme: ThemeData }>`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.$theme.primary};
  border: 2px solid ${props => props.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${props => props.$theme.background_url
    ? `linear-gradient(${rgbaFromHex(props.$theme.background, 0.52)}, ${rgbaFromHex(props.$theme.background, 0.52)}), url(${props.$theme.background_url})`
    : 'none'};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const ContentViewport = styled.div<{ $theme: ThemeData }>`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  background: ${props => rgbaFromHex(props.$theme.background, 0.5)};
`;

const Message = styled.p<{ $theme: ThemeData }>`
  margin: 0;
  color: ${props => props.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`;

const FloatingCardControls = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`;

const CardControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

const UnitSelect = styled.select<{ $theme: ThemeData }>`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => props.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`;

const CloseButton = styled.button<{ $theme: ThemeData }>`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }
`;

const SaveButton = styled.button<{ $theme: ThemeData; $flash: boolean }>`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid hotpink;
  border-radius: 4px;
  background: ${props => props.$flash
    ? rgbaFromHex(props.$theme.offset, 0.75)
    : rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => props.$theme.primary};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  }
`;

const GroupEditLabel = styled.div`
  flex: 1;
  min-width: 0;
  height: 28px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: hotpink;
  padding: 0 6px;
  box-sizing: border-box;
  background: linear-gradient(90deg,rgba(42, 123, 155, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(237, 83, 234, 1) 100%);
`;

const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
  display: block;
`;

const TrayOverlay = styled.div<{ $theme: ThemeData; $open: boolean }>`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 4px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${props => props.$open ? 'translateY(0)' : 'translateY(calc(100% - 40px))'};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`;

const TrayHandleBuffer = styled.div<{ $theme: ThemeData }>`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${props => rgbaFromHex(props.$theme.background, 0.50)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrayHandleButton = styled.button<{ $theme: ThemeData }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.98)};
  color: ${props => props.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }
`;

const TrayBody = styled.div<{ $theme: ThemeData }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 10px 10px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
`;

const SearchWindow = styled.div<{ $theme: ThemeData }>`
  flex: 1 1 80%;
  min-height: 0;
  border: 2px solid ${props => rgbaFromHex(props.$theme.border, 0.85)};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.88)};
  font-size: 14px;
  font-weight: 600;
  overflow-y: auto;
  padding: 8px;
  box-sizing: border-box;
`;

const CollectionList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CollectionRow = styled.div<{ $theme: ThemeData }>`
  width: 100%;
  border: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.8)};
  border-radius: 8px;
  background: ${props => rgbaFromHex(props.$theme.background, 0.72)};
  padding: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
`;

const CollectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const CollectionNameRow = styled.div<{ $theme: ThemeData }>`
  color: ${props => props.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`;

const FavoriteMark = styled.span`
  font-size: 12px;
  line-height: 1;
`;

const CollectionNameText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CollectionAuthorRow = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SourceTag = styled.span<{ $theme: ThemeData }>`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  border: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.85)};
  background: ${props => rgbaFromHex(props.$theme.offset, 0.35)};
  color: ${props => props.$theme.primary};
`;

const AuthorName = styled.span<{ $color: string }>`
  color: ${props => props.$color};
`;

const CollectionActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const CollectionActionButton = styled.button<{ $theme: ThemeData; $variant?: 'import' | 'delete' }>`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => props.$variant === 'import'
    ? rgbaFromHex(props.$theme.offset, 0.45)
    : rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`;

const TraySearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TraySearchInput = styled.input<{ $theme: ThemeData }>`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`;

const TraySearchButton = styled.button<{ $theme: ThemeData }>`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }
`;

const TrayPeekActions = styled.div`
  position: absolute;
  top: 6px;
  left: 14px;
  right: 14px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 21;
  pointer-events: none;
`;

const TrayActionGroup = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`;

const TrayActionButton = styled.button<{ $theme: ThemeData }>`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }

  &:disabled:hover {
    background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  }
`;

const FavoriteActionButton = styled(TrayActionButton)<{ $active: boolean; $theme: ThemeData }>`
  background: ${props => props.$active
    ? rgbaFromHex(props.$theme.offset, 0.45)
    : rgbaFromHex(props.$theme.background, 0.9)};

  &:disabled {
    background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  }
`;

const ImportTextArea = styled.textarea<{ $theme: ThemeData }>`
  width: 100%;
  min-height: 220px;
  border-radius: 8px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 12px;
`;

const ModalActionButton = styled.button<{ $theme: ThemeData; $variant?: 'primary' | 'secondary' }>`
  border: 2px solid ${props => props.$theme.border};
  border-radius: 8px;
  background: ${props => props.$variant === 'primary'
    ? rgbaFromHex(props.$theme.offset, 0.5)
    : rgbaFromHex(props.$theme.background, 0.9)};
  color: ${props => props.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`;

const ModalActionButtonLeft = styled(ModalActionButton)`
  margin-right: auto;
`;

const ModalErrorText = styled.div<{ $theme: ThemeData }>`
  margin-top: 8px;
  color: ${props => rgbaFromHex(props.$theme.offset, 0.95)};
  font-size: 12px;
`;

const HelpModalContent = styled.div<{ $theme: ThemeData }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.92)};
  font-size: 12px;
  line-height: 1.45;
`;

const HelpSectionTitle = styled.div<{ $theme: ThemeData }>`
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.$theme.primary};
`;

const HelpList = styled.ul`
  margin: 0;
  padding-left: 16px;
`;

const HelpCode = styled.code<{ $theme: ThemeData }>`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.7)};
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => props.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`;

const LocalModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const LocalModalContainer = styled.div<{ $theme: ThemeData }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.$theme.background};
  border: 3px solid ${props => props.$theme.border};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  height: 84%;
  min-width: 340px;
  max-width: 560px;
  width: min(560px, calc(100vw - 32px));
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  overflow: scroll;
`;

const LocalModalTitle = styled.h3<{ $theme: ThemeData }>`
  color: ${props => props.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`;

const LocalModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`;

const readUnitIdsFromQuery = (): string[] => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('unitid');
  if (!raw) {
    return [];
  }

  return Array.from(new Set(
    raw
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
  ));
};

const readUnitIdFromQuery = (): string | null => {
  const ids = readUnitIdsFromQuery();
  return ids[0] || null;
};

const readPinnedFromQuery = (): boolean => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('pinned');
  if (!raw) {
    return false;
  }

  const normalized = raw.trim().toLowerCase();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
};

const PINNED_CARD_POPOVER_ID = `POP_${OwlbearIds.CARDSID}`;

const buildCardPopoverUrl = (unitIds: string[], pinned: boolean): string => {
  const normalizedUnitIds = Array.from(new Set(
    unitIds
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
  ));

  if (normalizedUnitIds.length === 0) {
    return '/pages/forgecard.html';
  }

  const params = new URLSearchParams();
  params.set('unitid', normalizedUnitIds.join(','));
  if (pinned) {
    params.set('pinned', 'true');
  }

  return `/pages/forgecard.html?${params.toString()}`;
};

const parseSystemArrayField = <T,>(raw: unknown): T[] | null => {
  if (Array.isArray(raw)) {
    return raw as T[];
  }

  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as T[]) : null;
    } catch {
      return null;
    }
  }

  return null;
};

const isFabricatedTrue = (raw: unknown): boolean => {
  if (raw === true) {
    return true;
  }

  if (typeof raw === 'string') {
    const normalized = raw.trim().toLowerCase();
    return normalized === 'true' || normalized === '1' || normalized === 'yes';
  }

  if (typeof raw === 'number') {
    return raw === 1;
  }

  return false;
};

export const CardPopoverPage = () => {
  const { t } = useTranslation();
  const initialSelectedUnitIds = useMemo(() => readUnitIdsFromQuery(), []);
  const isGroupEditMode = initialSelectedUnitIds.length > 1;
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(() => readUnitIdFromQuery());
  const [groupEditDraftMetadata, setGroupEditDraftMetadata] = useState<Record<string, unknown>>({});
  const [groupEditImportRenderVersion, setGroupEditImportRenderVersion] = useState(0);
  const [isGroupSaveCoolingDown, setIsGroupSaveCoolingDown] = useState(false);
  const [isGroupSaveFlashing, setIsGroupSaveFlashing] = useState(false);
  const isPinned = useMemo(() => readPinnedFromQuery(), []);
  const [cache, setCache] = useState<CardCache>({ metadata: {}, items: [] });
  const [snapshotTheme, setSnapshotTheme] = useState<ThemeData | null>(null);
  const [snapshotCardLayout, setSnapshotCardLayout] = useState<CardLayoutComponent[] | null>(null);
  const [snapshotAttributes, setSnapshotAttributes] = useState<SystemAttribute[] | null>(null);
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null);
  const [isCurrentUserGm, setIsCurrentUserGm] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [trayQuery, setTrayQuery] = useState('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
  const [isFavoriteEnabled, setIsFavoriteEnabled] = useState(false);
  const [collectionRecords, setCollectionRecords] = useState<UnitCollectionRecord[]>([]);
  const [remoteCollectionRecords, setRemoteCollectionRecords] = useState<CollectionSearchRecord[]>([]);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [authHydrated, setAuthHydrated] = useState(false);

  const syncLoggerEnabled = (metadata: Record<string, unknown>) => {
    const enabled = metadata[SettingsConstants.ENABLE_CONSOLE_LOG];
    if (typeof enabled === 'boolean') {
      LOGGER.setEnabled(enabled);
    }
  };

  const cardLayout = useMemo(() => {
    if (snapshotCardLayout) {
      return snapshotCardLayout;
    }

    return defaultGameSystem.card_layout as CardLayoutComponent[];
  }, [snapshotCardLayout]);

  const attributes = useMemo(() => {
    if (snapshotAttributes) {
      return snapshotAttributes;
    }

    return defaultGameSystem.attributes as SystemAttribute[];
  }, [snapshotAttributes]);

  const theme = useMemo(() => {
    if (snapshotTheme) {
      return snapshotTheme;
    }

    return DEFAULT_THEME;
  }, [snapshotTheme]);

  const tooltipTheme = useMemo(() => createTheme(
    theme.primary,
    theme.offset,
    theme.background,
    theme.border,
    theme.background_url,
  ), [theme]);

  const trackCardAction = (eventName: string, metadata?: Record<string, unknown>) => {
    void TrackForgeEvent({
      eventName,
      eventCategory: 'ui',
      playerId: currentPlayerId,
      success: true,
      metadata,
    });
  };

  useEffect(() => {
    let cancelled = false;

    const hydrateAuth = async () => {
      try {
        await hydrateAuthFromSession();
      } catch (error) {
        LOGGER.log('Auth hydration failed in card iframe', error);
      } finally {
        if (!cancelled) {
          setAuthHydrated(true);
        }
      }
    };

    void hydrateAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadSnapshotData = async (roomMetadata: Record<string, unknown>) => {
      const snapshotId = roomMetadata[SYSTEM_KEYS.SNAPSHOT_PUBLIC_ID];
      if (typeof snapshotId !== 'string' || snapshotId.trim().length === 0) {
        if (isMounted) {
          setSnapshotTheme(null);
          setSnapshotCardLayout(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
        p_snapshot_public_id: snapshotId,
      });

      if (error) {
        if (isMounted) {
          setSnapshotTheme(null);
          setSnapshotCardLayout(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const snapshot = Array.isArray(data) ? data[0] : data;
      if (!snapshot || typeof snapshot !== 'object') {
        if (isMounted) {
          setSnapshotTheme(null);
          setSnapshotCardLayout(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      const parsed = snapshot as Partial<{
        theme_primary: string;
        theme_offset: string;
        theme_background: string;
        theme_border: string;
        background_url: string;
        card_layout: unknown;
        attributes: unknown;
      }>;

      const parsedCardLayout = parseSystemArrayField<CardLayoutComponent>(parsed.card_layout);
      const parsedAttributes = parseSystemArrayField<SystemAttribute>(parsed.attributes);

      if (
        typeof parsed.theme_primary !== 'string'
        || typeof parsed.theme_offset !== 'string'
        || typeof parsed.theme_background !== 'string'
        || typeof parsed.theme_border !== 'string'
        || !Array.isArray(parsedCardLayout)
        || !Array.isArray(parsedAttributes)
      ) {
        if (isMounted) {
          setSnapshotTheme(null);
          setSnapshotCardLayout(null);
          setSnapshotAttributes(null);
        }
        return;
      }

      if (isMounted) {
        setSnapshotTheme({
          primary: parsed.theme_primary,
          offset: parsed.theme_offset,
          background: parsed.theme_background,
          border: parsed.theme_border,
          background_url: typeof parsed.background_url === 'string' ? parsed.background_url : '',
        });
        setSnapshotCardLayout(parsedCardLayout);
        setSnapshotAttributes(parsedAttributes);
      }
    };

    const initialize = async () => {
      const [metadata, items, roomMetadata, playerId, playerRole] = await Promise.all([
        OBR.scene.getMetadata(),
        OBR.scene.items.getItems(),
        OBR.room.getMetadata(),
        OBR.player.getId(),
        OBR.player.getRole(),
      ]);

      if (!isMounted) {
        return;
      }

      syncLoggerEnabled(DATA_STORED_IN_ROOM ? roomMetadata : metadata);

      setCache({ metadata, items });
      await loadSnapshotData(roomMetadata);
      setCurrentPlayerId(playerId);
      setIsCurrentUserGm(String(playerRole || '').toUpperCase() === 'GM');
      setIsReady(true);
    };

    initialize();

    const unsubscribeMetadata = OBR.scene.onMetadataChange((metadata) => {
      if (!isMounted) return;
      setCache((prev) => ({ ...prev, metadata }));

      if (!DATA_STORED_IN_ROOM) {
        syncLoggerEnabled(metadata);
      }
    });

    const unsubscribeRoomMetadata = OBR.room.onMetadataChange((metadata) => {
      if (!isMounted) return;

      void loadSnapshotData(metadata);

      if (DATA_STORED_IN_ROOM) {
        syncLoggerEnabled(metadata);
      }
    });

    const unsubscribeItems = OBR.scene.items.onChange((items) => {
      if (!isMounted) return;
      setCache((prev) => ({ ...prev, items }));
    });

    return () => {
      isMounted = false;
      unsubscribeMetadata();
      unsubscribeRoomMetadata();
      unsubscribeItems();
    };
  }, []);

  const getUnitDisplayName = (item: Item): string => {
    const metadataName = item.metadata?.[UnitConstants.UNIT_NAME];
    if (typeof metadataName === 'string' && metadataName.trim()) {
      return metadataName;
    }

    const textName = (item as Item & { text?: { plainText?: string } }).text?.plainText;
    if (typeof textName === 'string' && textName.trim()) {
      return textName;
    }

    if (typeof item.name === 'string' && item.name.trim()) {
      return item.name;
    }

    return t('card.unknownUnit');
  };

  const selectableUnits = useMemo(() => {
    return cache.items
      .filter((item) => isFabricatedTrue(item.metadata?.[UnitConstants.FABRICATED]))
      .filter((item) => isCurrentUserGm || item.createdUserId === currentPlayerId)
      .filter((item) => item.id !== selectedUnitId)
      .map((item) => ({
        id: item.id,
        name: getUnitDisplayName(item),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [cache.items, selectedUnitId, isCurrentUserGm, currentPlayerId]);

  const unitItem = useMemo(() => {
    if (isGroupEditMode) {
      const fallbackItem = cache.items.find((item) => initialSelectedUnitIds.includes(item.id)) || null;
      if (!fallbackItem) {
        return null;
      }

      return {
        ...fallbackItem,
        name: '',
        metadata: groupEditDraftMetadata,
      } as Item;
    }

    if (!selectedUnitId) {
      return null;
    }

    return cache.items.find((item) => item.id === selectedUnitId) || null;
  }, [isGroupEditMode, cache.items, initialSelectedUnitIds, groupEditDraftMetadata, selectedUnitId]);

  const getSelectedUnitItemFromScene = async (): Promise<Item | null> => {
    if (!selectedUnitId) {
      return null;
    }

    const sceneItems = await OBR.scene.items.getItems();
    return sceneItems.find((item) => item.id === selectedUnitId) || null;
  };

  const updateUnitMetadata = async (updates: Record<string, unknown>) => {
    if (isGroupEditMode) {
      setGroupEditDraftMetadata((previous) => {
        const next = { ...previous };
        for (const [key, value] of Object.entries(updates)) {
          if (value === undefined) {
            delete next[key];
          } else {
            next[key] = value;
          }
        }
        return next;
      });
      return;
    }

    if (!unitItem) {
      return;
    }

    await OBR.scene.items.updateItems([unitItem.id], (itemsToUpdate) => {
      const metadata: Record<string, unknown> = { ...(itemsToUpdate[0].metadata || {}) };
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined) {
          delete metadata[key];
        } else {
          metadata[key] = value;
        }
      });
      itemsToUpdate[0].metadata = metadata;
    });

    setCache((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id !== unitItem.id) {
          return item;
        }

        const metadata: Record<string, unknown> = { ...(item.metadata || {}) };
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined) {
            delete metadata[key];
          } else {
            metadata[key] = value;
          }
        });

        return {
          ...item,
          metadata,
        };
      }),
    }));
  };

  const replaceUnitExtensionMetadata = async (nextMetadata: Record<string, unknown>) => {
    if (!unitItem) {
      return;
    }

    const [sceneMetadata, roomMetadata] = await Promise.all([
      OBR.scene.getMetadata(),
      OBR.room.getMetadata(),
    ]);
    const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
    const { currentHpBid, maxHpBid } = getConfiguredHpBidKeys(storageContainer, attributes);
    const importedConfiguredMaxHp = getHpValueFromMetadata(nextMetadata, maxHpBid, attributes, 'max');
    const importedLegacyMaxHp = maxHpBid === MOCK_BIDS.MAX_HP
      ? importedConfiguredMaxHp
      : getHpValueFromMetadata(nextMetadata, MOCK_BIDS.MAX_HP, attributes, 'max');
    const importedMaxHp = importedConfiguredMaxHp ?? importedLegacyMaxHp;
    const normalizedNextMetadata = { ...nextMetadata };

    if (importedMaxHp !== null) {
      const currentHpKey = getHpMetadataKey(currentHpBid);
      const maxHpKey = getHpMetadataKey(maxHpBid);
      const currentHpAttribute = getAttributeByBid(attributes, currentHpBid);
      const maxHpAttribute = getAttributeByBid(attributes, maxHpBid);

      normalizedNextMetadata[currentHpKey] = buildHpMetadataValue(
        normalizedNextMetadata[currentHpKey],
        currentHpAttribute,
        'current',
        importedMaxHp,
        importedMaxHp,
      );
      normalizedNextMetadata[maxHpKey] = buildHpMetadataValue(
        normalizedNextMetadata[maxHpKey],
        maxHpAttribute,
        'max',
        importedMaxHp,
        importedMaxHp,
      );
    }

    const stateKeysToPreserve = [
      UnitConstants.FABRICATED,
      UnitConstants.INITIATIVE,
      UnitConstants.ON_LIST,
      UnitConstants.IN_PARTY,
    ];

    await OBR.scene.items.updateItems([unitItem.id], (itemsToUpdate) => {
      const currentMetadata = itemsToUpdate[0].metadata as Record<string, unknown>;
      const nonExtensionMetadata: Record<string, unknown> = {};
      const preservedStateMetadata: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(currentMetadata)) {
        if (!key.startsWith(`${OwlbearIds.EXTENSIONID}/`)) {
          nonExtensionMetadata[key] = value;
        }

        if (stateKeysToPreserve.includes(key)) {
          preservedStateMetadata[key] = value;
        }
      }

      itemsToUpdate[0].metadata = {
        ...nonExtensionMetadata,
        ...normalizedNextMetadata,
        ...preservedStateMetadata,
      };
    });

    setCache((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id !== unitItem.id) {
          return item;
        }

        const nonExtensionMetadata: Record<string, unknown> = {};
        const preservedStateMetadata: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(item.metadata || {})) {
          if (!key.startsWith(`${OwlbearIds.EXTENSIONID}/`)) {
            nonExtensionMetadata[key] = value;
          }

          if (stateKeysToPreserve.includes(key)) {
            preservedStateMetadata[key] = value;
          }
        }

        return {
          ...item,
          metadata: {
            ...nonExtensionMetadata,
            ...normalizedNextMetadata,
            ...preservedStateMetadata,
          },
        };
      }),
    }));
  };

  const loadCollectionRecords = async () => {
    const records = await getAllUnitCollectionRecords();
    setCollectionRecords(records);
  };

  const getAuthorColorByInitial = (author: string): string => {
    const trimmed = author.trim();
    const first = trimmed ? trimmed[0].toUpperCase() : 'A';
    const alphaIndex = Math.max(0, Math.min(25, first.charCodeAt(0) - 65));
    const hue = (alphaIndex / 26) * 360;
    return `hsl(${hue}, 70%, 65%)`;
  };

  const searchSupabaseCollection = async (query: string): Promise<CollectionSearchRecord[]> => {
    const remoteCollectionModule = await loadRemoteCollectionModule();
    const [shared, user] = await Promise.all([
      remoteCollectionModule.searchSharedUnitCollection(query),
      isPremiumAuthorized() ? remoteCollectionModule.searchRemoteUnitCollection(query) : Promise.resolve([]),
    ]);

    return [
      ...user.map((record) => ({ ...record, source: 'remote-user' as const })),
      ...shared.map((record) => ({ ...record, source: 'remote-shared' as const })),
    ];
  };

  const visibleCollectionRecords = useMemo<CollectionSearchRecord[]>(() => {
    const query = appliedSearchQuery.trim().toLowerCase();
    const sourceOrder: Record<CollectionSearchRecord['source'], number> = {
      local: 0,
      'remote-user': 1,
      'remote-shared': 2,
    };
    const groupedSort = (left: CollectionSearchRecord, right: CollectionSearchRecord): number => {
      if (sourceOrder[left.source] !== sourceOrder[right.source]) {
        return sourceOrder[left.source] - sourceOrder[right.source];
      }

      if (left.favorite !== right.favorite) {
        return left.favorite ? -1 : 1;
      }

      return left.name.localeCompare(right.name);
    };

    const localSorted = [...collectionRecords].sort((left, right) => {
      if (left.favorite !== right.favorite) {
        return left.favorite ? -1 : 1;
      }
      return left.name.localeCompare(right.name);
    });

    if (!query) {
      return localSorted
        .filter((record) => record.favorite)
        .map((record) => ({ ...record, source: 'local' as const }));
    }

    const localMatches = localSorted.filter((record) =>
      record.name.toLowerCase().includes(query)
      || record.author.toLowerCase().includes(query),
    );

    const remoteUserMatches = remoteCollectionRecords
      .filter((record) => record.source === 'remote-user')
      .filter((record) =>
        record.name.toLowerCase().includes(query)
        || record.author.toLowerCase().includes(query),
      );

    const remoteSharedMatches = remoteCollectionRecords
      .filter((record) => record.source === 'remote-shared')
      .filter((record) =>
        record.name.toLowerCase().includes(query)
        || record.author.toLowerCase().includes(query),
      );

    return [
      ...localMatches.map((record) => ({ ...record, source: 'local' as const })),
      ...remoteUserMatches,
      ...remoteSharedMatches,
    ].sort(groupedSort);
  }, [collectionRecords, remoteCollectionRecords, appliedSearchQuery]);

  const handleTrayPinClick = async () => {
    const targetUnitIds = isGroupEditMode ? initialSelectedUnitIds : (selectedUnitId ? [selectedUnitId] : []);

    if (targetUnitIds.length === 0) {
      await OBR.notification.show(t('card.noUnitSelectedToPin'), 'ERROR');
      return;
    }

    await TrackForgeEvent({
      eventName: 'card_pin_clicked',
      eventCategory: 'ui',
      playerId: currentPlayerId,
      success: true,
      metadata: {
        group_edit: isGroupEditMode,
        unit_count: targetUnitIds.length,
        pinned: !isPinned,
      },
    });

    const viewportWidth = await OBR.viewport.getWidth();
    const viewportHeight = await OBR.viewport.getHeight();
    const modalBuffer = 100;
    const viewableHeight = viewportHeight > 800 ? 700 : viewportHeight - modalBuffer;

    if (!isPinned) {
      await OBR.popover.open({
        id: PINNED_CARD_POPOVER_ID,
        url: buildCardPopoverUrl(targetUnitIds, true),
        height: 400,
        width: 350,
        anchorPosition: {
          top: 50,
          left: viewportWidth - 70,
        },
        anchorReference: 'POSITION',
        anchorOrigin: {
          vertical: 'CENTER',
          horizontal: 'RIGHT',
        },
        transformOrigin: {
          vertical: 'CENTER',
          horizontal: 'RIGHT',
        },
        hidePaper: true,
        disableClickAway: true,
      });

      await OBR.popover.close(OwlbearIds.CARDSID);
      return;
    }

    await OBR.popover.open({
      id: OwlbearIds.CARDSID,
      url: buildCardPopoverUrl(targetUnitIds, false),
      height: viewableHeight,
      width: 350,
      anchorPosition: {
        left: viewportWidth / 2,
        top: viewportHeight / 2,
      },
      anchorReference: 'POSITION',
      anchorOrigin: {
        vertical: 'CENTER',
        horizontal: 'CENTER',
      },
      transformOrigin: {
        vertical: 'CENTER',
        horizontal: 'CENTER',
      },
      hidePaper: true,
      disableClickAway: true,
    });

    await OBR.popover.close(PINNED_CARD_POPOVER_ID);
  };

  const handleTrayFavoriteClick = () => {
    if (!isCurrentUserGm) {
      return;
    }
    setIsFavoriteEnabled((previous) => !previous);
  };

  const handleTrayCollectionSaveClick = async () => {
    if (!isCurrentUserGm) {
      return;
    }

    const liveUnitItem = await getSelectedUnitItemFromScene();
    if (!liveUnitItem) {
      await OBR.notification.show(t('card.noUnitSelectedToSave'), 'ERROR');
      return;
    }

    if (!authHydrated) {
      await hydrateAuthFromSession();
      setAuthHydrated(true);
    }

    try {
      const authorName = (await OBR.player.getName()).trim();
      const remoteCollectionModule = isPremiumAuthorized()
        ? await loadRemoteCollectionModule()
        : null;
      const status = isPremiumAuthorized()
        ? await remoteCollectionModule!.upsertRemoteUnitFromMetadata(
          liveUnitItem.metadata as Record<string, unknown>,
          authorName,
          isFavoriteEnabled,
        )
        : await upsertUnitFromMetadata(
          liveUnitItem.metadata as Record<string, unknown>,
          authorName,
          isFavoriteEnabled,
        );
      await loadCollectionRecords();
      const target = isPremiumAuthorized() ? t('card.collectionTargetOnline') : t('card.collectionTargetLocal');
      await OBR.notification.show(status === 'created'
        ? t('card.unitSavedToTarget', { target })
        : t('card.unitUpdatedInTarget', { target }));
    } catch (error) {
      LOGGER.log('Collection save failed', error);
      await OBR.notification.show(t('card.couldNotSaveToCollection'), 'ERROR');
    }
  };

  const handleTrayImportClick = async () => {
    const liveUnitItem = await getSelectedUnitItemFromScene();
    if (!liveUnitItem) {
      await OBR.notification.show(t('card.noUnitSelectedToImportInto'), 'ERROR');
      return;
    }

    setImportError(null);
    setImportText('');
    setIsImportModalOpen(true);
  };

  const handleTrayExportClick = async () => {
    const liveUnitItem = await getSelectedUnitItemFromScene();
    if (!liveUnitItem) {
      await OBR.notification.show(t('card.noUnitSelectedToExport'), 'ERROR');
      return;
    }

    try {
      const extensionMetadata = filterExtensionMetadata(liveUnitItem.metadata as Record<string, unknown>);
      const unitNameRaw = extensionMetadata[UnitConstants.UNIT_NAME];
      const unitName = typeof unitNameRaw === 'string' ? unitNameRaw.trim() : '';

      if (!unitName) {
        await OBR.notification.show(t('card.unitMissingValidName'), 'ERROR');
        return;
      }

      const author = (await OBR.player.getName()).trim() || t('card.unknownAuthor');
      const payload: UnitMetadataTransferPayload = {
        name: unitName,
        author,
        metadata: extensionMetadata,
      };

      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      await OBR.notification.show(t('card.unitDataCopied'));
    } catch (error) {
      LOGGER.log('Unit export failed', error);
      await OBR.notification.show(t('card.couldNotCopyUnitData'), 'ERROR');
    }
  };

  const handleImportModalClose = () => {
    setIsImportModalOpen(false);
    setImportError(null);
    setImportText('');
  };

  const applyImportedMetadataToActiveCard = async (extensionMetadata: Record<string, unknown>) => {
    if (isGroupEditMode) {
      setGroupEditDraftMetadata(extensionMetadata);
      // Force a renderer remount so uncontrolled inputs pick up imported draft values.
      setGroupEditImportRenderVersion((previous) => previous + 1);
      setIsFavoriteEnabled(false);
      return;
    }

    await replaceUnitExtensionMetadata(extensionMetadata);
    setIsFavoriteEnabled(false);
  };

  const parseImportPayload = (raw: string): Record<string, unknown> => {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error(t('card.importDataMustBeJsonObject'));
    }

    const maybePayload = parsed as Partial<UnitMetadataTransferPayload>;
    const rawMetadata = maybePayload.metadata && typeof maybePayload.metadata === 'object'
      ? maybePayload.metadata
      : parsed;

    if (!rawMetadata || typeof rawMetadata !== 'object' || Array.isArray(rawMetadata)) {
      throw new Error(t('card.importDataMustIncludeMetadata'));
    }

    const extensionMetadata = filterExtensionMetadata(rawMetadata as Record<string, unknown>);
    const importedName = extensionMetadata[UnitConstants.UNIT_NAME];
    const safeName = typeof importedName === 'string' ? importedName.trim() : '';

    if (!safeName) {
      throw new Error(t('card.importedMetadataMissingName'));
    }

    return extensionMetadata;
  };

  const handleImportModalApply = async () => {
    if (!isGroupEditMode) {
      const liveUnitItem = await getSelectedUnitItemFromScene();
      if (!liveUnitItem) {
        setImportError(t('card.noUnitSelectedToImportInto'));
        return;
      }
    }

    const raw = importText.trim();
    if (!raw) {
      setImportError(t('card.pasteJsonBeforeImport'));
      return;
    }

    try {
      const extensionMetadata = parseImportPayload(raw);
      await applyImportedMetadataToActiveCard(extensionMetadata);
      handleImportModalClose();
      await OBR.notification.show(t('card.unitDataImported'));
    } catch (error) {
      const message = error instanceof Error ? error.message : t('card.importFailed');
      setImportError(message);
    }
  };

  const getTemplateValueForAttributeType = (type: string, options?: { firstNumericBid?: string }): unknown => {
    const normalized = (type || '').trim().toLowerCase();
    if (normalized === 'numb') {
      return 0;
    }

    if (normalized === 'derived') {
      return 0;
    }

    if (normalized === 'bool') {
      return false;
    }

    if (normalized === 'enum') {
      return '';
    }

    if (normalized === 'resource') {
      return {
        current: 0,
        max: 0,
      };
    }

    if (normalized === 'list') {
      const bidRef = options?.firstNumericBid ? `@${options.firstNumericBid}` : '@BID';
      return [
        {
          id: 'example-list-001',
          name: t('card.aiExampleListEntryName'),
          description: t('card.aiExampleListEntryDescription', { bidRef }),
        },
      ];
    }

    return '';
  };

  const buildAiImportTemplate = (): string => {
    const firstNumericAttributeBid = attributes.find((attribute) => attribute.attr_type === 'numb')?.attr_bid;
    const listAttribute = attributes.find((attribute) => attribute.attr_type === 'list') || null;

    const attributeDictionary = attributes.map((attribute) => {
      return {
        bid: attribute.attr_bid,
        name: attribute.attr_name,
        type: attribute.attr_type,
        metadataKey: `${OwlbearIds.EXTENSIONID}/${attribute.attr_bid}`,
      };
    });

    const exampleMetadata: Record<string, unknown> = {
      [UnitConstants.UNIT_NAME]: t('card.aiExampleUnitName'),
    };

    for (const attribute of attributes) {
      exampleMetadata[`${OwlbearIds.EXTENSIONID}/${attribute.attr_bid}`] = getTemplateValueForAttributeType(attribute.attr_type, {
        firstNumericBid: firstNumericAttributeBid,
      });
    }

    const listEntryExample = {
      id: 'example-list-001',
      name: t('card.aiExampleActionName'),
      description: t('card.aiExampleActionDescription', { bidRef: firstNumericAttributeBid ? `@${firstNumericAttributeBid}` : '@BID' }),
    };

    const itemListEntryExample = {
      id: 'example-item-001',
      name: t('card.aiExampleItemName'),
      description: t('card.aiExampleItemDescription'),
      inUse: false,
    };

    const dictionaryJson = JSON.stringify(attributeDictionary, null, 2);
    const exampleMetadataJson = JSON.stringify(exampleMetadata, null, 2);
    const listEntryExampleJson = JSON.stringify(listEntryExample, null, 2);
    const itemListEntryExampleJson = JSON.stringify(itemListEntryExample, null, 2);
    const listKeyHint = listAttribute
      ? `${OwlbearIds.EXTENSIONID}/${listAttribute.attr_bid}`
      : `${OwlbearIds.EXTENSIONID}/<LIST_BID>`;

    return [
      t('card.aiPromptIntro'),
      '',
      t('card.aiPromptRequirementsHeader'),
      t('card.aiRequirement1'),
      t('card.aiRequirement2'),
      t('card.aiRequirement3'),
      t('card.aiRequirement4'),
      t('card.aiRequirement5'),
      t('card.aiRequirement6'),
      '',
      t('card.aiExtensionIdLabel', { value: OwlbearIds.EXTENSIONID }),
      t('card.aiUnitNameMetadataLabel', { value: UnitConstants.UNIT_NAME }),
      '',
      t('card.aiAttributeDictionaryHeader'),
      dictionaryJson,
      '',
      t('card.aiListExamplesHeader'),
      t('card.aiStandardListEntryHeader'),
      listEntryExampleJson,
      '',
      t('card.aiItemListEntryHeader'),
      itemListEntryExampleJson,
      '',
      t('card.aiListKeyHint', { key: listKeyHint }),
      '',
      t('card.aiOutputShapeHeader'),
      exampleMetadataJson,
      '',
      t('card.aiFinalInstruction'),
    ].join('\n');
  };

  const handleCopyAiTemplate = async () => {
    try {
      const template = buildAiImportTemplate();
      await navigator.clipboard.writeText(template);
      await OBR.notification.show(t('card.aiTemplateCopied'));
    } catch (error) {
      LOGGER.log('AI template copy failed', error);
      await OBR.notification.show(t('card.aiTemplateCopyFailed'), 'ERROR');
    }
  };

  const handleTraySearchClick = () => {
    const query = trayQuery.trim();
    setAppliedSearchQuery(query);
    if (!query) {
      setRemoteCollectionRecords([]);
      return;
    }

    const runSearch = async () => {
      if (!authHydrated) {
        await hydrateAuthFromSession();
        setAuthHydrated(true);
      }

      const records = await searchSupabaseCollection(query);
      setRemoteCollectionRecords(records);
    };

    runSearch()
      .catch(async (error) => {
        LOGGER.log('Supabase collection search failed', error);
        setRemoteCollectionRecords([]);
        await OBR.notification.show(t('card.onlineSearchFailed'), 'ERROR');
      });
  };

  const handleCollectionRecordImport = async (record: CollectionSearchRecord) => {
    if (!unitItem && !isGroupEditMode) {
      await OBR.notification.show(t('card.noUnitSelectedToImportInto'), 'ERROR');
      return;
    }

    try {
      await applyImportedMetadataToActiveCard(record.metadata);
      await OBR.notification.show(record.source !== 'local'
        ? t('card.recordImportedOnline', { name: record.name })
        : t('card.recordImportedLocal', { name: record.name }));
    } catch (error) {
      LOGGER.log('Collection record import failed', error);
      await OBR.notification.show(t('card.recordImportFailed'), 'ERROR');
    }
  };

  const handleCollectionRecordDelete = async (record: CollectionSearchRecord) => {
    try {
      if (record.source === 'remote-user') {
        const remoteCollectionModule = await loadRemoteCollectionModule();
        await remoteCollectionModule.deleteRemoteUnitCollectionRecord(record.id);
        setRemoteCollectionRecords((previous) =>
          previous.filter((entry) => !(entry.source === 'remote-user' && entry.id === record.id)),
        );
      } else if (record.source === 'local') {
        await deleteUnitCollectionRecord(record.id);
        setCollectionRecords((previous) => previous.filter((entry) => entry.id !== record.id));
      } else {
        return;
      }
      await OBR.notification.show(t('card.recordDeleted', { name: record.name }));
    } catch (error) {
      LOGGER.log('Collection record delete failed', error);
      await OBR.notification.show(t('card.recordDeleteFailed'), 'ERROR');
    }
  };

  useEffect(() => {
    if (!isTrayOpen) {
      return;
    }

    loadCollectionRecords().catch((error) => {
      LOGGER.log('Failed to load collection records', error);
    });
  }, [isTrayOpen]);

  useEffect(() => {
    if (!isGroupSaveFlashing) {
      return;
    }

    const flashTimer = window.setTimeout(() => {
      setIsGroupSaveFlashing(false);
    }, 650);

    return () => {
      window.clearTimeout(flashTimer);
    };
  }, [isGroupSaveFlashing]);

  useEffect(() => {
    if (!isGroupSaveCoolingDown) {
      return;
    }

    const cooldownTimer = window.setTimeout(() => {
      setIsGroupSaveCoolingDown(false);
    }, 900);

    return () => {
      window.clearTimeout(cooldownTimer);
    };
  }, [isGroupSaveCoolingDown]);

  useEffect(() => {
    if (!isTrayOpen) {
      return;
    }

    setAppliedSearchQuery('');
    setTrayQuery('');
    setRemoteCollectionRecords([]);
  }, [isTrayOpen]);

  const hasGroupEditChanges = useMemo(() => {
    return Object.keys(groupEditDraftMetadata).length > 0;
  }, [groupEditDraftMetadata]);

  const handleGroupEditSave = async () => {
    if (!isGroupEditMode || !hasGroupEditChanges || isGroupSaveCoolingDown) {
      return;
    }

    const idsToUpdate = initialSelectedUnitIds.filter((id) => cache.items.some((item) => item.id === id));
    if (idsToUpdate.length === 0) {
      await OBR.notification.show(t('card.unitNotFound'), 'ERROR');
      return;
    }

    const updates = groupEditDraftMetadata;

    await OBR.scene.items.updateItems(idsToUpdate, (itemsToUpdate) => {
      for (const item of itemsToUpdate) {
        const metadata: Record<string, unknown> = { ...(item.metadata || {}) };
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined) {
            delete metadata[key];
          } else {
            metadata[key] = value;
          }
        });
        item.metadata = metadata;
      }
    });

    setCache((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (!idsToUpdate.includes(item.id)) {
          return item;
        }

        const metadata: Record<string, unknown> = { ...(item.metadata || {}) };
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined) {
            delete metadata[key];
          } else {
            metadata[key] = value;
          }
        });

        return {
          ...item,
          metadata,
        };
      }),
    }));

    setGroupEditDraftMetadata({});
    setIsGroupSaveFlashing(true);
    setIsGroupSaveCoolingDown(true);
    await OBR.notification.show('Group edits saved.');
  };

  return (
    <Root $theme={theme}>
      <ContentViewport $theme={theme}>
        <FloatingCardControls>
          <CardControls>
            {isGroupEditMode ? (
              <GroupEditLabel>Group-Edit</GroupEditLabel>
            ) : (
              <UnitSelect
                $theme={theme}
                aria-label={t('card.chooseUnitAria')}
                value=""
                onChange={(event) => {
                  const nextUnitId = event.target.value;
                  if (!nextUnitId) {
                    return;
                  }

                  setSelectedUnitId(nextUnitId);
                }}
              >
                <option value="">{t('card.chooseUnitOption')}</option>
                {selectableUnits.map((unit) => (
                  <option key={unit.id} value={unit.id}>{unit.name}</option>
                ))}
              </UnitSelect>
            )}
            {isGroupEditMode ? (
              <SaveButton
                type="button"
                $theme={theme}
                $flash={isGroupSaveFlashing}
                aria-label="Save group edits"
                disabled={!hasGroupEditChanges || isGroupSaveCoolingDown}
                onClick={() => {
                  trackCardAction('card_group_save_clicked', {
                    has_changes: hasGroupEditChanges,
                  });
                  void handleGroupEditSave();
                }}
              >
                <Save size={16} />
              </SaveButton>
            ) : null}
            <CloseButton
              type="button"
              $theme={theme}
              aria-label={t('card.closeCardAria')}
              onClick={async () => {
                await OBR.popover.close(isPinned ? PINNED_CARD_POPOVER_ID : OwlbearIds.CARDSID);
              }}
            >
              <CloseIcon src="/close.svg" alt="" aria-hidden="true" />
            </CloseButton>
          </CardControls>
        </FloatingCardControls>

        {!isReady ? (
          <Message $theme={theme}>{t('card.loading')}</Message>
        ) : !selectedUnitId ? (
          <Message $theme={theme}>{t('card.noUnitId')}</Message>
        ) : !unitItem ? (
          <Message $theme={theme}>{t('card.unitNotFound')}</Message>
        ) : (
          <CardLayoutRenderer
            key={isGroupEditMode ? `group-import-${groupEditImportRenderVersion}` : `single-${selectedUnitId || 'none'}`}
            systemTheme={theme}
            backgroundUrl={theme.background_url}
            cardLayout={cardLayout}
            attributes={attributes}
            unitItem={unitItem}
            onUpdateMetadata={updateUnitMetadata}
          />
        )}
      </ContentViewport>

      <TrayOverlay $theme={theme} $open={isTrayOpen}>
        <TrayPeekActions>
          <TrayActionGroup>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label={t('card.pinAria')}
              onClick={() => {
                void handleTrayPinClick();
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.pinTooltip')}>
                <Pin size={16} />
              </SettingsTooltip>
            </TrayActionButton>
            <FavoriteActionButton
              type="button"
              $theme={theme}
              $active={isFavoriteEnabled}
              aria-label={t('card.favoriteAria')}
              disabled={!isCurrentUserGm}
              onClick={() => {
                trackCardAction('card_favorite_clicked', {
                  enabled: !isFavoriteEnabled,
                });
                handleTrayFavoriteClick();
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.favoriteTooltip')}>
                <Star size={16} fill={isFavoriteEnabled ? 'currentColor' : 'none'} />
              </SettingsTooltip>
            </FavoriteActionButton>

            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label={t('card.collectionSaveAria')}
              disabled={!isCurrentUserGm}
              onClick={() => {
                trackCardAction('card_collection_saved', {
                  favorite: isFavoriteEnabled,
                  premium: isPremiumAuthorized(),
                });
                void handleTrayCollectionSaveClick();
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.collectionSaveTooltip')}>
                <BookMarked size={16} />
              </SettingsTooltip>
            </TrayActionButton>
          </TrayActionGroup>

          <TrayActionGroup>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label={t('card.importAria')}
              onClick={() => {
                trackCardAction('card_import_clicked', {
                  group_edit: isGroupEditMode,
                });
                void handleTrayImportClick();
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.importTooltip')}>
                <Download size={16} />
              </SettingsTooltip>
            </TrayActionButton>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label={t('card.exportAria')}
              onClick={() => {
                trackCardAction('card_export_clicked', {
                  group_edit: isGroupEditMode,
                });
                void handleTrayExportClick();
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.exportTooltip')}>
                <Upload size={16} />
              </SettingsTooltip>
            </TrayActionButton>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label={t('card.helpAria')}
              onClick={() => {
                trackCardAction('card_help_clicked', {
                  tray_open: isTrayOpen,
                });
                setIsHelpModalOpen(true);
              }}
            >
              <SettingsTooltip theme={tooltipTheme} text={t('card.helpTooltip')}>
                <CircleQuestionMark size={16} />
              </SettingsTooltip>
            </TrayActionButton>
          </TrayActionGroup>
        </TrayPeekActions>

        <TrayHandleBuffer $theme={theme}>
          <SettingsTooltip theme={tooltipTheme} text={isTrayOpen ? t('card.closeTrayTooltip') : t('card.openTrayTooltip')}>
            <TrayHandleButton
              type="button"
              $theme={theme}
              aria-label={isTrayOpen ? t('card.closeTrayAria') : t('card.openTrayAria')}
              onClick={() => {
                trackCardAction('card_open_collection_clicked', {
                  open: !isTrayOpen,
                });
                setIsTrayOpen((prev) => !prev);
              }}
            >
              <Menu size={22} />
            </TrayHandleButton>
          </SettingsTooltip>
        </TrayHandleBuffer>
        <TrayBody $theme={theme}>
          {isTrayOpen ? (
            <>
              <SearchWindow $theme={theme}>
                <CollectionList>
                  {visibleCollectionRecords.length === 0 ? (
                    <Message $theme={theme}>{t('card.noCollectionRecords')}</Message>
                  ) : visibleCollectionRecords.map((record) => (
                    <CollectionRow key={`${record.source}:${record.id}`} $theme={theme}>
                      <CollectionInfo>
                        <CollectionNameRow $theme={theme}>
                          {record.favorite ? <FavoriteMark>❤</FavoriteMark> : null}
                          <CollectionNameText>{record.name}</CollectionNameText>
                        </CollectionNameRow>
                        <CollectionAuthorRow>
                          <span>→</span>
                          <AuthorName $color={getAuthorColorByInitial(record.author)}>
                            {record.author}
                          </AuthorName>
                          <SourceTag
                            $theme={theme}
                            title={record.source === 'local' ? t('card.localSource') : (record.source === 'remote-user' ? t('card.myCloudSource') : t('card.sharedSource'))}
                          >
                            {record.source === 'local' ? <Save size={11} /> : null}
                            {record.source === 'remote-user' ? <Cloudy size={11} /> : null}
                            {record.source === 'remote-shared' ? <Server size={11} /> : null}
                          </SourceTag>
                        </CollectionAuthorRow>
                      </CollectionInfo>
                      <CollectionActions>
                        <CollectionActionButton
                          type="button"
                          $theme={theme}
                          $variant="import"
                          onClick={() => {
                            handleCollectionRecordImport(record);
                          }}
                        >
                          {t('card.importAction')}
                        </CollectionActionButton>
                        {record.source !== 'remote-shared' ? (
                          <CollectionActionButton
                            type="button"
                            $theme={theme}
                            $variant="delete"
                            onClick={() => {
                              handleCollectionRecordDelete(record);
                            }}
                          >
                            {t('card.deleteAction')}
                          </CollectionActionButton>
                        ) : null}
                      </CollectionActions>
                    </CollectionRow>
                  ))}
                </CollectionList>
              </SearchWindow>
              <TraySearchRow>
                <TraySearchInput
                  $theme={theme}
                  type="text"
                  value={trayQuery}
                  placeholder={t('card.searchPlaceholder')}
                  onChange={(event) => {
                    setTrayQuery(event.target.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleTraySearchClick();
                    }
                  }}
                />
                <TraySearchButton
                  type="button"
                  $theme={theme}
                  aria-label={t('card.searchAria')}
                  onClick={handleTraySearchClick}
                >
                  <Search size={16} />
                </TraySearchButton>
              </TraySearchRow>
            </>
          ) : null}
        </TrayBody>
      </TrayOverlay>

      {isImportModalOpen ? (
        <>
          <LocalModalOverlay onClick={handleImportModalClose} />
          <LocalModalContainer
            $theme={theme}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <LocalModalTitle $theme={theme}>{t('card.importUnitDataTitle')}</LocalModalTitle>
            <ImportTextArea
              $theme={theme}
              value={importText}
              placeholder={t('card.importPlaceholder')}
              onChange={(event) => {
                setImportText(event.target.value);
                if (importError) {
                  setImportError(null);
                }
              }}
            />
            {importError ? <ModalErrorText $theme={theme}>{importError}</ModalErrorText> : null}
            <LocalModalActions>
              <ModalActionButtonLeft
                type="button"
                $theme={theme}
                onClick={() => {
                  void handleCopyAiTemplate();
                }}
              >
                {t('card.aiTemplate')}
              </ModalActionButtonLeft>
              <ModalActionButton
                type="button"
                $theme={theme}
                onClick={handleImportModalClose}
              >
                {t('card.cancel')}
              </ModalActionButton>
              <ModalActionButton
                type="button"
                $theme={theme}
                $variant="primary"
                onClick={handleImportModalApply}
              >
                {t('card.importAction')}
              </ModalActionButton>
            </LocalModalActions>
          </LocalModalContainer>
        </>
      ) : null}

      {isHelpModalOpen ? (
        <>
          <LocalModalOverlay onClick={() => {
            setIsHelpModalOpen(false);
          }} />
          <LocalModalContainer
            $theme={theme}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <LocalModalTitle $theme={theme}>{t('card.helpTitle')}</LocalModalTitle>
            <HelpModalContent $theme={theme}>
              <HelpSectionTitle $theme={theme}>{t('card.helpRollableValuesTitle')}</HelpSectionTitle>
              <HelpList>
                <li>{t('card.helpRollableValuesItem1')}</li>
                <li>{t('card.helpRollableValuesItem2')}</li>
                <li>{t('card.helpRollableValuesItem3')}</li>
              </HelpList>

              <HelpSectionTitle $theme={theme}>{t('card.helpDiceChipsTitle')}</HelpSectionTitle>
              <HelpList>
                <li>{t('card.helpDiceChipsItem1')}</li>
                <li>{t('card.helpDiceChipsItem2')}</li>
              </HelpList>
              <HelpCode $theme={theme}>{t('card.helpMeleeAttackExample')}</HelpCode>

              <HelpSectionTitle $theme={theme}>{t('card.helpUsingAttributesTitle')}</HelpSectionTitle>
              <HelpList>
                <li>{t('card.helpUsingAttributesItem1')}</li>
                <li>{t('card.helpUsingAttributesItem2')}</li>
              </HelpList>
              <HelpCode $theme={theme}>{t('card.helpDamageBidExample')}</HelpCode>
              <HelpCode $theme={theme}>{t('card.helpDamageNameExample')}</HelpCode>
            </HelpModalContent>
            <LocalModalActions>
              <ModalActionButton
                type="button"
                $theme={theme}
                $variant="primary"
                onClick={() => {
                  setIsHelpModalOpen(false);
                }}
              >
                {t('card.close')}
              </ModalActionButton>
            </LocalModalActions>
          </LocalModalContainer>
        </>
      ) : null}
    </Root>
  );
};

export default CardPopoverPage;
