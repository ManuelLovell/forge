// src/stores/sceneStore.ts
import type { Player, Item } from '@owlbear-rodeo/sdk';
import { create } from 'zustand';

interface BSCache
{
    selectedItem: string;
    setSelectedItem: (item: string) => void;

    cacheReady: boolean;
    setCacheReady: (ready: boolean) => void;

    sceneReady: boolean;
    setSceneReady: (ready: boolean) => void;

    playerData?: Player;
    setPlayerData: (playerData: Player) => void;

    items: Item[];
    setItems: (items: Item[]) => void;

    localItems: Item[];
    setLocalItems: (items: Item[]) => void;

    sceneMetadata: Record<string, unknown>;
    setSceneMetadata: (data: Record<string, unknown>) => void;

    gridDpi: number;
    setGridDpi: (data: number) => void;

    partyData: Player[];
    setPartyData: (party: Player[]) => void;
}

export const useSceneStore = create<BSCache>((set) => ({

    selectedItem: "turnip",
    setSelectedItem: (item) => set({ selectedItem: item }),

    cacheReady: false,
    setCacheReady: (cache) => set({ cacheReady: cache }),

    sceneReady: false,
    setSceneReady: (ready) => set({ sceneReady: ready }),

    playerData: undefined,
    setPlayerData: (playerData) => set({ playerData }),

    items: [],
    setItems: (items) => set({ items }),

    localItems: [],
    setLocalItems: (localItems) => set({ localItems }),

    sceneMetadata: {},
    setSceneMetadata: (data) => set({ sceneMetadata: data }),

    gridDpi: 150,
    setGridDpi: (dpi) => set({ gridDpi: dpi }),

    partyData: [],
    setPartyData: (party) => set({ partyData: party }),
    
}));

export const sceneStore = useSceneStore;