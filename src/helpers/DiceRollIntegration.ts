import OBR from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';
import LOGGER from './Logger';
import { SettingsConstants } from '../interfaces/MetadataKeys';

export type BonesViewerMode = 'ALL' | 'GM' | 'SELF';

// Dice+ Integration Types
// Central dice roll router
export interface CentralDiceRollParams {
    notation: string;
    actionName: string;
    senderName: string;
    senderId: string;
    senderColor: string;
    rollTarget?: DicePlusRollTarget; // For Dice+
    showResults?: boolean; // For Dice+
}

/**
 * Central dice roll router. Checks settings and routes to Bones, Rumble, or Dice+.
 * @param params - roll parameters
 * @param settings - settings object (room/scene metadata)
 */
export async function sendCentralDiceRoll(
    params: CentralDiceRollParams,
    settings: Record<string, unknown>
): Promise<void> {
    const enableBones = settings[SettingsConstants.ENABLE_BONES] as boolean || false;
    const enableRumble = settings[SettingsConstants.ENABLE_RUMBLE] as boolean || false;
    const enableDicePlus = settings[SettingsConstants.ENABLE_DICE_PLUS] as boolean || false;

    if (enableDicePlus) {
        // Dice+ roll
        await requestDicePlusRoll({
            playerName: params.senderName,
            diceNotation: params.notation,
            rollTarget: params.rollTarget || 'everyone',
            showResults: params.showResults ?? false,
        });
        return;
    }

    if (enableRumble) {
        await requestRumbleBroadcastRoll({
            sender: params.senderName,
            action: params.actionName,
            notation: params.notation,
        });
        return;
    }

    if (enableBones) {
        await requestBonesBroadcastRoll({
            notation: params.notation,
            actionName: params.actionName,
            senderName: params.senderName,
            senderId: params.senderId,
            senderColor: params.senderColor,
        });
        return;
    }

    // Fallback: log only
    LOGGER.log(params.notation);
}
export interface DicePlusReadyRequest {
    requestId: string;
    timestamp: number;
}

export interface DicePlusReadyResponse {
    requestId: string;
    ready: true;
    timestamp: number;
}

export type DicePlusRollTarget = 'everyone' | 'self' | 'dm' | 'gm_only';

export interface DicePlusRollRequest {
    rollId: string;
    playerId: string;
    playerName: string;
    rollTarget: DicePlusRollTarget;
    diceNotation: string;
    showResults: boolean;
    timestamp: number;
    source: string;
}

export interface DicePlusRollResult {
    rollId: string;
    playerId: string;
    playerName: string;
    rollTarget: DicePlusRollTarget;
    timestamp: number;
    result: {
        rollId: string;
        diceNotation: string;
        totalValue: number;
        rollSummary: string;
        groups: DicePlusDiceGroup[];
    };
}

export interface DicePlusDiceGroup {
    description?: string;
    diceModel?: string;
    diceType: string;
    dice: DicePlusDiceResult[];
    total: number;
    isNegative?: boolean;
}

export interface DicePlusDiceResult {
    diceId: string;
    rollId: string;
    diceType: string;
    value: number;
    kept: boolean;
}

export interface DicePlusRollError {
    rollId: string;
    error: string;
    notation: string;
}

export interface DicePlusRollRequestInput {
    diceNotation: string;
    rollTarget: DicePlusRollTarget;
    showResults: boolean;
    playerName?: string;
}

const DICE_PLUS_READY_CHANNEL = 'dice-plus/isReady';
const DICE_PLUS_ROLL_REQUEST_CHANNEL = 'dice-plus/roll-request';
const DICE_PLUS_EXTENSION_ID = OwlbearIds.EXTENSIONID;
const DICE_PLUS_RESULT_CHANNEL = `${DICE_PLUS_EXTENSION_ID}/roll-result`;
const DICE_PLUS_ERROR_CHANNEL = `${DICE_PLUS_EXTENSION_ID}/roll-error`;

export async function checkDicePlusReady(): Promise<boolean> {
    const requestId = crypto.randomUUID();
    return new Promise((resolve) => {
        const unsubscribe = OBR.broadcast.onMessage(DICE_PLUS_READY_CHANNEL, (event) => {
            const data = event.data as DicePlusReadyResponse;
            if ('ready' in data && data.requestId === requestId) {
                unsubscribe();
                resolve(true);
            }
        });
        OBR.broadcast.sendMessage(DICE_PLUS_READY_CHANNEL, {
            requestId,
            timestamp: Date.now(),
        }, { destination: 'ALL' });
        setTimeout(() => {
            unsubscribe();
            resolve(false);
        }, 1000);
    });
}

export async function requestDicePlusRoll(payload: DicePlusRollRequestInput): Promise<string | null> {
    const isReady = await checkDicePlusReady();
    if (!isReady) {
        LOGGER.log('Dice Plus extension not found!');
        return null;
    }
    const rollId = `roll_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const playerId = await OBR.player.getId();
    const playerName = payload.playerName ?? await OBR.player.getName();
    const payloadToSend: DicePlusRollRequest = {
        rollId,
        playerId,
        playerName,
        rollTarget: payload.rollTarget,
        diceNotation: payload.diceNotation,
        showResults: payload.showResults,
        timestamp: Date.now(),
        source: DICE_PLUS_EXTENSION_ID,
    };
    LOGGER.log('Dice Plus roll request sent', payloadToSend);
    await OBR.broadcast.sendMessage(DICE_PLUS_ROLL_REQUEST_CHANNEL, payloadToSend, { destination: 'ALL' });
    return rollId;
}

let dicePlusResultListenerInitialized = false;
let dicePlusErrorListenerInitialized = false;

export function initializeDicePlusResultListener(onResult: (result: DicePlusRollResult) => void): void {
    if (dicePlusResultListenerInitialized) return;
    OBR.broadcast.onMessage(DICE_PLUS_RESULT_CHANNEL, (event) => {
        const data = event.data as DicePlusRollResult;
        if (!data || typeof data !== 'object') return;
        if (typeof data.rollId !== 'string' || typeof data.playerName !== 'string') return;
        LOGGER.log('Dice Plus roll result received', data);
        onResult(data);
    });
    dicePlusResultListenerInitialized = true;
}

export function initializeDicePlusErrorListener(onError: (error: DicePlusRollError) => void): void {
    if (dicePlusErrorListenerInitialized) return;
    OBR.broadcast.onMessage(DICE_PLUS_ERROR_CHANNEL, (event) => {
        const data = event.data as DicePlusRollError;
        if (!data || typeof data !== 'object') return;
        if (typeof data.rollId !== 'string' || typeof data.error !== 'string') return;
        LOGGER.log('Dice Plus roll error received', data);
        onError(data);
    });
    dicePlusErrorListenerInitialized = true;
}

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
