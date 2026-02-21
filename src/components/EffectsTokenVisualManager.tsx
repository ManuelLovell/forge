import { useEffect } from 'react';
import OBR, { buildEffect, isEffect, isImage } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import LOGGER from '../helpers/Logger';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { EFFECTS_METADATA_KEY, TrackedEffect } from './EffectsManager';
import {
  DEFAULT_BUFF_VISUAL_PRESET,
  DEFAULT_DEBUFF_VISUAL_PRESET,
  getBuffShaderForPreset,
  getDebuffShaderForPreset,
  isBuffVisualPreset,
  isDebuffVisualPreset,
} from '../helpers/EffectVisualPresets';

const BUFF_EFFECT_FLAG = `${EXTENSION_ID}/buff-effect-token`;
const BUFF_EFFECT_OWNER = `${EXTENSION_ID}/buff-effect-owner`;
const DEBUFF_EFFECT_FLAG = `${EXTENSION_ID}/debuff-effect-token`;
const DEBUFF_EFFECT_OWNER = `${EXTENSION_ID}/debuff-effect-owner`;
const EFFECT_PRESET_KEY = `${EXTENSION_ID}/effect-preset`;

const getBuffOverlayId = (unitId: string) => `EFB${unitId.slice(3)}`;
const getDebuffOverlayId = (unitId: string) => `EFD${unitId.slice(3)}`;

const parseTrackedEffects = (rawValue: unknown): TrackedEffect[] => {
  if (!Array.isArray(rawValue)) {
    return [];
  }

  return rawValue.reduce<TrackedEffect[]>((acc, value) => {
    if (!value || typeof value !== 'object') {
      return acc;
    }

    const effect = value as Partial<TrackedEffect>;
    const name = typeof effect.name === 'string' ? effect.name.trim() : '';
    const remainingRaw = Number(effect.remaining);
    const remaining = Number.isFinite(remainingRaw) ? Math.max(0, Math.trunc(remainingRaw)) : 0;
    const durationType = effect.durationType === 'turns' ? 'turns' : 'rounds';
    const endTiming = effect.endTiming === 'end' ? 'end' : 'start';
    const effectType = effect.effectType === 'buff'
      ? 'buff'
      : effect.effectType === 'debuff'
        ? 'debuff'
        : 'neutral';
    const targets = Array.isArray(effect.targets)
      ? Array.from(new Set(effect.targets.filter((targetId): targetId is string => typeof targetId === 'string' && targetId.length > 0)))
      : [];

    if (!name || !remaining) {
      return acc;
    }

    acc.push({
      id: typeof effect.id === 'string' && effect.id ? effect.id : crypto.randomUUID(),
      name,
      remaining,
      durationType,
      endTiming,
      effectType,
      targets,
      createdByName: typeof effect.createdByName === 'string' && effect.createdByName ? effect.createdByName : 'Unknown',
      createdById: typeof effect.createdById === 'string' ? effect.createdById : undefined,
    });

    return acc;
  }, []);
};

interface EffectMetadataCarrier {
  metadata?: Record<string, unknown>;
}

