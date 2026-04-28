import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import OBR, { type Item } from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import defaultGameSystem from './assets/defaultgamesystem.json';
import { PluginGate } from './components/PluginGateComponent';
import { DATA_STORED_IN_ROOM, OwlbearIds } from './helpers/Constants';
import { rgbaFromHex } from './helpers/ThemeConstants';
import type { SystemAttribute } from './interfaces/SystemResponse';
import { supabase } from './supabase/supabaseClient';
import {
    buildHpMetadataValue,
    getAttributeByBid,
    getConfiguredHpBidKeys,
    getHpMetadataKey,
    getHpValueFromMetadata,
} from './helpers/hpAttributeMapping';
import './styles/sub.css';

type ThemeData = {
    primary: string;
    offset: string;
    background: string;
    border: string;
    background_url?: string;
};

type CacheState = {
    sceneMetadata: Record<string, unknown>;
    roomMetadata: Record<string, unknown>;
};

const SYSTEM_KEYS = {
    SNAPSHOT_PUBLIC_ID: `${OwlbearIds.EXTENSIONID}/SnapshotPublicId`,
} as const;

const DEFAULT_THEME: ThemeData = {
    primary: defaultGameSystem.theme_primary,
    offset: defaultGameSystem.theme_offset,
    background: defaultGameSystem.theme_background,
    border: defaultGameSystem.theme_border,
    background_url: defaultGameSystem.background_url,
};

const Root = styled.div<{ $theme: ThemeData }>`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${props => rgbaFromHex(props.$theme.background, 0.3)};
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`;

