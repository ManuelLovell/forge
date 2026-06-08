import OBR, { type Item } from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';

const FORGE_METADATA_PREFIX = `${OwlbearIds.EXTENSIONID}/`;

export interface RollResolutionAttributeConfig {
  bid: string;
  type: 'numb' | 'resource';
  defaultMax?: number | null;
}

export type RollResolutionUpdateResult =
  | { status: 'success'; itemId: string; delta: number }
  | { status: 'invalid-target' }
  | { status: 'missing-attribute' }
  | { status: 'write-failed'; error: unknown };

const getAttributeMetadataKey = (bid: string): string => `${FORGE_METADATA_PREFIX}${bid}`;

const isForgeTarget = (item: Item | undefined): item is Item => {
  if (!item) {
    return false;
  }

  return Object.keys(item.metadata || {}).some((key) => key.startsWith(FORGE_METADATA_PREFIX));
};

const resolveNextValue = (item: Item, attribute: RollResolutionAttributeConfig, delta: number): { key: string; value: unknown } | null => {
  const key = getAttributeMetadataKey(attribute.bid);
  const loweredType = String(attribute.type || '').toLowerCase();

  if (loweredType === 'numb') {
    const currentRaw = Number(item.metadata?.[key]);
    const currentValue = Number.isFinite(currentRaw) ? currentRaw : 0;
    return {
      key,
      value: currentValue + delta,
    };
  }

  if (loweredType === 'resource') {
    const rawValue = item.metadata?.[key];
    const resourceValue = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue)
      ? rawValue as Record<string, unknown>
      : {};

    const currentRaw = Number(resourceValue.current);
    const maxRaw = Number(resourceValue.max);
    const fallbackMaxRaw = Number(attribute.defaultMax);
    const currentValue = Number.isFinite(currentRaw) ? currentRaw : 0;
    const maxValue = Number.isFinite(maxRaw)
      ? Math.max(0, maxRaw)
      : (Number.isFinite(fallbackMaxRaw) ? Math.max(0, fallbackMaxRaw) : null);

    const unclampedNext = currentValue + delta;
    const minClamped = Math.max(0, unclampedNext);
    const nextCurrent = typeof maxValue === 'number'
      ? Math.min(minClamped, maxValue)
      : minClamped;

    return {
      key,
      value: {
        current: nextCurrent,
        max: typeof maxValue === 'number' ? maxValue : (Number.isFinite(maxRaw) ? maxRaw : 0),
      },
    };
  }

  return null;
};

export const applyRollResolutionDeltaToItem = async (
  itemId: string,
  attribute: RollResolutionAttributeConfig,
  delta: number,
): Promise<RollResolutionUpdateResult> => {
  const items = await OBR.scene.items.getItems();
  const item = items.find((entry) => entry.id === itemId);
  if (!isForgeTarget(item)) {
    return { status: 'invalid-target' };
  }

  if (!attribute?.bid) {
    return { status: 'missing-attribute' };
  }

  const nextValue = resolveNextValue(item, attribute, delta);
  if (!nextValue) {
    return { status: 'missing-attribute' };
  }

  try {
    await OBR.scene.items.updateItems([itemId], (itemsToUpdate) => {
      itemsToUpdate[0].metadata[nextValue.key] = nextValue.value;
    });

    return { status: 'success', itemId, delta };
  } catch (error) {
    return { status: 'write-failed', error };
  }
};