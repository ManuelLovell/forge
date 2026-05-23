import { useEffect } from 'react';
import OBR, { buildCurve, buildEffect, buildText, isCurve, isEffect, isImage, isText, Item, type Curve } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { SystemAttribute } from '../interfaces/SystemResponse';
import { HP_BAR_EFFECT } from '../assets/hpBarEffect';
import { getConfiguredHpBidKeys, getHpValueFromMetadata } from '../helpers/hpAttributeMapping';
import {
  buildDesiredTokenBadgesForUnit,
  type DesiredTokenBadgeShape,
  type DesiredTokenBadgeText,
  type HpOverlayOrientation,
  getTokenBadgeConfigs,
  getTokenBadgeShapeId,
  getTokenBadgeTextId,
  TOKEN_BADGE_SHAPE_FLAG,
  TOKEN_BADGE_SHAPE_OWNER,
  TOKEN_BADGE_SHAPE_SLOT,
  TOKEN_BADGE_TEXT_FLAG,
  TOKEN_BADGE_TEXT_OWNER,
  TOKEN_BADGE_TEXT_SLOT,
} from '../helpers/tokenBadgeOverlay';

const HP_BAR_EFFECT_FLAG = `${EXTENSION_ID}/hp-bar-effect`;
const HP_BAR_EFFECT_OWNER = `${EXTENSION_ID}/hp-bar-owner`;
const HP_NUMBER_TEXT_FLAG = `${EXTENSION_ID}/hp-number-text`;
const HP_NUMBER_OWNER = `${EXTENSION_ID}/hp-number-owner`;

const getHpBarId = (unitId: string) => `HPB${unitId.slice(3)}`;
const getHpNumberId = (unitId: string) => `HPN${unitId.slice(3)}`;

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));

const brightenHexColor = (value: unknown, blendFactor = 0.5, fallback = '#ffffff'): string => {
  if (typeof value !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(value)) {
    return fallback;
  }

  const normalizedBlend = clamp(blendFactor, 0, 1);
  const brightenChannel = (offset: number) => {
    const channel = Number.parseInt(value.slice(offset, offset + 2), 16);
    return Math.round(channel + ((255 - channel) * normalizedBlend));
  };

  const red = brightenChannel(1).toString(16).padStart(2, '0');
  const green = brightenChannel(3).toString(16).padStart(2, '0');
  const blue = brightenChannel(5).toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
};

const getHpPercent = (unit: Item, currentHpBid: string, maxHpBid: string, attributes: SystemAttribute[]): number | null => {
  const currentHp = getHpValueFromMetadata(unit.metadata, currentHpBid, attributes, 'current');
  const maxHp = getHpValueFromMetadata(unit.metadata, maxHpBid, attributes, 'max');

  if (maxHp === null || maxHp <= 0 || currentHp === null) {
    return null;
  }

  return clamp((currentHp / maxHp) * 100, 0, 100);
};

