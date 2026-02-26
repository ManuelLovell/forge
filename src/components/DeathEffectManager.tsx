import { useEffect } from 'react';
import OBR, { buildEffect, isEffect, isImage, Item } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID, MOCK_BIDS } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { deathMarkEffect } from '../assets/deathEffect';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { SystemKeys } from './SystemPage';

const DEATH_EFFECT_FLAG = `${EXTENSION_ID}/death-effect-token`;
const DEATH_EFFECT_OWNER = `${EXTENSION_ID}/death-effect-owner`;

const getDeathEffectId = (unitId: string) => `DTH${unitId.slice(3)}`;

const parseNumeric = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const getHpBidKeys = (attributes: SystemAttribute[]) => {
  const currentHp = attributes.find((attribute) => {
    const abbr = (attribute.attr_abbr || '').toUpperCase();
    const name = (attribute.attr_name || '').toLowerCase();
    return abbr === 'HP' || name === 'hit points';
  });

  return {
    currentHpBid: currentHp?.attr_bid || MOCK_BIDS.CURRENT_HP,
  };
};

const getConfiguredCurrentHpBid = (
  storage: Record<string, unknown>,
  attributes: SystemAttribute[]
) => {
  const inferred = getHpBidKeys(attributes);
  const configuredCurrent = storage[SettingsConstants.HP_CURRENT_BID] as string | undefined;
  const attributeBids = new Set(attributes.map((attribute) => attribute.attr_bid));

  return configuredCurrent && attributeBids.has(configuredCurrent)
    ? configuredCurrent
    : inferred.currentHpBid;
};

const getCurrentHp = (unit: Item, currentHpBid: string): number | null => {
  const currentRaw = unit.metadata?.[`${EXTENSION_ID}/${currentHpBid}`];
  return parseNumeric(currentRaw);
};

interface EffectMetadataCarrier {
  metadata?: Record<string, unknown>;
}

export const DeathEffectManager = () => {
  const cacheReady = useSceneStore((state) => state.cacheReady);
  const sceneReady = useSceneStore((state) => state.sceneReady);
  const items = useSceneStore((state) => state.items);
  const localItems = useSceneStore((state) => state.localItems);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);

  useEffect(() => {
    if (!cacheReady || !sceneReady) {
      return;
    }

    let cancelled = false;

    const syncDeathEffects = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showDeathEffect = (storage[SettingsConstants.SHOW_DEATH_EFFECT] as boolean | undefined) ?? false;
      const attributes = (sceneMetadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined) || [];
      const currentHpBid = getConfiguredCurrentHpBid(storage, attributes);

      const existingEffects = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[DEATH_EFFECT_FLAG] === true;
      });

      if (!showDeathEffect) {
        if (existingEffects.length > 0) {
          try {
            await OBR.scene.local.deleteItems(existingEffects.map((item) => item.id));
          } catch (error) {
            LOGGER.error('Failed to remove death token effects', error);
          }
        }
        return;
      }

      const trackedUnits = items.filter((item) => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });

      const desiredByOverlayId = new Map<string, string>();
      trackedUnits.forEach((unit) => {
        const currentHp = getCurrentHp(unit, currentHpBid);
        if (currentHp === 0) {
          desiredByOverlayId.set(getDeathEffectId(unit.id), unit.id);
        }
      });

      const existingById = new Map(existingEffects.map((item) => [item.id, item]));
      const toAdd = Array.from(desiredByOverlayId.entries()).filter(([overlayId]) => !existingById.has(overlayId));
      const toRemove = existingEffects.filter((item) => !desiredByOverlayId.has(item.id));
      const toUpdate = existingEffects.filter((item) => {
        const ownerId = desiredByOverlayId.get(item.id);
        if (!ownerId) {
          return false;
        }

        const itemWithMetadata = item as typeof item & EffectMetadataCarrier;
        return item.attachedTo !== ownerId || itemWithMetadata.metadata?.[DEATH_EFFECT_OWNER] !== ownerId;
      });

      if (cancelled) {
        return;
      }

      if (toRemove.length > 0) {
        try {
          await OBR.scene.local.deleteItems(toRemove.map((item) => item.id));
        } catch (error) {
          LOGGER.error('Failed to remove stale death token effects', error);
        }
      }

      if (toAdd.length > 0) {
        const effectsToAdd = toAdd.map(([overlayId, ownerId]) => (
          buildEffect()
            .id(overlayId)
            .name('Death Token Effect')
            .effectType('ATTACHMENT')
            .attachedTo(ownerId)
            .locked(true)
            .disableHit(true)
            .disableAttachmentBehavior(['ROTATION', 'SCALE'])
            .sksl(deathMarkEffect)
            .metadata({
              [DEATH_EFFECT_FLAG]: true,
              [DEATH_EFFECT_OWNER]: ownerId,
            })
            .build()
        ));

        try {
          await OBR.scene.local.addItems(effectsToAdd);
        } catch (error) {
          LOGGER.error('Failed to add death token effects', error);
        }
      }

      if (toUpdate.length > 0) {
        try {
          await OBR.scene.local.updateItems(toUpdate.map((item) => item.id), (updateItems) => {
            updateItems.forEach((itemToUpdate) => {
              const ownerId = desiredByOverlayId.get(itemToUpdate.id);
              if (!ownerId) {
                return;
              }

              itemToUpdate.attachedTo = ownerId;
              itemToUpdate.metadata = {
                ...itemToUpdate.metadata,
                [DEATH_EFFECT_FLAG]: true,
                [DEATH_EFFECT_OWNER]: ownerId,
              };
            });
          });
        } catch (error) {
          LOGGER.error('Failed to update death token effects', error);
        }
      }
    };

    void syncDeathEffects();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, roomMetadata, sceneMetadata]);

  return null;
};
