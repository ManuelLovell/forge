import { useEffect } from 'react';
import OBR, { buildEffect, isEffect, isImage, Item } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { deathMarkEffect } from '../assets/deathEffect';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { getConfiguredHpBidKeys, getHpValueFromMetadata } from '../helpers/hpAttributeMapping';

const DEATH_EFFECT_FLAG = `${EXTENSION_ID}/death-effect-token`;
const DEATH_EFFECT_OWNER = `${EXTENSION_ID}/death-effect-owner`;

const getDeathEffectId = (unitId: string) => `DTH${unitId.slice(3)}`;

const getCurrentHp = (unit: Item, currentHpBid: string, attributes: SystemAttribute[]): number | null => {
  return getHpValueFromMetadata(unit.metadata, currentHpBid, attributes, 'current');
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
  const runtimeSystemData = useSceneStore((state) => state.systemData);

  useEffect(() => {
    if (!cacheReady || !sceneReady) {
      return;
    }

    let cancelled = false;

    const syncDeathEffects = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showDeathEffect = (storage[SettingsConstants.SHOW_DEATH_EFFECT] as boolean | undefined) ?? false;
      const attributes = runtimeSystemData?.attributes || [];
      const currentHpBid = getConfiguredHpBidKeys(storage, attributes).currentHpBid;

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

      const desiredByOverlayId = new Map<string, {ownerId: string, visible: boolean}>();
      trackedUnits.forEach((unit) => {
        const currentHp = getCurrentHp(unit, currentHpBid, attributes);
        if (currentHp === 0) {
          desiredByOverlayId.set(getDeathEffectId(unit.id), {ownerId: unit.id, visible: unit.visible});
        }
      });

      const existingById = new Map(existingEffects.map((item) => [item.id, item]));
      const toAdd = Array.from(desiredByOverlayId.entries()).filter(([overlayId]) => !existingById.has(overlayId));
      const toRemove = existingEffects.filter((item) => !desiredByOverlayId.has(item.id));
      const toUpdate = existingEffects.filter((item) => {
        const owner = desiredByOverlayId.get(item.id);
        if (!owner) {
          return false;
        }

        const itemWithMetadata = item as typeof item & EffectMetadataCarrier;
        return item.attachedTo !== owner.ownerId || itemWithMetadata.metadata?.[DEATH_EFFECT_OWNER] !== owner.ownerId;
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
        const effectsToAdd = toAdd.map(([overlayId, owner]) => (
          buildEffect()
            .id(overlayId)
            .name('Death Token Effect')
            .effectType('ATTACHMENT')
            .layer('ATTACHMENT')
            .attachedTo(owner.ownerId)
            .locked(true)
            .disableHit(true)
            .disableAttachmentBehavior(['ROTATION', 'SCALE'])
            .sksl(deathMarkEffect)
            .visible(owner.visible)
            .metadata({
              [DEATH_EFFECT_FLAG]: true,
              [DEATH_EFFECT_OWNER]: owner.ownerId,
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
              const owner = desiredByOverlayId.get(itemToUpdate.id);
              if (!owner) {
                return;
              }

              itemToUpdate.attachedTo = owner.ownerId;
              itemToUpdate.metadata = {
                ...itemToUpdate.metadata,
                [DEATH_EFFECT_FLAG]: true,
                [DEATH_EFFECT_OWNER]: owner.ownerId,
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
  }, [cacheReady, sceneReady, items, localItems, roomMetadata, sceneMetadata, runtimeSystemData]);

  return null;
};
