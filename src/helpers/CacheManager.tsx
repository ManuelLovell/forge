import { useEffect } from 'react';
import OBR, { type Player } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';

export function CacheSync()
{
    const setItems = useSceneStore((s) => s.setItems);
    const setLocalItems = useSceneStore((s) => s.setLocalItems);
    const setSceneMetadata = useSceneStore((s) => s.setSceneMetadata);
    const setGridDpi = useSceneStore((s) => s.setGridDpi);
    const setPlayerData = useSceneStore((s) => s.setPlayerData);
    const setPartyData = useSceneStore((s) => s.setPartyData);

    const setSceneReady = useSceneStore((s) => s.setSceneReady);
    const setCacheReady = useSceneStore((s) => s.setCacheReady);

    useEffect(() =>
    {
        let unsubSceneReady: () => void;
        let unsubItems: () => void;
        let unsubLocalItems: () => void;
        let unsubMetadata: () => void;
        let unsubGridDpi: () => void;
        let unsubPlayerData: () => void;
        let unsubPartyData: () => void;

        const syncSceneState = async () =>
        {
            const [
                items,
                localItems,
                sceneMetadata,
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
            unsubMetadata = OBR.scene.onMetadataChange(setSceneMetadata);
            setCacheReady(true);
        };

        OBR.onReady(async () =>
        {
            const isReady = await OBR.scene.isReady();
            setSceneReady(isReady);
            if (isReady)
            {
                await syncSceneState();
            }

            unsubSceneReady = OBR.scene.onReadyChange(async (ready) =>
            {
                setSceneReady(ready);

                if (ready)
                {
                    setCacheReady(false); // Reset before re-sync
                    await syncSceneState();
                } else
                {
                    setCacheReady(false); // Scene closed, invalidate cache
                }
            });
        });

        return () =>
        {
            unsubSceneReady?.();
            unsubItems?.();
            unsubLocalItems?.();
            unsubMetadata?.();
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
        setGridDpi,
        setPlayerData,
        setPartyData,
    ]);

    return null;
}