const FieldRow = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`;

const Label = styled.label<{ $theme: ThemeData }>`
  color: ${props => props.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Input = styled.input<{ $theme: ThemeData }>`
  width: 80px;
  border: 2px solid ${props => props.$theme.border};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  box-sizing: border-box;
  color: ${props => props.$theme.primary};
  background: ${props => rgbaFromHex(props.$theme.background, 0.7)};

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.offset};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const getStorageValue = (cache: CacheState): Record<string, unknown> => {
    return DATA_STORED_IN_ROOM ? cache.roomMetadata : cache.sceneMetadata;
};

const normalizeNumberInput = (value: string): string | null => {
    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }

    const parsed = Number(trimmed);
    if (!Number.isFinite(parsed)) {
        return null;
    }

    return String(parsed);
};

const parseSystemArrayField = <T,>(value: unknown): T[] | null => {
    if (Array.isArray(value)) {
        return value as T[];
    }

    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed as T[] : null;
        } catch {
            return null;
        }
    }

    return null;
};

const getMetadataNumericValue = (item: Item | null, bid: string, attributes: SystemAttribute[], part: 'current' | 'max'): string => {
    if (!item) {
        return '';
    }

    const raw = getHpValueFromMetadata(item.metadata, bid, attributes, part);
    if (raw === null) {
        return '';
    }

    return String(raw);
};

const ContextMenuHpEditor = () => {
    const [cache, setCache] = useState<CacheState>({ sceneMetadata: {}, roomMetadata: {} });
    const [snapshotTheme, setSnapshotTheme] = useState<ThemeData | null>(null);
    const [systemAttributes, setSystemAttributes] = useState<SystemAttribute[]>(defaultGameSystem.attributes as SystemAttribute[]);
    const [selectedItemId, setSelectedItemId] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [currentHp, setCurrentHp] = useState('');
    const [maxHp, setMaxHp] = useState('');

    const storage = useMemo(() => getStorageValue(cache), [cache]);

    const theme = useMemo(() => {
        if (snapshotTheme) {
            return snapshotTheme;
        }

        return DEFAULT_THEME;
    }, [snapshotTheme]);

    const { currentHpBid, maxHpBid } = useMemo(() => {
        return getConfiguredHpBidKeys(storage, systemAttributes);
    }, [storage, systemAttributes]);

    useEffect(() => {
        let mounted = true;

        const loadSnapshotTheme = async (roomMetadata: Record<string, unknown>) => {
            const snapshotId = roomMetadata[SYSTEM_KEYS.SNAPSHOT_PUBLIC_ID];
            if (typeof snapshotId !== 'string' || snapshotId.trim().length === 0) {
                if (mounted) {
                    setSnapshotTheme(null);
                    setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
                }
                return;
            }

            const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
                p_snapshot_public_id: snapshotId,
            });

            if (error) {
                if (mounted) {
                    setSnapshotTheme(null);
                    setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
                }
                return;
            }

            const snapshot = Array.isArray(data) ? data[0] : data;
            if (!snapshot || typeof snapshot !== 'object') {
                if (mounted) {
                    setSnapshotTheme(null);
                    setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
                }
                return;
            }

            const parsed = snapshot as Partial<{
                theme_primary: string;
                theme_offset: string;
                theme_background: string;
                theme_border: string;
                background_url: string;
                attributes: unknown;
            }>;

            const parsedAttributes = parseSystemArrayField<SystemAttribute>(parsed.attributes);

            if (
                typeof parsed.theme_primary !== 'string'
                || typeof parsed.theme_offset !== 'string'
                || typeof parsed.theme_background !== 'string'
                || typeof parsed.theme_border !== 'string'
                || !Array.isArray(parsedAttributes)
            ) {
                if (mounted) {
                    setSnapshotTheme(null);
                    setSystemAttributes(defaultGameSystem.attributes as SystemAttribute[]);
                }
                return;
            }

            if (mounted) {
                setSnapshotTheme({
                    primary: parsed.theme_primary,
                    offset: parsed.theme_offset,
                    background: parsed.theme_background,
                    border: parsed.theme_border,
                    background_url: typeof parsed.background_url === 'string' ? parsed.background_url : '',
                });
                setSystemAttributes(parsedAttributes);
            }
        };

        const setSelection = async (selection: string[] | undefined) => {
            const nextId = selection?.[0] || '';
            if (!nextId) {
                if (!mounted) return;
                setSelectedItemId('');
                setSelectedItem(null);
                return;
            }

            const items = await OBR.scene.items.getItems(selection || []);
            const nextItem = items.find((item) => item.id === nextId) || items[0] || null;

            if (!mounted) {
                return;
            }

            setSelectedItemId(nextId);
            setSelectedItem(nextItem);
        };

        const initialize = async () => {
            const [sceneMetadata, roomMetadata, selection] = await Promise.all([
                OBR.scene.getMetadata(),
                OBR.room.getMetadata(),
                OBR.player.getSelection(),
            ]);

            if (!mounted) {
                return;
            }

            setCache({ sceneMetadata, roomMetadata });
            await loadSnapshotTheme(roomMetadata);
            await setSelection(selection);
        };

        initialize();

        const unsubscribeSceneMetadata = OBR.scene.onMetadataChange((sceneMetadata) => {
            if (!mounted) return;
            setCache((prev) => ({ ...prev, sceneMetadata }));
        });

        const unsubscribeRoomMetadata = OBR.room.onMetadataChange((roomMetadata) => {
            if (!mounted) return;
            setCache((prev) => ({ ...prev, roomMetadata }));
            void loadSnapshotTheme(roomMetadata);
        });

        const unsubscribeItems = OBR.scene.items.onChange((items) => {
            if (!mounted || !selectedItemId) return;
            const nextItem = items.find((item) => item.id === selectedItemId) || null;
            setSelectedItem(nextItem);
        });

        const unsubscribePlayer = OBR.player.onChange((player) => {
            setSelection(player.selection);
        });

        return () => {
            mounted = false;
            unsubscribeSceneMetadata();
            unsubscribeRoomMetadata();
            unsubscribeItems();
            unsubscribePlayer();
        };
    }, [selectedItemId]);

    useEffect(() => {
        setCurrentHp(getMetadataNumericValue(selectedItem, currentHpBid, systemAttributes, 'current'));
        setMaxHp(getMetadataNumericValue(selectedItem, maxHpBid, systemAttributes, 'max'));
    }, [selectedItem, currentHpBid, maxHpBid, systemAttributes]);

    const commitValue = async (bid: string, draftValue: string, part: 'current' | 'max') => {
        if (!selectedItem) {
            return;
        }

        const normalized = normalizeNumberInput(draftValue);
        if (normalized === null) {
            const fallback = getMetadataNumericValue(selectedItem, bid, systemAttributes, part);
            if (bid === currentHpBid) {
                setCurrentHp(fallback);
            } else {
                setMaxHp(fallback);
            }
            return;
        }

        await OBR.scene.items.updateItems([selectedItem], (items) => {
            const item = items[0];
            if (!item) {
                return;
            }

            const attribute = getAttributeByBid(systemAttributes, bid);
            const metadataKey = getHpMetadataKey(bid);
            const otherPart = part === 'current' ? 'max' : 'current';
            const fallbackOtherValue = getHpValueFromMetadata(item.metadata, bid, systemAttributes, otherPart);

            item.metadata[metadataKey] = buildHpMetadataValue(
                item.metadata[metadataKey],
                attribute,
                part,
                Number(normalized),
                fallbackOtherValue
            );
        });
    };

    const hasSelectedItem = !!selectedItem;

    return (
        <Root $theme={theme}>
            <FieldRow>
                <Field>
                    <Label $theme={theme} htmlFor="forge-context-health">Health</Label>
                    <Input
                        $theme={theme}
                        id="forge-context-health"
                        type="number"
                        value={currentHp}
                        disabled={!hasSelectedItem}
                        onChange={(event) => setCurrentHp(event.target.value)}
                        onBlur={() => { void commitValue(currentHpBid, currentHp, 'current'); }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.currentTarget.blur();
                            }
                        }}
                    />
                </Field>
                <Field>
                    <Label $theme={theme} htmlFor="forge-context-max-health">Max Health</Label>
                    <Input
                        $theme={theme}
                        id="forge-context-max-health"
                        type="number"
                        value={maxHp}
                        disabled={!hasSelectedItem}
                        onChange={(event) => setMaxHp(event.target.value)}
                        onBlur={() => { void commitValue(maxHpBid, maxHp, 'max'); }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.currentTarget.blur();
                            }
                        }}
                    />
                </Field>
            </FieldRow>
        </Root>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PluginGate>
            <ContextMenuHpEditor />
        </PluginGate>
    </React.StrictMode>
);