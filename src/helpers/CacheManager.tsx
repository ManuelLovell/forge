import { useEffect } from 'react';
import OBR, { type Player } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import LOGGER from './Logger';
import { initializeChatLogListener } from './ChatLogStore';
import { DATA_STORED_IN_ROOM } from './Constants';
import { SettingsConstants } from '../interfaces/MetadataKeys';

export function CacheSync({ children }: { children: React.ReactNode })
{
    const setItems = useSceneStore((s) => s.setItems);
    const setLocalItems = useSceneStore((s) => s.setLocalItems);
    const setSceneMetadata = useSceneStore((s) => s.setSceneMetadata);
    const setRoomMetadata = useSceneStore((s) => s.setRoomMetadata);
    const setGridDpi = useSceneStore((s) => s.setGridDpi);
    const setPlayerData = useSceneStore((s) => s.setPlayerData);
    const setPartyData = useSceneStore((s) => s.setPartyData);

    const setSceneReady = useSceneStore((s) => s.setSceneReady);
    const setCacheReady = useSceneStore((s) => s.setCacheReady);

    useEffect(() =>
    {
        const applyConsoleLogSetting = (sceneMeta: Record<string, unknown>, roomMeta: Record<string, unknown>) => {
            const storageContainer = DATA_STORED_IN_ROOM ? roomMeta : sceneMeta;
            const enabled = storageContainer[SettingsConstants.ENABLE_CONSOLE_LOG] as boolean | undefined;
            if (typeof enabled === 'boolean') {
                LOGGER.setEnabled(enabled);
            }
        };

        // Initialize System Log listener (only happens once)
        initializeChatLogListener();
        
        let unsubSceneReady: () => void;
        let unsubItems: () => void;
        let unsubLocalItems: () => void;
        let unsubSceneMetadata: () => void;
        let unsubRoomMetadata: () => void;
        let unsubGridDpi: () => void;
        let unsubPlayerData: () => void;
        let unsubPartyData: () => void;

        const syncSceneState = async () =>
        {
            const [
                items,
                localItems,
                sceneMetadata,
                roomMetadata,
                gridDpi,
                players,
                playerColor,
                playerRole,
                playerConnectionId,
                playerId,
                playerMetadata,
                playerName,
            ] = await Promise.all([
                OBR.scene.items.getItems(),
                OBR.scene.local.getItems(),
                OBR.scene.getMetadata(),
                OBR.room.getMetadata(),
                OBR.scene.grid.getDpi(),
                OBR.party.getPlayers(),
                OBR.player.getColor(),
                OBR.player.getRole(),
                OBR.player.getConnectionId(),
                OBR.player.getId(),
                OBR.player.getMetadata(),
                OBR.player.getName(),
            ]);

            setItems(items);
            setLocalItems(localItems);
            setSceneMetadata(sceneMetadata);
            setRoomMetadata(roomMetadata);
            applyConsoleLogSetting(sceneMetadata, roomMetadata);
            setGridDpi(gridDpi);
            setPlayerData({
                id: playerId,
                name: playerName,
                connectionId: playerConnectionId,
                role: playerRole,
                color: playerColor,
                metadata: playerMetadata,
            } as Player);
            setPartyData(players);

            // Subscriptions
            unsubItems = OBR.scene.items.onChange(setItems);
            unsubLocalItems = OBR.scene.local.onChange(setLocalItems);
            unsubGridDpi = OBR.scene.grid.onChange((grid) => setGridDpi(grid.dpi));
            unsubPlayerData = OBR.player.onChange(setPlayerData);
            unsubPartyData = OBR.party.onChange(setPartyData);
            unsubSceneMetadata = OBR.scene.onMetadataChange((metadata) => {
                setSceneMetadata(metadata);
                applyConsoleLogSetting(metadata, useSceneStore.getState().roomMetadata);
            });
            unsubRoomMetadata = OBR.room.onMetadataChange((metadata) => {
                setRoomMetadata(metadata);
                applyConsoleLogSetting(useSceneStore.getState().sceneMetadata, metadata);
            });
            setCacheReady(true);
            LOGGER.log('CacheManager: Cache is ready');
        };

        // Extra onReady to catch late initializations
        OBR.onReady(async () =>
        {
            const isReady = await OBR.scene.isReady();
            setSceneReady(isReady);
            if (isReady)
            {
                LOGGER.log('Scene is ready on initial load, syncing cache...');
                await syncSceneState();
            }

            unsubSceneReady = OBR.scene.onReadyChange(async (ready) =>
            {
                setSceneReady(ready);

                if (ready)
                {
                    LOGGER.log('Scene became ready, syncing cache...');
                    await syncSceneState();
                } else
                {
                    LOGGER.log('Scene is no longer ready, clearing cache...');
                    setCacheReady(false); // Scene closed, invalidate cache
                }
            });
        });

        return () =>
        {
            unsubSceneReady?.();
            unsubItems?.();
            unsubLocalItems?.();
            unsubSceneMetadata?.();
            unsubRoomMetadata?.();
            unsubGridDpi?.();
            unsubPlayerData?.();
            unsubPartyData?.();
        };
    }, [
        setSceneReady,
        setCacheReady,
        setItems,
        setLocalItems,
        setSceneMetadata,
        setRoomMetadata,
        setGridDpi,
        setPlayerData,
        setPartyData,
    ]);

    return <>{children}</>;
}
