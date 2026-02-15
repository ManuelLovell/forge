import { useEffect } from 'react';
import OBR, { buildEffect, isEffect, isImage, Item } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID, MOCK_BIDS } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { HP_BAR_EFFECT } from '../assets/hpBarEffect';
import { SystemKeys } from './SystemPage';

const HP_BAR_EFFECT_FLAG = `${EXTENSION_ID}/hp-bar-effect`;
const HP_BAR_EFFECT_OWNER = `${EXTENSION_ID}/hp-bar-owner`;

const getHpBarId = (unitId: string) => `HPB${unitId.slice(3)}`;

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

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

  const maxHp = attributes.find((attribute) => {
    const abbr = (attribute.attr_abbr || '').toUpperCase();
    const name = (attribute.attr_name || '').toLowerCase();
    return abbr === 'MHP' || name === 'max hit points';
  });

  return {
    currentHpBid: currentHp?.attr_bid || MOCK_BIDS.CURRENT_HP,
    maxHpBid: maxHp?.attr_bid || MOCK_BIDS.MAX_HP,
  };
};

const getHpPercent = (unit: Item, currentHpBid: string, maxHpBid: string): number | null => {
  const currentRaw = unit.metadata?.[`${EXTENSION_ID}/${currentHpBid}`];
  const maxRaw = unit.metadata?.[`${EXTENSION_ID}/${maxHpBid}`];
  const currentHp = parseNumeric(currentRaw);
  const maxHp = parseNumeric(maxRaw);

  if (maxHp === null || maxHp <= 0 || currentHp === null) {
    return null;
  }

  return clamp((currentHp / maxHp) * 100, 0, 100);
};

export const HpBarEffectManager = () => {
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

    const syncHpBars = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showHpBars = (storage[SettingsConstants.SHOW_HP_BARS] as boolean | undefined) ?? false;
      const attributes = (sceneMetadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined) || [];
      const { currentHpBid, maxHpBid } = getHpBidKeys(attributes);

      const existingBars = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[HP_BAR_EFFECT_FLAG] === true;
      });

      if (!showHpBars) {
        if (existingBars.length > 0) {
          try {
            await OBR.scene.local.deleteItems(existingBars.map((bar) => bar.id));
          } catch (error) {
            LOGGER.error('Failed to remove HP bar effects', error);
          }
        }
        return;
      }

      const trackedUnits = items.filter((item) => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });

      const desiredBars = new Map<string, { unitId: string; hpPercent: number }>();
      for (const unit of trackedUnits) {
        const hpPercent = getHpPercent(unit, currentHpBid, maxHpBid);
        if (hpPercent === null) {
          continue;
        }

        desiredBars.set(getHpBarId(unit.id), {
          unitId: unit.id,
          hpPercent,
        });
      }

      const existingById = new Map(existingBars.map((bar) => [bar.id, bar]));
      const toAdd = Array.from(desiredBars.entries()).filter(([effectId]) => !existingById.has(effectId));
      const toRemove = existingBars.filter((bar) => !desiredBars.has(bar.id));
      const toUpdate = existingBars.filter((bar) => {
        const desired = desiredBars.get(bar.id);
        if (!desired) {
          return false;
        }

        const uniform = (bar as any).uniforms?.find((entry: any) => entry.name === 'hpPercent');
        const currentUniformValue = typeof uniform?.value === 'number' ? uniform.value : NaN;

        return bar.attachedTo !== desired.unitId || !Number.isFinite(currentUniformValue) || Math.abs(currentUniformValue - desired.hpPercent) > 0.001;
      });

      if (cancelled) {
        return;
      }

      if (toRemove.length > 0) {
        try {
          await OBR.scene.local.deleteItems(toRemove.map((bar) => bar.id));
        } catch (error) {
          LOGGER.error('Failed to remove stale HP bar effects', error);
        }
      }

      if (toAdd.length > 0) {
        const effectsToAdd = toAdd.map(([effectId, desired]) =>
          buildEffect()
            .id(effectId)
            .name('HP Bar Effect')
            .effectType('ATTACHMENT')
            .attachedTo(desired.unitId)
            .locked(true)
            .disableHit(true)
            .disableAttachmentBehavior(['ROTATION', 'SCALE'])
            .uniforms([{ name: 'hpPercent', value: desired.hpPercent }])
            .sksl(HP_BAR_EFFECT)
            .metadata({
              [HP_BAR_EFFECT_FLAG]: true,
              [HP_BAR_EFFECT_OWNER]: desired.unitId,
            })
            .build()
        );

        try {
          await OBR.scene.local.addItems(effectsToAdd);
        } catch (error) {
          LOGGER.error('Failed to add HP bar effects', error);
        }
      }

      if (toUpdate.length > 0) {
        const updateIds = toUpdate.map((bar) => bar.id);

        try {
          await OBR.scene.local.updateItems(updateIds, (updateItems) => {
            updateItems.forEach((effectItem) => {
              const desired = desiredBars.get(effectItem.id);
              if (!desired) {
                return;
              }

              effectItem.attachedTo = desired.unitId;
              const writableEffectItem = effectItem as any;
              writableEffectItem.uniforms = [{ name: 'hpPercent', value: desired.hpPercent }];
              effectItem.metadata = {
                ...effectItem.metadata,
                [HP_BAR_EFFECT_FLAG]: true,
                [HP_BAR_EFFECT_OWNER]: desired.unitId,
              };
            });
          });
        } catch (error) {
          LOGGER.error('Failed to update HP bar effects', error);
        }
      }
    };

    void syncHpBars();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, roomMetadata, sceneMetadata]);

  return null;
};