export const EffectsTokenVisualManager = () => {
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

    const syncEffectsVisuals = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const storedBuffPreset = storage[SettingsConstants.BUFF_VISUAL_PRESET];
      const storedDebuffPreset = storage[SettingsConstants.DEBUFF_VISUAL_PRESET];

      const buffPreset = isBuffVisualPreset(storedBuffPreset)
        ? storedBuffPreset
        : DEFAULT_BUFF_VISUAL_PRESET;
      const debuffPreset = isDebuffVisualPreset(storedDebuffPreset)
        ? storedDebuffPreset
        : DEFAULT_DEBUFF_VISUAL_PRESET;

      const buffShader = getBuffShaderForPreset(buffPreset);
      const debuffShader = getDebuffShaderForPreset(debuffPreset);

      const trackedUnits = items.filter((item) => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });
      const trackedUnitIds = new Set(trackedUnits.map((unit) => unit.id));

      const statusByTarget = new Map<string, { hasBuff: boolean; hasDebuff: boolean }>();
      const markStatus = (targetId: string, type: 'buff' | 'debuff') => {
        const existing = statusByTarget.get(targetId) || { hasBuff: false, hasDebuff: false };
        if (type === 'buff') {
          existing.hasBuff = true;
        } else {
          existing.hasDebuff = true;
        }
        statusByTarget.set(targetId, existing);
      };

      items.forEach((item) => {
        if (item.metadata?.[UnitConstants.ON_LIST] !== true) {
          return;
        }

        const sourceEffects = parseTrackedEffects(item.metadata?.[EFFECTS_METADATA_KEY]);
        if (sourceEffects.length === 0) {
          return;
        }

        sourceEffects.forEach((effect) => {
          if (effect.effectType === 'neutral') {
            return;
          }

          const targetIds = effect.targets.length > 0
            ? effect.targets
            : [item.id];

          targetIds.forEach((targetId) => {
            if (!trackedUnitIds.has(targetId)) {
              return;
            }

            if (effect.effectType === 'buff' || effect.effectType === 'debuff') {
              markStatus(targetId, effect.effectType);
            }
          });
        });
      });

      const desiredBuffIds = new Map<string, string>();
      const desiredDebuffIds = new Map<string, string>();
      trackedUnits.forEach((unit) => {
        const status = statusByTarget.get(unit.id);
        if (status?.hasBuff) {
          desiredBuffIds.set(getBuffOverlayId(unit.id), unit.id);
        }
        if (status?.hasDebuff) {
          desiredDebuffIds.set(getDebuffOverlayId(unit.id), unit.id);
        }
      });

      const existingBuffEffects = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[BUFF_EFFECT_FLAG] === true;
      });
      const existingDebuffEffects = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[DEBUFF_EFFECT_FLAG] === true;
      });

      const syncCategory = async (params: {
        existing: typeof existingBuffEffects;
        desiredByOverlayId: Map<string, string>;
        preset: string;
        shader: string;
        name: string;
        flagKey: string;
        ownerKey: string;
      }) => {
        const { existing, desiredByOverlayId, preset, shader, name, flagKey, ownerKey } = params;
        const existingById = new Map(existing.map((item) => [item.id, item]));
        const toAdd = Array.from(desiredByOverlayId.entries()).filter(([overlayId]) => !existingById.has(overlayId));
        const toRemove = existing.filter((item) => !desiredByOverlayId.has(item.id));
        const toUpdate = existing.filter((item) => {
          const ownerId = desiredByOverlayId.get(item.id);
          if (!ownerId) {
            return false;
          }

          const itemWithMetadata = item as typeof item & EffectMetadataCarrier;
          const currentPreset = itemWithMetadata.metadata?.[EFFECT_PRESET_KEY];
          return item.attachedTo !== ownerId || currentPreset !== preset;
        });

        if (cancelled) {
          return;
        }

        if (toRemove.length > 0) {
          try {
            await OBR.scene.local.deleteItems(toRemove.map((item) => item.id));
          } catch (error) {
            LOGGER.error(`Failed to remove stale ${name.toLowerCase()} overlays`, error);
          }
        }

        if (toAdd.length > 0) {
          const overlays = toAdd.map(([overlayId, ownerId]) => (
            buildEffect()
              .id(overlayId)
              .name(name)
              .effectType('ATTACHMENT')
              .attachedTo(ownerId)
              .locked(true)
              .disableHit(true)
              .disableAttachmentBehavior(['ROTATION', 'SCALE'])
              .sksl(shader)
              .metadata({
                [flagKey]: true,
                [ownerKey]: ownerId,
                [EFFECT_PRESET_KEY]: preset,
              })
              .build()
          ));

          try {
            await OBR.scene.local.addItems(overlays);
          } catch (error) {
            LOGGER.error(`Failed to add ${name.toLowerCase()} overlays`, error);
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
                const writableEffect = itemToUpdate as typeof itemToUpdate & { sksl?: string };
                writableEffect.sksl = shader;
                itemToUpdate.metadata = {
                  ...itemToUpdate.metadata,
                  [flagKey]: true,
                  [ownerKey]: ownerId,
                  [EFFECT_PRESET_KEY]: preset,
                };
              });
            });
          } catch (error) {
            LOGGER.error(`Failed to update ${name.toLowerCase()} overlays`, error);
          }
        }
      };

      await syncCategory({
        existing: existingBuffEffects,
        desiredByOverlayId: desiredBuffIds,
        preset: buffPreset,
        shader: buffShader,
        name: 'Buff Token Effect',
        flagKey: BUFF_EFFECT_FLAG,
        ownerKey: BUFF_EFFECT_OWNER,
      });

      await syncCategory({
        existing: existingDebuffEffects,
        desiredByOverlayId: desiredDebuffIds,
        preset: debuffPreset,
        shader: debuffShader,
        name: 'Debuff Token Effect',
        flagKey: DEBUFF_EFFECT_FLAG,
        ownerKey: DEBUFF_EFFECT_OWNER,
      });
    };

    void syncEffectsVisuals();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, roomMetadata, sceneMetadata]);

  return null;
};
