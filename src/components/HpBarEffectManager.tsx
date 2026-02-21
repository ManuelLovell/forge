import { useEffect } from 'react';
import OBR, { buildEffect, buildText, isEffect, isImage, isText, Item } from '@owlbear-rodeo/sdk';
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
const HP_NUMBER_TEXT_FLAG = `${EXTENSION_ID}/hp-number-text`;
const HP_NUMBER_OWNER = `${EXTENSION_ID}/hp-number-owner`;

const getHpBarId = (unitId: string) => `HPB${unitId.slice(3)}`;
const getHpNumberId = (unitId: string) => `HPN${unitId.slice(3)}`;

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

const getConfiguredHpBidKeys = (
  storage: Record<string, unknown>,
  attributes: SystemAttribute[]
) => {
  const inferred = getHpBidKeys(attributes);
  const configuredCurrent = storage[SettingsConstants.HP_CURRENT_BID] as string | undefined;
  const configuredMax = storage[SettingsConstants.HP_MAX_BID] as string | undefined;

  const attributeBids = new Set(attributes.map((attribute) => attribute.attr_bid));

  return {
    currentHpBid: configuredCurrent && attributeBids.has(configuredCurrent)
      ? configuredCurrent
      : inferred.currentHpBid,
    maxHpBid: configuredMax && attributeBids.has(configuredMax)
      ? configuredMax
      : inferred.maxHpBid,
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

const getHpValues = (unit: Item, currentHpBid: string, maxHpBid: string) => {
  const currentRaw = unit.metadata?.[`${EXTENSION_ID}/${currentHpBid}`];
  const maxRaw = unit.metadata?.[`${EXTENSION_ID}/${maxHpBid}`];
  const currentHp = parseNumeric(currentRaw);
  const maxHp = parseNumeric(maxRaw);

  if (currentHp === null) {
    return null;
  }

  return {
    currentHp: Math.trunc(currentHp),
    maxHp: maxHp !== null ? Math.trunc(maxHp) : null,
  };
};

const getOrientation = (orientationRaw: unknown): 'top' | 'bottom' | 'left' | 'right' => {
  const orientation = String(orientationRaw || 'bottom').toLowerCase();
  if (orientation === 'top' || orientation === 'bottom' || orientation === 'left' || orientation === 'right') {
    return orientation;
  }
  return 'bottom';
};

const getOrientationValue = (orientationRaw: unknown): number => {
  const orientation = getOrientation(orientationRaw);
  switch (orientation) {
    case 'top':
      return 0;
    case 'bottom':
      return 1;
    case 'left':
      return 2;
    case 'right':
      return 3;
    default:
      return 1;
  }
};

interface ImageBoundsItem {
  grid: {
    dpi: number;
    offset: { x: number; y: number };
  };
  image: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
}

interface EffectUniformEntry {
  name?: string;
  value?: unknown;
}

interface EffectWithUniforms {
  uniforms?: EffectUniformEntry[];
}

const getImageBounds = (unitItem: ImageBoundsItem, sceneGridDpi: number) => {
  const dpiScale = sceneGridDpi / unitItem.grid.dpi;
  const width = unitItem.image.width * dpiScale;
  const height = unitItem.image.height * dpiScale;
  const offsetX = (unitItem.grid.offset.x / unitItem.image.width) * width;
  const offsetY = (unitItem.grid.offset.y / unitItem.image.height) * height;
  const minX = unitItem.position.x - offsetX;
  const minY = unitItem.position.y - offsetY;

  return {
    minX,
    minY,
    width,
    height,
  };
};

const getHpNumberPosition = (
  unitItem: ImageBoundsItem,
  sceneGridDpi: number,
  orientation: 'top' | 'bottom' | 'left' | 'right'
) => {
  const bounds = getImageBounds(unitItem, sceneGridDpi);
  const centerX = bounds.minX + (bounds.width * 0.5);
  const centerY = bounds.minY + (bounds.height * 0.5);

  let anchorPosition: { x: number; y: number };

  switch (orientation) {
    case 'top':
      anchorPosition = { x: centerX, y: bounds.minY + (bounds.height * 0.18) };
      break;
    case 'bottom':
      anchorPosition = { x: centerX, y: bounds.minY + (bounds.height * 0.82) };
      break;
    case 'left':
      anchorPosition = { x: bounds.minX + (bounds.width * 0.18), y: centerY };
      break;
    case 'right':
      anchorPosition = { x: bounds.minX + (bounds.width * 0.82), y: centerY };
      break;
  }

  const nudgeLeft = bounds.width * 0.25;
  const nudgeUp = bounds.height * 0.18;

  return {
    x: anchorPosition.x - nudgeLeft,
    y: anchorPosition.y - nudgeUp,
  };
};

export const HpBarEffectManager = () => {
  const cacheReady = useSceneStore((state) => state.cacheReady);
  const sceneReady = useSceneStore((state) => state.sceneReady);
  const items = useSceneStore((state) => state.items);
  const localItems = useSceneStore((state) => state.localItems);
  const gridDpi = useSceneStore((state) => state.gridDpi);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);

  useEffect(() => {
    if (!cacheReady || !sceneReady) {
      return;
    }

    let cancelled = false;

    const syncHpOverlays = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showHpBars = (storage[SettingsConstants.SHOW_HP_BARS] as boolean | undefined) ?? false;
      const showHpNumbers = (storage[SettingsConstants.SHOW_HP_NUMBERS] as boolean | undefined) ?? false;
      const effectiveShowHpBars = showHpBars;
      const effectiveShowHpNumbers = !showHpBars && showHpNumbers;
      const orientation = getOrientation(storage[SettingsConstants.HP_BAR_ORIENTATION]);
      const orientationValue = getOrientationValue(storage[SettingsConstants.HP_BAR_ORIENTATION]);
      const attributes = (sceneMetadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined) || [];
      const { currentHpBid, maxHpBid } = getConfiguredHpBidKeys(storage, attributes);

      const existingBars = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[HP_BAR_EFFECT_FLAG] === true;
      });
      const existingNumbers = localItems.filter((item) => {
        return isText(item) && item.metadata?.[HP_NUMBER_TEXT_FLAG] === true;
      });

      if (!effectiveShowHpBars && existingBars.length > 0) {
        try {
          await OBR.scene.local.deleteItems(existingBars.map((bar) => bar.id));
        } catch (error) {
          LOGGER.error('Failed to remove HP bar effects', error);
        }
      }

      if (!effectiveShowHpNumbers && existingNumbers.length > 0) {
        try {
          await OBR.scene.local.deleteItems(existingNumbers.map((number) => number.id));
        } catch (error) {
          LOGGER.error('Failed to remove HP number texts', error);
        }
      }

      if (!effectiveShowHpBars && !effectiveShowHpNumbers) {
        return;
      }

      const trackedUnits = items.filter((item) => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });

      const desiredBars = new Map<string, { unitId: string; hpPercent: number }>();
      const desiredNumbers = new Map<string, {
        unitId: string;
        text: string;
        position: { x: number; y: number };
      }>();

      for (const unit of trackedUnits) {
        if (effectiveShowHpBars) {
          const hpPercent = getHpPercent(unit, currentHpBid, maxHpBid);
          if (hpPercent !== null) {
            desiredBars.set(getHpBarId(unit.id), {
              unitId: unit.id,
              hpPercent,
            });
          }
        }

        if (effectiveShowHpNumbers && isImage(unit)) {
          const hpValues = getHpValues(unit, currentHpBid, maxHpBid);
          if (hpValues) {
            const hpText = hpValues.maxHp !== null ? `${hpValues.currentHp}/${hpValues.maxHp}` : `${hpValues.currentHp}`;
            desiredNumbers.set(getHpNumberId(unit.id), {
              unitId: unit.id,
              text: hpText,
              position: getHpNumberPosition(unit, gridDpi, orientation),
            });
          }
        }
      }

      if (effectiveShowHpBars) {
        const existingById = new Map(existingBars.map((bar) => [bar.id, bar]));
        const toAdd = Array.from(desiredBars.entries()).filter(([effectId]) => !existingById.has(effectId));
        const toRemove = existingBars.filter((bar) => !desiredBars.has(bar.id));
        const toUpdate = existingBars.filter((bar) => {
          const desired = desiredBars.get(bar.id);
          if (!desired) {
            return false;
          }

          const barWithUniforms = bar as typeof bar & EffectWithUniforms;
          const uniform = barWithUniforms.uniforms?.find((entry) => entry.name === 'hpPercent');
          const orientationUniform = barWithUniforms.uniforms?.find((entry) => entry.name === 'orientation');
          const currentUniformValue = typeof uniform?.value === 'number' ? uniform.value : NaN;
          const currentOrientationValue = typeof orientationUniform?.value === 'number' ? orientationUniform.value : NaN;

          return bar.attachedTo !== desired.unitId
            || !Number.isFinite(currentUniformValue)
            || Math.abs(currentUniformValue - desired.hpPercent) > 0.001
            || !Number.isFinite(currentOrientationValue)
            || Math.abs(currentOrientationValue - orientationValue) > 0.001;
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
              .uniforms([
                { name: 'hpPercent', value: desired.hpPercent },
                { name: 'orientation', value: orientationValue },
              ])
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
                const writableEffectItem = effectItem as typeof effectItem & EffectWithUniforms;
                writableEffectItem.uniforms = [
                  { name: 'hpPercent', value: desired.hpPercent },
                  { name: 'orientation', value: orientationValue },
                ];
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
      }

      if (effectiveShowHpNumbers) {
        const existingById = new Map(existingNumbers.map((numberItem) => [numberItem.id, numberItem]));
        const toAdd = Array.from(desiredNumbers.entries()).filter(([textId]) => !existingById.has(textId));
        const toRemove = existingNumbers.filter((numberItem) => !desiredNumbers.has(numberItem.id));
        const toUpdate = existingNumbers.filter((numberItem) => {
          const desired = desiredNumbers.get(numberItem.id);
          if (!desired) {
            return false;
          }

          const plainText = (numberItem as typeof numberItem & { text?: { plainText?: string } }).text?.plainText;
          const isPositionChanged =
            Math.abs(numberItem.position.x - desired.position.x) > 0.01
            || Math.abs(numberItem.position.y - desired.position.y) > 0.01;

          return numberItem.attachedTo !== desired.unitId
            || plainText !== desired.text
            || isPositionChanged;
        });

        if (cancelled) {
          return;
        }

        if (toRemove.length > 0) {
          try {
            await OBR.scene.local.deleteItems(toRemove.map((numberItem) => numberItem.id));
          } catch (error) {
            LOGGER.error('Failed to remove stale HP number texts', error);
          }
        }

        if (toAdd.length > 0) {
          const textsToAdd = toAdd.map(([textId, desired]) => {
            const sourceUnit = trackedUnits.find((unit) => unit.id === desired.unitId);
            return buildText()
              .id(textId)
              .name('HP Number Text')
              .plainText(desired.text)
              .textType('PLAIN')
              .fontWeight(900)
              .fillOpacity(0.95)
              .fillColor('white')
              .strokeWidth(8)
              .strokeColor('black')
              .strokeOpacity(1)
              .fontSize(28)
              .fontFamily('Segoe UI')
              .textAlign('CENTER')
              .position(desired.position)
              .metadata({
                [HP_NUMBER_TEXT_FLAG]: true,
                [HP_NUMBER_OWNER]: desired.unitId,
              })
              .attachedTo(desired.unitId)
              .visible(sourceUnit?.visible ?? true)
              .locked(true)
              .disableHit(true)
              .disableAttachmentBehavior(['ROTATION', 'SCALE'])
              .layer('TEXT')
              .build();
          });

          try {
            await OBR.scene.local.addItems(textsToAdd);
          } catch (error) {
            LOGGER.error('Failed to add HP number texts', error);
          }
        }

        if (toUpdate.length > 0) {
          const updateIds = toUpdate.map((numberItem) => numberItem.id);

          try {
            await OBR.scene.local.updateItems(updateIds, (updateItems) => {
              updateItems.forEach((itemToUpdate) => {
                const desired = desiredNumbers.get(itemToUpdate.id);
                if (!desired) {
                  return;
                }

                itemToUpdate.attachedTo = desired.unitId;
                itemToUpdate.position = desired.position;
                const textItemToUpdate = itemToUpdate as typeof itemToUpdate & { text?: { plainText?: string } };
                if (textItemToUpdate.text) {
                  textItemToUpdate.text.plainText = desired.text;
                }
                itemToUpdate.metadata = {
                  ...itemToUpdate.metadata,
                  [HP_NUMBER_TEXT_FLAG]: true,
                  [HP_NUMBER_OWNER]: desired.unitId,
                };
              });
            });
          } catch (error) {
            LOGGER.error('Failed to update HP number texts', error);
          }
        }
      }
    };

    void syncHpOverlays();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, gridDpi, roomMetadata, sceneMetadata]);

  return null;
};
