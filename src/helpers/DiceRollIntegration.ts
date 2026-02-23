import OBR from '@owlbear-rodeo/sdk';
import LOGGER from './Logger';

export type BonesViewerMode = 'ALL' | 'GM' | 'SELF';

export interface BonesRollBroadcastPayload {
    created?: string;
    notation: string;
    actionName: string;
    senderName: string;
    senderColor: string;
    senderId: string;
    viewers?: "SELF" | "ALL" | "GM";
}

export interface BonesRollBroadcastResult {
    created: string; // new Date().toISOString();
    senderName: string; // Sender Name
    senderId: string; // Sender OBR Id
    senderColor: string; // Sender OBR Color
    actionName: string;
    viewers: "SELF" | "ALL" | "GM";
    rollHtml: string; // result of a roll to broadcast
    notation?: string;
    error?: string;
}

export const BONES_BROADCASTLISTENER = 'bones.broadcast.listener';
export const BONES_BROADCASTSENDER = 'bones.broadcast.sender';
export const RUMBLE_BROADCAST_LISTENER = 'FORGE_LISTENER';
export const RUMBLE_BROADCAST_SENDER = 'FORGE_SENDER';

export interface RumbleRollBroadcastPayload {
    sender: string;
    action: string;
    notation: string;
}

export interface RumbleRollBroadcastResult {
    message: string;
}

let responseListenerInitialized = false;
let rumbleResponseListenerInitialized = false;

export const requestRumbleBroadcastRoll = async (payload: RumbleRollBroadcastPayload): Promise<void> => {
    LOGGER.log('Rumble roll request sent', {
        sender: payload.sender,
        action: payload.action,
        notation: payload.notation,
    });

    await OBR.broadcast.sendMessage(RUMBLE_BROADCAST_LISTENER, payload, { destination: 'LOCAL' });
};

export const initializeRumbleBroadcastResultListener = (
    onResult: (result: RumbleRollBroadcastResult) => void,
): void => {
    if (rumbleResponseListenerInitialized) {
        return;
    }

    OBR.broadcast.onMessage(RUMBLE_BROADCAST_SENDER, (event) => {
        const data = event.data as unknown;
        if (!data || typeof data !== 'object') {
            return;
        }

        const parsed = data as Partial<RumbleRollBroadcastResult>;
        if (typeof parsed.message !== 'string' || !parsed.message.trim()) {
            return;
        }

        LOGGER.log('Rumble roll result received', {
            message: parsed.message,
        });

        onResult({ message: parsed.message });
    });

    rumbleResponseListenerInitialized = true;
};

export const requestBonesBroadcastRoll = async (payload: BonesRollBroadcastPayload): Promise<void> => {
    LOGGER.log('Bones roll request sent', {
        notation: payload.notation,
        actionName: payload.actionName,
        senderName: payload.senderName,
        senderColor: payload.senderColor,
        senderId: payload.senderId,
        viewers: payload.viewers || 'ALL',
    });

    await OBR.broadcast.sendMessage(BONES_BROADCASTLISTENER, {
        ...payload,
        created: payload.created || new Date().toISOString(),
        viewers: payload.viewers || 'ALL',
    }, { destination: 'LOCAL' });
};

export const initializeBonesBroadcastResultListener = (
    onResult: (result: BonesRollBroadcastResult) => void,
): void => {
    if (responseListenerInitialized) {
        return;
    }

    OBR.broadcast.onMessage(BONES_BROADCASTSENDER, (event) => {
        const data = event.data as unknown;
        if (!data || typeof data !== 'object') {
            return;
        }

        const parsed = data as Partial<BonesRollBroadcastResult>;

        if (typeof parsed.actionName !== 'string' || typeof parsed.senderName !== 'string' || typeof parsed.senderId !== 'string') {
            return;
        }

        if (typeof parsed.rollHtml !== 'string' && typeof parsed.error !== 'string') {
            return;
        }

        LOGGER.log('Bones roll result received', {
            notation: parsed.notation,
            actionName: parsed.actionName,
            senderName: parsed.senderName,
            senderColor: parsed.senderColor,
            senderId: parsed.senderId,
            hasRollHtml: typeof parsed.rollHtml === 'string' && parsed.rollHtml.length > 0,
        });

        onResult(parsed as BonesRollBroadcastResult);
    });

    responseListenerInitialized = true;
};

const stripHtml = (value: string): string => value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export const extractRollTotal = (rollHtml?: string): number | null => {
    if (!rollHtml || typeof rollHtml !== 'string') {
        return null;
    }

    const strongMatch = rollHtml.match(/<strong[^>]*>\s*(-?\d+)\s*<\/strong>/i);
    if (strongMatch) {
        return parseInt(strongMatch[1], 10);
    }

    const plainText = stripHtml(rollHtml);
    const allNumbers = plainText.match(/-?\d+/g);
    if (!allNumbers || allNumbers.length === 0) {
        return null;
    }

    return parseInt(allNumbers[allNumbers.length - 1], 10);
};
