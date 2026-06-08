import OBR from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';
import type { RollResolutionSource } from './rollResolutionStore';
import type { RollResolutionAttributeConfig } from './rollResolutionItemUpdate';

export const ROLL_RESOLUTION_POPOVER_ID = `${OwlbearIds.EXTENSIONID}-roll-resolution`;
export const ROLL_RESOLUTION_POPOVER_CHANNEL = `${OwlbearIds.EXTENSIONID}/roll-resolution-popover`;

export interface RollResolutionPopoverMessage {
  total: number;
  source: RollResolutionSource;
  message?: string | null;
  attribute: RollResolutionAttributeConfig;
}

export const isRollResolutionPopoverMessage = (value: unknown): value is RollResolutionPopoverMessage => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const parsed = value as Partial<RollResolutionPopoverMessage>;
  return typeof parsed.total === 'number'
    && Number.isFinite(parsed.total)
    && typeof parsed.source === 'string'
    && !!parsed.attribute
    && typeof parsed.attribute.bid === 'string'
    && (parsed.attribute.type === 'numb' || parsed.attribute.type === 'resource');
};

const buildRollResolutionPopoverUrl = (payload: RollResolutionPopoverMessage): string => {
  const query = new URLSearchParams({
    total: String(Math.abs(payload.total)),
    source: payload.source,
    bid: payload.attribute.bid,
    type: payload.attribute.type,
  });

  if (payload.message) {
    query.set('message', payload.message);
  }

  if (typeof payload.attribute.defaultMax === 'number' && Number.isFinite(payload.attribute.defaultMax)) {
    query.set('defaultMax', String(payload.attribute.defaultMax));
  }

  return `/pages/rollresolution.html?${query.toString()}`;
};

export const openCenteredRollResolutionPopover = async (payload: RollResolutionPopoverMessage): Promise<void> => {
  const viewportWidth = await OBR.viewport.getWidth();
  const viewportHeight = await OBR.viewport.getHeight();

  await OBR.popover.open({
    id: ROLL_RESOLUTION_POPOVER_ID,
    url: buildRollResolutionPopoverUrl(payload),
    height: 164,
    width: 240,
    anchorPosition: {
      left: viewportWidth / 2,
      top: viewportHeight / 2,
    },
    anchorReference: 'POSITION',
    anchorOrigin: {
      vertical: 'CENTER',
      horizontal: 'CENTER',
    },
    transformOrigin: {
      vertical: 'CENTER',
      horizontal: 'CENTER',
    },
    hidePaper: true,
    disableClickAway: true,
  });
};

export const sendRollResolutionPopoverUpdate = async (payload: RollResolutionPopoverMessage): Promise<void> => {
  await OBR.broadcast.sendMessage(ROLL_RESOLUTION_POPOVER_CHANNEL, payload, { destination: 'LOCAL' });
};

export const closeRollResolutionPopover = async (): Promise<void> => {
  try {
    await OBR.popover.close(ROLL_RESOLUTION_POPOVER_ID);
  } catch {
  }
};