const getHpValues = (unit: Item, currentHpBid: string, maxHpBid: string, attributes: SystemAttribute[]) => {
  const currentHp = getHpValueFromMetadata(unit.metadata, currentHpBid, attributes, 'current');
  const maxHp = getHpValueFromMetadata(unit.metadata, maxHpBid, attributes, 'max');

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
  const runtimeSystemData = useSceneStore((state) => state.systemData);

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
      const tokenBadgeConfigs = getTokenBadgeConfigs(storage);
      const attributes = runtimeSystemData?.attributes || [];
      const tokenBadgeStrokeColor = brightenHexColor(runtimeSystemData?.theme.border, 0.5, '#ffffff');
      const { currentHpBid, maxHpBid } = getConfiguredHpBidKeys(storage, attributes);

      const existingBars = localItems.filter((item) => {
        return isEffect(item) && item.metadata?.[HP_BAR_EFFECT_FLAG] === true;
      });
      const existingNumbers = localItems.filter((item) => {
        return isText(item) && item.metadata?.[HP_NUMBER_TEXT_FLAG] === true;
      });
      const existingTokenBadgeShapes = localItems.filter((item): item is Curve => {
        return isCurve(item) && item.metadata?.[TOKEN_BADGE_SHAPE_FLAG] === true;
      });
      const existingTokenBadgeTexts = localItems.filter((item) => {
        return isText(item) && item.metadata?.[TOKEN_BADGE_TEXT_FLAG] === true;
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

      if (tokenBadgeConfigs.length === 0) {
        if (existingTokenBadgeShapes.length > 0) {
          try {
            await OBR.scene.local.deleteItems(existingTokenBadgeShapes.map((shape) => shape.id));
          } catch (error) {
            LOGGER.error('Failed to remove token badge shapes', error);
          }
        }

        if (existingTokenBadgeTexts.length > 0) {
          try {
            await OBR.scene.local.deleteItems(existingTokenBadgeTexts.map((textItem) => textItem.id));
          } catch (error) {
            LOGGER.error('Failed to remove token badge texts', error);
          }
        }
      }

      if (!effectiveShowHpBars && !effectiveShowHpNumbers && tokenBadgeConfigs.length === 0) {
        return;
      }

      const trackedUnits = items.filter((item) => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });

      const desiredBars = new Map<string, { unitId: string; hpPercent: number; visible: boolean }>();
      const desiredNumbers = new Map<string, {
        unitId: string;
        text: string;
        position: { x: number; y: number };
      }>();
      const desiredTokenBadgeShapes = new Map<string, DesiredTokenBadgeShape>();
      const desiredTokenBadgeTexts = new Map<string, DesiredTokenBadgeText>();

      for (const unit of trackedUnits) {
        if (effectiveShowHpBars) {
          const hpPercent = getHpPercent(unit, currentHpBid, maxHpBid, attributes);
          if (hpPercent !== null) {
            desiredBars.set(getHpBarId(unit.id), {
              unitId: unit.id,
              hpPercent,
              visible: unit.visible,
            });
          }
        }

        if (effectiveShowHpNumbers && isImage(unit)) {
          const hpValues = getHpValues(unit, currentHpBid, maxHpBid, attributes);
          if (hpValues) {
            const hpText = hpValues.maxHp !== null ? `${hpValues.currentHp}/${hpValues.maxHp}` : `${hpValues.currentHp}`;
            desiredNumbers.set(getHpNumberId(unit.id), {
              unitId: unit.id,
              text: hpText,
              position: getHpNumberPosition(unit, gridDpi, orientation),
            });
          }
        }

        if (isImage(unit) && tokenBadgeConfigs.length > 0) {
          const { desiredShapes, desiredTexts } = buildDesiredTokenBadgesForUnit(
            unit,
            gridDpi,
            orientation as HpOverlayOrientation,
            effectiveShowHpNumbers,
            attributes,
            tokenBadgeConfigs,
          );

          desiredShapes.forEach((shape) => {
            desiredTokenBadgeShapes.set(getTokenBadgeShapeId(unit.id, shape.slot), shape);
          });

          desiredTexts.forEach((text) => {
            desiredTokenBadgeTexts.set(getTokenBadgeTextId(unit.id, text.slot), text);
          });
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
              .layer('ATTACHMENT')
              .locked(true)
              .disableHit(true)
              .disableAttachmentBehavior(['ROTATION', 'SCALE'])
              .visible(desired.visible)
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
              .layer('ATTACHMENT')
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

      if (tokenBadgeConfigs.length > 0) {
        const existingShapesById = new Map(existingTokenBadgeShapes.map((shape) => [shape.id, shape]));
        const badgeShapesToAdd = Array.from(desiredTokenBadgeShapes.entries()).filter(([shapeId]) => !existingShapesById.has(shapeId));
        const badgeShapesToRemove = existingTokenBadgeShapes.filter((shape) => !desiredTokenBadgeShapes.has(shape.id));
        const badgeShapesToUpdate = existingTokenBadgeShapes.filter((shape) => {
          const desired = desiredTokenBadgeShapes.get(shape.id);
          if (!desired) {
            return false;
          }

          return shape.attachedTo !== desired.unitId
            || Math.abs(shape.position.x - desired.position.x) > 0.01
            || Math.abs(shape.position.y - desired.position.y) > 0.01
            || shape.points.length !== desired.points.length
            || shape.points.some((point, index) => {
              const desiredPoint = desired.points[index];
              return !desiredPoint
                || Math.abs(point.x - desiredPoint.x) > 0.01
                || Math.abs(point.y - desiredPoint.y) > 0.01;
            })
            || shape.style.fillColor !== desired.color
            || shape.style.strokeColor !== tokenBadgeStrokeColor
            || Math.abs(shape.style.strokeWidth - desired.strokeWidth) > 0.01
            || shape.visible !== desired.visible;
        });

        if (cancelled) {
          return;
        }

        if (badgeShapesToRemove.length > 0) {
          try {
            await OBR.scene.local.deleteItems(badgeShapesToRemove.map((shape) => shape.id));
          } catch (error) {
            LOGGER.error('Failed to remove stale token badge shapes', error);
          }
        }

        if (badgeShapesToAdd.length > 0) {
          const shapesToAdd = badgeShapesToAdd.map(([shapeId, desired]) => (
            buildCurve()
              .id(shapeId)
              .name(`Token Badge ${desired.slot}`)
              .layer('ATTACHMENT')
              .position(desired.position)
              .points(desired.points)
              .fillColor(desired.color)
              .fillOpacity(0.95)
              .strokeColor(tokenBadgeStrokeColor)
              .strokeOpacity(1)
              .strokeWidth(desired.strokeWidth)
              .tension(0)
              .closed(true)
              .metadata({
                [TOKEN_BADGE_SHAPE_FLAG]: true,
                [TOKEN_BADGE_SHAPE_OWNER]: desired.unitId,
                [TOKEN_BADGE_SHAPE_SLOT]: desired.slot,
              })
              .attachedTo(desired.unitId)
              .visible(desired.visible)
              .locked(true)
              .disableHit(true)
              .disableAttachmentBehavior(['ROTATION', 'SCALE'])
              .build()
          ));

          try {
            await OBR.scene.local.addItems(shapesToAdd);
          } catch (error) {
            LOGGER.error('Failed to add token badge shapes', error);
          }
        }

        if (badgeShapesToUpdate.length > 0) {
          try {
            await OBR.scene.local.updateItems(badgeShapesToUpdate.map((shape) => shape.id), (updateItems) => {
              updateItems.forEach((itemToUpdate) => {
                const desired = desiredTokenBadgeShapes.get(itemToUpdate.id);
                if (!desired || !isCurve(itemToUpdate)) {
                  return;
                }

                itemToUpdate.attachedTo = desired.unitId;
                itemToUpdate.position = desired.position;
                itemToUpdate.points = desired.points;
                itemToUpdate.visible = desired.visible;
                itemToUpdate.style = {
                  ...itemToUpdate.style,
                  fillColor: desired.color,
                  fillOpacity: 0.95,
                  strokeColor: tokenBadgeStrokeColor,
                  strokeOpacity: 1,
                  strokeWidth: desired.strokeWidth,
                  strokeDash: [],
                  tension: 0,
                  closed: true,
                };
                itemToUpdate.metadata = {
                  ...itemToUpdate.metadata,
                  [TOKEN_BADGE_SHAPE_FLAG]: true,
                  [TOKEN_BADGE_SHAPE_OWNER]: desired.unitId,
                  [TOKEN_BADGE_SHAPE_SLOT]: desired.slot,
                };
              });
            });
          } catch (error) {
            LOGGER.error('Failed to update token badge shapes', error);
          }
        }

        const existingTextsById = new Map(existingTokenBadgeTexts.map((textItem) => [textItem.id, textItem]));
        const badgeTextsToAdd = Array.from(desiredTokenBadgeTexts.entries()).filter(([textId]) => !existingTextsById.has(textId));
        const badgeTextsToRemove = existingTokenBadgeTexts.filter((textItem) => !desiredTokenBadgeTexts.has(textItem.id));
        const badgeTextsToUpdate = existingTokenBadgeTexts.filter((textItem) => {
          const desired = desiredTokenBadgeTexts.get(textItem.id);
          if (!desired) {
            return false;
          }

          const textContent = (textItem as typeof textItem & { text?: { plainText?: string; width?: number | 'AUTO'; height?: number | 'AUTO'; style?: { fontSize?: number } } }).text;
          const plainText = textContent?.plainText;
          const currentFontSize = textContent?.style?.fontSize;
          const currentWidth = typeof textContent?.width === 'number' ? textContent.width : null;
          const currentHeight = typeof textContent?.height === 'number' ? textContent.height : null;
          return textItem.attachedTo !== desired.unitId
            || Math.abs(textItem.position.x - desired.position.x) > 0.01
            || Math.abs(textItem.position.y - desired.position.y) > 0.01
            || currentWidth === null
            || Math.abs(currentWidth - desired.width) > 0.01
            || currentHeight === null
            || Math.abs(currentHeight - desired.height) > 0.01
            || plainText !== desired.text
            || currentFontSize !== desired.fontSize
            || textItem.visible !== desired.visible;
        });

        if (cancelled) {
          return;
        }

        if (badgeTextsToRemove.length > 0) {
          try {
            await OBR.scene.local.deleteItems(badgeTextsToRemove.map((textItem) => textItem.id));
          } catch (error) {
            LOGGER.error('Failed to remove stale token badge texts', error);
          }
        }

        if (badgeTextsToAdd.length > 0) {
          const textsToAdd = badgeTextsToAdd.map(([textId, desired]) => (
            buildText()
              .id(textId)
              .name(`Token Badge ${desired.slot} Text`)
              .layer('TEXT')
              .plainText(desired.text)
              .textType('PLAIN')
              .width(desired.width)
              .height(desired.height)
              .padding(0)
              .fontWeight(900)
              .fillOpacity(1)
              .fillColor('white')
              .strokeWidth(4)
              .strokeColor('black')
              .strokeOpacity(1)
              .fontSize(desired.fontSize)
              .fontFamily('Segoe UI')
              .textAlign('CENTER')
              .textAlignVertical('MIDDLE')
              .position(desired.position)
              .metadata({
                [TOKEN_BADGE_TEXT_FLAG]: true,
                [TOKEN_BADGE_TEXT_OWNER]: desired.unitId,
                [TOKEN_BADGE_TEXT_SLOT]: desired.slot,
              })
              .attachedTo(desired.unitId)
              .visible(desired.visible)
              .locked(true)
              .disableHit(true)
              .disableAttachmentBehavior(['ROTATION', 'SCALE'])
              .build()
          ));

          try {
            await OBR.scene.local.addItems(textsToAdd);
          } catch (error) {
            LOGGER.error('Failed to add token badge texts', error);
          }
        }

        if (badgeTextsToUpdate.length > 0) {
          try {
            await OBR.scene.local.updateItems(badgeTextsToUpdate.map((textItem) => textItem.id), (updateItems) => {
              updateItems.forEach((itemToUpdate) => {
                const desired = desiredTokenBadgeTexts.get(itemToUpdate.id);
                if (!desired || !isText(itemToUpdate)) {
                  return;
                }

                itemToUpdate.attachedTo = desired.unitId;
                itemToUpdate.position = desired.position;
                itemToUpdate.visible = desired.visible;
                const textToUpdate = itemToUpdate as typeof itemToUpdate & { text?: { plainText?: string; width?: number | 'AUTO'; height?: number | 'AUTO'; style?: { fontSize?: number } } };
                if (textToUpdate.text) {
                  textToUpdate.text.plainText = desired.text;
                  textToUpdate.text.width = desired.width;
                  textToUpdate.text.height = desired.height;
                  if (textToUpdate.text.style) {
                    textToUpdate.text.style.fontSize = desired.fontSize;
                  }
                }
                itemToUpdate.metadata = {
                  ...itemToUpdate.metadata,
                  [TOKEN_BADGE_TEXT_FLAG]: true,
                  [TOKEN_BADGE_TEXT_OWNER]: desired.unitId,
                  [TOKEN_BADGE_TEXT_SLOT]: desired.slot,
                };
              });
            });
          } catch (error) {
            LOGGER.error('Failed to update token badge texts', error);
          }
        }
      }
    };

    void syncHpOverlays();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, gridDpi, roomMetadata, sceneMetadata, runtimeSystemData]);

  return null;
};
