import OBR from '@owlbear-rodeo/sdk';

export const FORGE_METRICS_CHANNEL = 'forge/metrics';

export type ForgeMetricEvent = {
    eventId?: string;
    eventName: string;
    eventCategory?: string;
    playerId?: string | null;
    success?: boolean;
    durationMs?: number;
    errorCode?: string;
    errorMessage?: string;
    metadata?: Record<string, unknown>;
};

export async function TrackForgeEvent(event: ForgeMetricEvent): Promise<void>
{
    await OBR.broadcast.sendMessage(FORGE_METRICS_CHANNEL, event, { destination: 'LOCAL' });
}

export async function TrackForgeEventImmediately(event: ForgeMetricEvent): Promise<void>
{
    await TrackForgeEvent(event);
}
