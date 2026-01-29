import OBR from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';

/**
 * Central logging utility for console output control
 * Toggle ENABLE_LOGGING to turn all console output on/off
 */

// Set to false to disable all console logging
const ENABLE_LOGGING = true;
const LOGGER_LABEL = '[FORGE ⚒️]';
const CHATLOG_CHANNEL = `${OwlbearIds.EXTENSIONID}/chatlog`;

// Helper to send message to chat log via broadcast
const sendToChatLog = (message: string) => {
    if (OBR.isAvailable) {
        OBR.broadcast.sendMessage(CHATLOG_CHANNEL, message, { destination: 'LOCAL' });
    }
};

// Helper to format args for display
const formatArgs = (...args: any[]): string => {
    return args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' ');
};

export const LOGGER = {
    log: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.log(LOGGER_LABEL, ...args);
            sendToChatLog(`[LOG] ${formatArgs(...args)}`);
        }
    },

    error: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.error(LOGGER_LABEL, ...args);
            sendToChatLog(`[ERROR] ${formatArgs(...args)}`);
        }
    },

    warn: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.warn(LOGGER_LABEL, ...args);
            sendToChatLog(`[WARN] ${formatArgs(...args)}`);
        }
    },

    info: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.info(LOGGER_LABEL, ...args);
            sendToChatLog(`[INFO] ${formatArgs(...args)}`);
        }
    },

    debug: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.debug(LOGGER_LABEL, ...args);
            sendToChatLog(`[DEBUG] ${formatArgs(...args)}`);
        }
    },

    table: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.table(LOGGER_LABEL, ...args);
        }
    },

    group: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.group(LOGGER_LABEL, ...args);
        }
    },

    groupEnd: () => {
        if (ENABLE_LOGGING) {
            console.groupEnd();
        }
    },

    trace: (...args: any[]) => {
        if (ENABLE_LOGGING) {
            console.trace(LOGGER_LABEL, ...args);
        }
    },
};

export default LOGGER;
