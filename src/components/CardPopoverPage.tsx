import { useEffect, useMemo, useState } from 'react';
import type { Item } from '@owlbear-rodeo/sdk';
import OBR from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import { Menu, Search } from 'lucide-react';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import LOGGER from '../helpers/Logger';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { CardLayoutRenderer, type CardLayoutTheme } from './CardLayoutRenderer';
import {
  deleteUnitCollectionRecord,
  filterExtensionMetadata,
  getAllUnitCollectionRecords,
  type UnitCollectionRecord,
  upsertUnitFromMetadata,
} from '../helpers/unitCollectionDb';
import type { CardLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

const SYSTEM_KEYS = {
  CURRENT_THEME: `${OwlbearIds.EXTENSIONID}/CurrentTheme`,
  CURRENT_CARD: `${OwlbearIds.EXTENSIONID}/CurrentCard`,
  CURRENT_ATTR: `${OwlbearIds.EXTENSIONID}/CurrentAttr`,
} as const;

type CardCache = {
  metadata: Record<string, unknown>;
  items: Item[];
};

type UnitMetadataTransferPayload = {
  name: string;
  author: string;
  metadata: Record<string, unknown>;
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
  background-color: ${props => rgbaFromHex(props.$theme.background, 0.5)};
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

const ContentViewport = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Message = styled.p<{ $theme: ThemeData }>`
  margin: 0;
  color: ${props => props.$theme.primary};
  text-align: center;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }
`;

const FavoriteActionButton = styled(TrayActionButton)<{ $active: boolean; $theme: ThemeData }>`
  background: ${props => props.$active
    ? rgbaFromHex(props.$theme.offset, 0.45)
    : rgbaFromHex(props.$theme.background, 0.9)};
`;

const TrayActionIcon = styled.img<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${props => props.$active
    ? 'brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)'
    : 'none'};
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

const ModalErrorText = styled.div<{ $theme: ThemeData }>`
  margin-top: 8px;
  color: ${props => rgbaFromHex(props.$theme.offset, 0.95)};
  font-size: 12px;
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
  min-width: 340px;
  max-width: 560px;
  width: min(560px, calc(100vw - 32px));
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
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

const readUnitIdFromQuery = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('unitid');
  if (!raw) {
    return null;
  }

  const first = raw.split(',')[0]?.trim();
  return first || null;
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
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(() => readUnitIdFromQuery());
  const [cache, setCache] = useState<CardCache>({ metadata: {}, items: [] });
  const [isReady, setIsReady] = useState(false);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [trayQuery, setTrayQuery] = useState('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
  const [isFavoriteEnabled, setIsFavoriteEnabled] = useState(false);
  const [collectionRecords, setCollectionRecords] = useState<UnitCollectionRecord[]>([]);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);

  const syncLoggerEnabled = (metadata: Record<string, unknown>) => {
    const enabled = metadata[SettingsConstants.ENABLE_CONSOLE_LOG];
    if (typeof enabled === 'boolean') {
      LOGGER.setEnabled(enabled);
    }
  };

  const cardLayout = useMemo(() => {
    const fromMetadata = parseSystemArrayField<CardLayoutComponent>(cache.metadata[SYSTEM_KEYS.CURRENT_CARD]);
    return fromMetadata || (defaultGameSystem.card_layout as CardLayoutComponent[]);
  }, [cache.metadata]);

  const attributes = useMemo(() => {
    const fromMetadata = parseSystemArrayField<SystemAttribute>(cache.metadata[SYSTEM_KEYS.CURRENT_ATTR]);
    return fromMetadata || (defaultGameSystem.attributes as SystemAttribute[]);
  }, [cache.metadata]);

  const theme = useMemo(() => {
    const currentTheme = cache.metadata[SYSTEM_KEYS.CURRENT_THEME] as ThemeData | undefined;
    if (!currentTheme?.primary || !currentTheme?.offset || !currentTheme?.background || !currentTheme?.border) {
      return DEFAULT_THEME;
    }

    return currentTheme;
  }, [cache.metadata]);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      const [metadata, items, roomMetadata] = await Promise.all([
        OBR.scene.getMetadata(),
        OBR.scene.items.getItems(),
        OBR.room.getMetadata(),
      ]);

      if (!isMounted) {
        return;
      }

      syncLoggerEnabled(DATA_STORED_IN_ROOM ? roomMetadata : metadata);

      setCache({ metadata, items });
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

    const textName = (item as any).text?.plainText;
    if (typeof textName === 'string' && textName.trim()) {
      return textName;
    }

    if (typeof item.name === 'string' && item.name.trim()) {
      return item.name;
    }

    return 'Unknown';
  };

  const selectableUnits = useMemo(() => {
    return cache.items
      .filter((item) => isFabricatedTrue(item.metadata?.[UnitConstants.FABRICATED]))
      .filter((item) => item.id !== selectedUnitId)
      .map((item) => ({
        id: item.id,
        name: getUnitDisplayName(item),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [cache.items, selectedUnitId]);

  const unitItem = useMemo(() => {
    if (!selectedUnitId) {
      return null;
    }

    return cache.items.find((item) => item.id === selectedUnitId) || null;
  }, [cache.items, selectedUnitId]);

  const updateUnitMetadata = async (updates: Record<string, unknown>) => {
    if (!unitItem) {
      return;
    }

    await OBR.scene.items.updateItems([unitItem.id], (itemsToUpdate) => {
      const metadata = { ...itemsToUpdate[0].metadata };
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined) {
          delete (metadata as any)[key];
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

        const metadata = { ...item.metadata };
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined) {
            delete (metadata as any)[key];
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

    await OBR.scene.items.updateItems([unitItem.id], (itemsToUpdate) => {
      const currentMetadata = itemsToUpdate[0].metadata as Record<string, unknown>;
      const nonExtensionMetadata: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(currentMetadata)) {
        if (!key.startsWith(`${OwlbearIds.EXTENSIONID}/`)) {
          nonExtensionMetadata[key] = value;
        }
      }

      itemsToUpdate[0].metadata = {
        ...nonExtensionMetadata,
        ...nextMetadata,
      };
    });

    setCache((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id !== unitItem.id) {
          return item;
        }

        const nonExtensionMetadata: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(item.metadata || {})) {
          if (!key.startsWith(`${OwlbearIds.EXTENSIONID}/`)) {
            nonExtensionMetadata[key] = value;
          }
        }

        return {
          ...item,
          metadata: {
            ...nonExtensionMetadata,
            ...nextMetadata,
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

  const visibleCollectionRecords = useMemo(() => {
    const query = appliedSearchQuery.trim().toLowerCase();
    const sorted = [...collectionRecords].sort((left, right) => {
      if (left.favorite !== right.favorite) {
        return left.favorite ? -1 : 1;
      }
      return left.name.localeCompare(right.name);
    });

    if (!query) {
      return sorted.filter((record) => record.favorite);
    }

    return sorted.filter((record) =>
      record.name.toLowerCase().includes(query)
      || record.author.toLowerCase().includes(query),
    );
  }, [collectionRecords, appliedSearchQuery]);

  const handleTrayPinClick = () => {
    LOGGER.log('Tray action clicked: pin');
  };

  const handleTrayFavoriteClick = () => {
    setIsFavoriteEnabled((previous) => !previous);
  };

  const handleTrayCollectionSaveClick = async () => {
    if (!unitItem) {
      await OBR.notification.show('No unit selected to save.', 'ERROR');
      return;
    }

    try {
      const authorName = (await OBR.player.getName()).trim();
      const status = await upsertUnitFromMetadata(
        unitItem.metadata as Record<string, unknown>,
        authorName,
        isFavoriteEnabled,
      );
      await loadCollectionRecords();
      await OBR.notification.show(status === 'created' ? 'Unit saved to Collection.' : 'Unit updated in Collection.');
    } catch (error) {
      LOGGER.log('Collection save failed', error);
      await OBR.notification.show('Could not save this unit to Collection.', 'ERROR');
    }
  };

  const handleTrayImportClick = () => {
    if (!unitItem) {
      OBR.notification.show('No unit selected to import into.', "ERROR");
      return;
    }

    setImportError(null);
    setImportText('');
    setIsImportModalOpen(true);
  };

  const handleTrayExportClick = async () => {
    if (!unitItem) {
      await OBR.notification.show('No unit selected to export.', "ERROR");
      return;
    }

    try {
      const extensionMetadata = filterExtensionMetadata(unitItem.metadata as Record<string, unknown>);
      const unitNameRaw = extensionMetadata[UnitConstants.UNIT_NAME];
      const unitName = typeof unitNameRaw === 'string' ? unitNameRaw.trim() : '';

      if (!unitName) {
        await OBR.notification.show('Current unit has no valid unit name to export.', "ERROR");
        return;
      }

      const author = (await OBR.player.getName()).trim() || 'Unknown';
      const payload: UnitMetadataTransferPayload = {
        name: unitName,
        author,
        metadata: extensionMetadata,
      };

      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      await OBR.notification.show('Unit data copied to clipboard.');
    } catch (error) {
      LOGGER.log('Unit export failed', error);
      await OBR.notification.show('Could not copy unit data to clipboard.', "ERROR");
    }
  };

  const handleImportModalClose = () => {
    setIsImportModalOpen(false);
    setImportError(null);
    setImportText('');
  };

  const parseImportPayload = (raw: string): Record<string, unknown> => {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('Import data must be a JSON object.');
    }

    const maybePayload = parsed as Partial<UnitMetadataTransferPayload>;
    const rawMetadata = maybePayload.metadata && typeof maybePayload.metadata === 'object'
      ? maybePayload.metadata
      : parsed;

    if (!rawMetadata || typeof rawMetadata !== 'object' || Array.isArray(rawMetadata)) {
      throw new Error('Import data must include a metadata object.');
    }

    const extensionMetadata = filterExtensionMetadata(rawMetadata as Record<string, unknown>);
    const importedName = extensionMetadata[UnitConstants.UNIT_NAME];
    const safeName = typeof importedName === 'string' ? importedName.trim() : '';

    if (!safeName) {
      throw new Error('Imported metadata must include a valid unit name.');
    }

    return extensionMetadata;
  };

  const handleImportModalApply = async () => {
    if (!unitItem) {
      setImportError('No unit selected to import into.');
      return;
    }

    const raw = importText.trim();
    if (!raw) {
      setImportError('Paste JSON data before importing.');
      return;
    }

    try {
      const extensionMetadata = parseImportPayload(raw);
      await replaceUnitExtensionMetadata(extensionMetadata);
      setIsFavoriteEnabled(false);
      handleImportModalClose();
      await OBR.notification.show('Unit data imported successfully.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Import failed.';
      setImportError(message);
    }
  };

  const handleTraySearchClick = () => {
    const query = trayQuery.trim();
    setAppliedSearchQuery(query);
  };

  const handleCollectionRecordImport = async (record: UnitCollectionRecord) => {
    if (!unitItem) {
      await OBR.notification.show('No unit selected to import into.', 'ERROR');
      return;
    }

    try {
      await replaceUnitExtensionMetadata(record.metadata);
      setIsFavoriteEnabled(false);
      await OBR.notification.show(`Imported ${record.name}.`);
    } catch (error) {
      LOGGER.log('Collection record import failed', error);
      await OBR.notification.show('Could not import collection record.', 'ERROR');
    }
  };

  const handleCollectionRecordDelete = async (record: UnitCollectionRecord) => {
    try {
      await deleteUnitCollectionRecord(record.id);
      await loadCollectionRecords();
      await OBR.notification.show(`Deleted ${record.name} from Collection.`);
    } catch (error) {
      LOGGER.log('Collection record delete failed', error);
      await OBR.notification.show('Could not delete collection record.', 'ERROR');
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
    if (!isTrayOpen) {
      return;
    }

    setAppliedSearchQuery('');
    setTrayQuery('');
  }, [isTrayOpen]);

  return (
    <Root $theme={theme}>
      <ContentViewport>
        {!isReady ? (
          <Message $theme={theme}>Loading card…</Message>
        ) : !selectedUnitId ? (
          <Message $theme={theme}>No unit id supplied in URL.</Message>
        ) : !unitItem ? (
          <Message $theme={theme}>Unit not found in current scene.</Message>
        ) : (
          <CardLayoutRenderer
            systemTheme={theme}
            backgroundUrl={theme.background_url}
            cardLayout={cardLayout}
            attributes={attributes}
            unitItem={unitItem}
            onUpdateMetadata={updateUnitMetadata}
            controlContent={(
              <CardControls>
                <UnitSelect
                  $theme={theme}
                  aria-label="Choose Unit"
                  value=""
                  onChange={(event) => {
                    const nextUnitId = event.target.value;
                    if (!nextUnitId) {
                      return;
                    }

                    setSelectedUnitId(nextUnitId);
                  }}
                >
                  <option value="">Choose Unit</option>
                  {selectableUnits.map((unit) => (
                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                  ))}
                </UnitSelect>
                <CloseButton
                  type="button"
                  $theme={theme}
                  aria-label="Close Card"
                  onClick={async () => {
                    await OBR.popover.close(OwlbearIds.CARDSID);
                  }}
                >
                  <CloseIcon src="/close.svg" alt="" aria-hidden="true" />
                </CloseButton>
              </CardControls>
            )}
          />
        )}
      </ContentViewport>

      <TrayOverlay $theme={theme} $open={isTrayOpen}>
        <TrayPeekActions>
          <TrayActionGroup>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label="Pin"
              onClick={handleTrayPinClick}
            >
              <TrayActionIcon src="/pin.svg" alt="" aria-hidden="true" />
            </TrayActionButton>
            <FavoriteActionButton
              type="button"
              $theme={theme}
              $active={isFavoriteEnabled}
              aria-label="Favorite"
              onClick={handleTrayFavoriteClick}
            >
              <TrayActionIcon $active={isFavoriteEnabled} src="/favorite.svg" alt="" aria-hidden="true" />
            </FavoriteActionButton>

            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label="CollectionSave"
              onClick={handleTrayCollectionSaveClick}
            >
              <TrayActionIcon src="/collection.svg" alt="" aria-hidden="true" />
            </TrayActionButton>
          </TrayActionGroup>

          <TrayActionGroup>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label="Import"
              onClick={handleTrayImportClick}
            >
              <TrayActionIcon src="/import.svg" alt="" aria-hidden="true" />
            </TrayActionButton>
            <TrayActionButton
              type="button"
              $theme={theme}
              aria-label="Export"
              onClick={handleTrayExportClick}
            >
              <TrayActionIcon src="/export.svg" alt="" aria-hidden="true" />
            </TrayActionButton>
          </TrayActionGroup>
        </TrayPeekActions>

        <TrayHandleBuffer $theme={theme}>
          <TrayHandleButton
            type="button"
            $theme={theme}
            aria-label={isTrayOpen ? 'Close Tray' : 'Open Tray'}
            onClick={() => {
              setIsTrayOpen((prev) => !prev);
            }}
          >
            <Menu size={22} />
          </TrayHandleButton>
        </TrayHandleBuffer>
        <TrayBody $theme={theme}>
          {isTrayOpen ? (
            <>
              <SearchWindow $theme={theme}>
                <CollectionList>
                  {visibleCollectionRecords.length === 0 ? (
                    <Message $theme={theme}>No collection records found.</Message>
                  ) : visibleCollectionRecords.map((record) => (
                    <CollectionRow key={record.id} $theme={theme}>
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
                          Import
                        </CollectionActionButton>
                        <CollectionActionButton
                          type="button"
                          $theme={theme}
                          $variant="delete"
                          onClick={() => {
                            handleCollectionRecordDelete(record);
                          }}
                        >
                          X
                        </CollectionActionButton>
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
                  placeholder="Enter query..."
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
                  aria-label="Search"
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
            <LocalModalTitle $theme={theme}>Import Unit Data</LocalModalTitle>
            <ImportTextArea
              $theme={theme}
              value={importText}
              placeholder="Paste exported unit JSON here"
              onChange={(event) => {
                setImportText(event.target.value);
                if (importError) {
                  setImportError(null);
                }
              }}
            />
            {importError ? <ModalErrorText $theme={theme}>{importError}</ModalErrorText> : null}
            <LocalModalActions>
              <ModalActionButton
                type="button"
                $theme={theme}
                onClick={handleImportModalClose}
              >
                Cancel
              </ModalActionButton>
              <ModalActionButton
                type="button"
                $theme={theme}
                $variant="primary"
                onClick={handleImportModalApply}
              >
                Import
              </ModalActionButton>
            </LocalModalActions>
          </LocalModalContainer>
        </>
      ) : null}
    </Root>
  );
};

export default CardPopoverPage;
