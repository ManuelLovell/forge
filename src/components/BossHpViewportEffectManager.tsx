import { useEffect } from 'react';
import OBR, { buildEffect, isEffect, isImage, Item } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { UnitConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { BOSS_HP_VIEWPORT_EFFECT } from '../assets/bossHpViewportEffect';
import { getConfiguredHpBidKeys, getHpValueFromMetadata } from '../helpers/hpAttributeMapping';

const BOSS_HP_EFFECT_FLAG = `${EXTENSION_ID}/boss-hp-effect`;
const BOSS_HP_EFFECT_OWNER = `${EXTENSION_ID}/boss-hp-owner`;
const BOSS_HP_EFFECT_SLOT = `${EXTENSION_ID}/boss-hp-slot`;

const getBossEffectId = (slot: number) => `BOSSHP${slot}`;

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

const getHpPercent = (unit: Item, currentHpBid: string, maxHpBid: string, attributes: SystemAttribute[]): number | null => {
  const currentHp = getHpValueFromMetadata(unit.metadata, currentHpBid, attributes, 'current');
  const maxHp = getHpValueFromMetadata(unit.metadata, maxHpBid, attributes, 'max');

  if (maxHp === null || maxHp <= 0 || currentHp === null) {
    return null;
  }

  return clamp((currentHp / maxHp) * 100, 0, 100);
};

interface EffectUniformEntry {
  name?: string;
  value?: unknown;
}

interface EffectWithUniforms {
  uniforms?: EffectUniformEntry[];
}

export const BossHpViewportEffectManager = () => {
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

    const syncBossBars = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const attributes = runtimeSystemData?.attributes || [];
      const { currentHpBid, maxHpBid } = getConfiguredHpBidKeys(storage, attributes);

      const existingEffects = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[BOSS_HP_EFFECT_FLAG] === true;
      });

      const bossCandidates = items
        .filter((item) => isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true && item.metadata?.[UnitConstants.BOSS_MODE] === true)
        .sort((a, b) => {
          const aInit = Number(a.metadata?.[UnitConstants.INITIATIVE] ?? 0);
          const bInit = Number(b.metadata?.[UnitConstants.INITIATIVE] ?? 0);
          return bInit - aInit;
        })
        .slice(0, 2);

      const desired = bossCandidates
        .map((unit, slot) => {
          const hpPercent = getHpPercent(unit, currentHpBid, maxHpBid, attributes);
          if (hpPercent === null) {
            return null;
          }

          return {
            id: getBossEffectId(slot),
            unitId: unit.id,
            slot,
            hpPercent,
          };
        })
        .filter((entry): entry is { id: string; unitId: string; slot: number; hpPercent: number } => entry !== null);

      const desiredById = new Map(desired.map((entry) => [entry.id, entry]));
      const existingById = new Map(existingEffects.map((item) => [item.id, item]));

      const toRemove = existingEffects.filter((item) => !desiredById.has(item.id));
      const toAdd = desired.filter((entry) => !existingById.has(entry.id));
      const toUpdate = existingEffects.filter((item) => {
        const desiredEntry = desiredById.get(item.id);
        if (!desiredEntry) {
          return false;
        }

        const withUniforms = item as typeof item & EffectWithUniforms;
        const hpUniform = withUniforms.uniforms?.find((entry) => entry.name === 'hpPercent');
        const slotUniform = withUniforms.uniforms?.find((entry) => entry.name === 'slot');
        const hpValue = typeof hpUniform?.value === 'number' ? hpUniform.value : NaN;
        const slotValue = typeof slotUniform?.value === 'number' ? slotUniform.value : NaN;

        return !Number.isFinite(hpValue)
          || Math.abs(hpValue - desiredEntry.hpPercent) > 0.001
          || !Number.isFinite(slotValue)
          || Math.abs(slotValue - desiredEntry.slot) > 0.001
          || item.metadata?.[BOSS_HP_EFFECT_OWNER] !== desiredEntry.unitId;
      });

      if (cancelled) {
        return;
      }

      if (toRemove.length > 0) {
        try {
          await OBR.scene.local.deleteItems(toRemove.map((item) => item.id));
        } catch (error) {
          LOGGER.error('Failed to remove stale boss HP viewport effects', error);
        }
      }

      if (toAdd.length > 0) {
        const addItems = toAdd.map((entry) => (
          buildEffect()
            .id(entry.id)
            .name('Boss HP Bar')
            .effectType('VIEWPORT')
            .locked(true)
            .disableHit(true)
            .uniforms([
              { name: 'hpPercent', value: entry.hpPercent },
              { name: 'slot', value: entry.slot },
            ])
            .sksl(BOSS_HP_VIEWPORT_EFFECT)
            .metadata({
              [BOSS_HP_EFFECT_FLAG]: true,
              [BOSS_HP_EFFECT_OWNER]: entry.unitId,
              [BOSS_HP_EFFECT_SLOT]: entry.slot,
            })
            .build()
        ));

        try {
          await OBR.scene.local.addItems(addItems);
        } catch (error) {
          LOGGER.error('Failed to add boss HP viewport effects', error);
        }
      }

      if (toUpdate.length > 0) {
        try {
          await OBR.scene.local.updateItems(toUpdate.map((item) => item.id), (itemsToUpdate) => {
            itemsToUpdate.forEach((itemToUpdate) => {
              const desiredEntry = desiredById.get(itemToUpdate.id);
              if (!desiredEntry) {
                return;
              }

              const writable = itemToUpdate as typeof itemToUpdate & EffectWithUniforms;
              writable.uniforms = [
                { name: 'hpPercent', value: desiredEntry.hpPercent },
                { name: 'slot', value: desiredEntry.slot },
              ];
              itemToUpdate.metadata = {
                ...itemToUpdate.metadata,
                [BOSS_HP_EFFECT_FLAG]: true,
                [BOSS_HP_EFFECT_OWNER]: desiredEntry.unitId,
                [BOSS_HP_EFFECT_SLOT]: desiredEntry.slot,
              };
            });
          });
        } catch (error) {
          LOGGER.error('Failed to update boss HP viewport effects', error);
        }
      }
    };

    void syncBossBars();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, roomMetadata, sceneMetadata, runtimeSystemData]);

  return null;
};
