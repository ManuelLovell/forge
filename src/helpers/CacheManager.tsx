import { useEffect } from 'react';
import OBR, { type Player } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import LOGGER from './Logger';
import { initializeChatLogListener, useChatLogStore } from './ChatLogStore';
import { DATA_STORED_IN_ROOM, OwlbearIds } from './Constants';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import { extractRollTotal, initializeBonesBroadcastResultListener, initializeRumbleBroadcastResultListener, initializeDicePlusResultListener } from './DiceRollIntegration';
import { sendDiscordWebhookMessage } from './DiscordWebhook';

const CHATLOG_CHANNEL = `${OwlbearIds.EXTENSIONID}/chatlog`;
const ROLL_NOTIFICATION_CHANNEL = `${OwlbearIds.EXTENSIONID}/roll-notification`;

export function CacheSync({ children }: { children: React.ReactNode }) {
    const setItems = useSceneStore((s) => s.setItems);
    const setLocalItems = useSceneStore((s) => s.setLocalItems);
    const setSceneMetadata = useSceneStore((s) => s.setSceneMetadata);
    const setRoomMetadata = useSceneStore((s) => s.setRoomMetadata);
    const setGridDpi = useSceneStore((s) => s.setGridDpi);
    const setPlayerData = useSceneStore((s) => s.setPlayerData);
    const setPartyData = useSceneStore((s) => s.setPartyData);

    const setSceneReady = useSceneStore((s) => s.setSceneReady);
    const setCacheReady = useSceneStore((s) => s.setCacheReady);

    useEffect(() => {
        const applyConsoleLogSetting = (sceneMeta: Record<string, unknown>, roomMeta: Record<string, unknown>) => {
            const storageContainer = DATA_STORED_IN_ROOM ? roomMeta : sceneMeta;
            const enabled = storageContainer[SettingsConstants.ENABLE_CONSOLE_LOG] as boolean | undefined;
            if (typeof enabled === 'boolean') {
                LOGGER.setEnabled(enabled);
            }
        };

        const publishRollMessage = (message: string) => {
            void sendDiscordWebhookMessage(message);

            const { sceneMetadata, roomMetadata } = useSceneStore.getState();
            const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
            const enableObrNotification = storageContainer[SettingsConstants.ENABLE_OBR_NOTIFICATION] as boolean | undefined;
            const showNotificationToAll = storageContainer[SettingsConstants.SHOW_NOTIFICATION_TO_ALL] as boolean | undefined;

            if (showNotificationToAll === true) {
                void OBR.broadcast.sendMessage(CHATLOG_CHANNEL, { message }, { destination: 'ALL' });

                if (enableObrNotification === true) {
                    void OBR.broadcast.sendMessage(ROLL_NOTIFICATION_CHANNEL, { message }, { destination: 'ALL' });
                }

                return;
            }

            useChatLogStore.getState().addMessage(message);

            if (enableObrNotification === true) {
                void OBR.notification.show(message, 'SUCCESS');
            }
        };

        const formatRollMessage = ({
            explicitMessage,
            tokenName,
            actionName,
            total,
        }: {
            explicitMessage?: string;
            tokenName?: string;
            actionName?: string;
            total?: number | null;
        }): string => {
            if (typeof explicitMessage === 'string' && explicitMessage.trim().length > 0) {
                return explicitMessage;
            }

            const resolvedTokenName = tokenName || 'Unknown';
            const resolvedActionName = actionName || 'Action';

            if (typeof total === 'number' && Number.isFinite(total)) {
                return `${resolvedTokenName} rolled ${resolvedActionName} for ${total}!`;
            }

            return `${resolvedTokenName} rolled ${resolvedActionName}.`;
        };

        // Initialize System Log listener (only happens once)
        initializeChatLogListener();

        const unsubscribeRollNotification = OBR.broadcast.onMessage(ROLL_NOTIFICATION_CHANNEL, (event) => {
            const data = event.data as { message?: unknown } | undefined;
            const message = typeof data?.message === 'string' ? data.message : null;
            if (!message) {
                return;
            }

            void OBR.notification.show(message, 'SUCCESS');
        });

        initializeBonesBroadcastResultListener((result) => {
            const total = extractRollTotal(result.rollHtml);
            const message = formatRollMessage({
                tokenName: result.senderName,
                actionName: result.actionName,
                total,
            });
            publishRollMessage(message);
        });

        initializeRumbleBroadcastResultListener((result) => {
            const message = formatRollMessage({ explicitMessage: result.message });
            publishRollMessage(message);
        });

        // Dice+ result listener
        initializeDicePlusResultListener((result) => {
            const message = formatRollMessage({
                tokenName: result.playerName,
                actionName: result.result.diceNotation,
                total: result.result.totalValue,
            });
            publishRollMessage(message);
        });

        let unsubSceneReady: () => void;
        let unsubItems: () => void;
        let unsubLocalItems: () => void;
        let unsubSceneMetadata: () => void;
        let unsubRoomMetadata: () => void;
        let unsubGridDpi: () => void;
        let unsubPlayerData: () => void;
        let unsubPartyData: () => void;

        const syncSceneState = async () => {
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
        OBR.onReady(async () => {
            const isReady = await OBR.scene.isReady();
            setSceneReady(isReady);
            if (isReady) {
                LOGGER.log('Scene is ready on initial load, syncing cache...');
                await syncSceneState();
            }

            unsubSceneReady = OBR.scene.onReadyChange(async (ready) => {
                setSceneReady(ready);

                if (ready) {
                    LOGGER.log('Scene became ready, syncing cache...');
                    await syncSceneState();
                } else {
                    LOGGER.log('Scene is no longer ready, clearing cache...');
                    setCacheReady(false); // Scene closed, invalidate cache
                }
            });
        });

        return () => {
            unsubSceneReady?.();
            unsubItems?.();
            unsubLocalItems?.();
            unsubSceneMetadata?.();
            unsubRoomMetadata?.();
            unsubGridDpi?.();
            unsubPlayerData?.();
            unsubPartyData?.();
            unsubscribeRollNotification?.();
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
