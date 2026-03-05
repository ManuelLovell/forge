import type { Player, Item } from '@owlbear-rodeo/sdk';
import { create } from 'zustand';
import type { CardLayoutComponent, ListLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

export interface RuntimeSystemTheme {
    primary: string;
    offset: string;
    background: string;
    border: string;
    background_url: string;
}

export interface RuntimeSystemData {
    theme: RuntimeSystemTheme;
    cardLayout: CardLayoutComponent[];
    listLayout: ListLayoutComponent[];
    attributes: SystemAttribute[];
    systemName: string;
    importDate: string | null;
    snapshotPublicId: string | null;
}

interface BSCache
{
    cacheReady: boolean;
    setCacheReady: (ready: boolean) => void;

    sceneReady: boolean;
    setSceneReady: (ready: boolean) => void;

    items: Item[];
    setItems: (items: Item[]) => void;

    localItems: Item[];
    setLocalItems: (items: Item[]) => void;

    sceneMetadata: Record<string, unknown>;
    setSceneMetadata: (data: Record<string, unknown>) => void;

    roomMetadata: Record<string, unknown>;
    setRoomMetadata: (data: Record<string, unknown>) => void;

    gridDpi: number;
    setGridDpi: (data: number) => void;

    playerData?: Player;
    setPlayerData: (playerData: Player) => void;

    partyData: Player[];
    setPartyData: (party: Player[]) => void;

    systemData: RuntimeSystemData | null;
    setSystemData: (data: RuntimeSystemData | null) => void;
}

export const useSceneStore = create<BSCache>((set) => ({
    cacheReady: false,
    setCacheReady: (cache) => set({ cacheReady: cache }),

    sceneReady: false,
    setSceneReady: (ready) => set({ sceneReady: ready }),

    items: [],
    setItems: (items) => set({ items }),

    localItems: [],
    setLocalItems: (localItems) => set({ localItems }),

    sceneMetadata: {},
    setSceneMetadata: (data) => set({ sceneMetadata: { ...data } }),

    roomMetadata: {},
    setRoomMetadata: (data) => set({ roomMetadata: { ...data } }),

    gridDpi: 150,
    setGridDpi: (dpi) => set({ gridDpi: dpi }),

    playerData: undefined,
    setPlayerData: (playerData) => set({ playerData }),

    partyData: [],
    setPartyData: (party) => set({ partyData: party }),

    systemData: null,
    setSystemData: (data) => set({ systemData: data }),
}));

export const sceneStore = useSceneStore;