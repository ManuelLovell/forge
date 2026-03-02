import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import OBR, { type Item } from '@owlbear-rodeo/sdk';
import styled from 'styled-components';
import defaultGameSystem from './assets/defaultgamesystem.json';
import { PluginGate } from './components/PluginGateComponent';
import { DATA_STORED_IN_ROOM, OwlbearIds } from './helpers/Constants';
import { rgbaFromHex } from './helpers/ThemeConstants';
import { MOCK_BIDS } from './helpers/MockData';
import { SettingsConstants } from './interfaces/MetadataKeys';
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
    CURRENT_THEME: `${OwlbearIds.EXTENSIONID}/CurrentTheme`,
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

const getMetadataNumericValue = (item: Item | null, key: string): string => {
    if (!item) {
        return '';
    }

    const raw = item.metadata?.[key];
    if (raw === null || raw === undefined) {
        return '';
    }

    return String(raw);
};

const ContextMenuHpEditor = () => {
    const [cache, setCache] = useState<CacheState>({ sceneMetadata: {}, roomMetadata: {} });
    const [selectedItemId, setSelectedItemId] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [currentHp, setCurrentHp] = useState('');
    const [maxHp, setMaxHp] = useState('');

    const storage = useMemo(() => getStorageValue(cache), [cache]);

    const theme = useMemo(() => {
        const storedTheme = cache.sceneMetadata[SYSTEM_KEYS.CURRENT_THEME] as ThemeData | undefined;
        if (!storedTheme?.primary || !storedTheme?.offset || !storedTheme?.background || !storedTheme?.border) {
            return DEFAULT_THEME;
        }

        return storedTheme;
    }, [cache.sceneMetadata]);

    const currentHpBid = useMemo(() => {
        const fromStorage = storage[SettingsConstants.HP_CURRENT_BID];
        return typeof fromStorage === 'string' && fromStorage.trim().length > 0 ? fromStorage : MOCK_BIDS.CURRENT_HP;
    }, [storage]);

    const maxHpBid = useMemo(() => {
        const fromStorage = storage[SettingsConstants.HP_MAX_BID];
        return typeof fromStorage === 'string' && fromStorage.trim().length > 0 ? fromStorage : MOCK_BIDS.MAX_HP;
    }, [storage]);

    const currentHpKey = `${OwlbearIds.EXTENSIONID}/${currentHpBid}`;
    const maxHpKey = `${OwlbearIds.EXTENSIONID}/${maxHpBid}`;

    useEffect(() => {
        let mounted = true;

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
        setCurrentHp(getMetadataNumericValue(selectedItem, currentHpKey));
        setMaxHp(getMetadataNumericValue(selectedItem, maxHpKey));
    }, [selectedItem, currentHpKey, maxHpKey]);

    const commitValue = async (bid: string, draftValue: string) => {
        if (!selectedItem) {
            return;
        }

        const normalized = normalizeNumberInput(draftValue);
        if (normalized === null) {
            const key = `${OwlbearIds.EXTENSIONID}/${bid}`;
            const fallback = getMetadataNumericValue(selectedItem, key);
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

            item.metadata[`${OwlbearIds.EXTENSIONID}/${bid}`] = normalized;
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
                        onBlur={() => { void commitValue(currentHpBid, currentHp); }}
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
                        onBlur={() => { void commitValue(maxHpBid, maxHp); }}
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