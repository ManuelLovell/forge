import { useEffect } from 'react';
import OBR, { buildText, isImage, isText, Item } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import LOGGER from '../helpers/Logger';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';

const GM_NAME_LABEL_FLAG = `${EXTENSION_ID}/gm-name-label`;
const GM_NAME_LABEL_OWNER = `${EXTENSION_ID}/gm-name-owner`;
const getGmNameLabelId = (unitId: string) => `GMN${unitId.slice(3)}`;
const GM_LABEL_FONT_SIZE = 24;
const GM_LABEL_FONT_FAMILY = 'Segoe UI';
const GM_LABEL_FONT_WEIGHT = 800;

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

const estimateTextWidth = (text: string): number => {
  if (typeof document === 'undefined') {
    return text.length * (GM_LABEL_FONT_SIZE * 0.58);
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return text.length * (GM_LABEL_FONT_SIZE * 0.58);
  }

  ctx.font = `${GM_LABEL_FONT_WEIGHT} ${GM_LABEL_FONT_SIZE}px ${GM_LABEL_FONT_FAMILY}`;
  return ctx.measureText(text).width;
};

const getLabelPosition = (unitItem: ImageBoundsItem, sceneGridDpi: number, labelText: string) => {
  const bounds = getImageBounds(unitItem, sceneGridDpi);
  const halfTextWidth = estimateTextWidth(labelText) * 0.5;

  return {
    x: (bounds.minX + (bounds.width * 0.5)) - halfTextWidth + 6,
    y: bounds.minY + bounds.height - 16,
  };
};

export const GmNameLabelManager = () => {
  const cacheReady = useSceneStore((state) => state.cacheReady);
  const sceneReady = useSceneStore((state) => state.sceneReady);
  const items = useSceneStore((state) => state.items);
  const localItems = useSceneStore((state) => state.localItems);
  const gridDpi = useSceneStore((state) => state.gridDpi);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const playerData = useSceneStore((state) => state.playerData);

  useEffect(() => {
    if (!cacheReady || !sceneReady) {
      return;
    }

    let cancelled = false;

    const syncGmNameLabels = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showNamesToGm = (storage[SettingsConstants.SHOW_NAMES_TO_GM] as boolean | undefined) ?? false;
      const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';

      const existingLabels = localItems.filter((item) => {
        return isText(item) && item.metadata?.[GM_NAME_LABEL_FLAG] === true;
      });

      if (!showNamesToGm || !isCurrentUserGm) {
        if (existingLabels.length > 0) {
          try {
            await OBR.scene.local.deleteItems(existingLabels.map((item) => item.id));
          } catch (error) {
            LOGGER.error('Failed to remove GM name labels', error);
          }
        }
        return;
      }

      const trackedUnits = items.filter((item): item is Item & ImageBoundsItem => {
        return isImage(item) && item.metadata?.[UnitConstants.ON_LIST] === true;
      });

      const desiredLabels = new Map<string, {
        unitId: string;
        name: string;
        position: { x: number; y: number };
        visible: boolean;
      }>();

      for (const unit of trackedUnits) {
        const rawName = unit.metadata?.[UnitConstants.UNIT_NAME];
        const unitName = String(rawName || '').trim();
        if (!unitName) {
          continue;
        }

        desiredLabels.set(getGmNameLabelId(unit.id), {
          unitId: unit.id,
          name: unitName,
          position: getLabelPosition(unit, gridDpi, unitName),
          visible: unit.visible,
        });
      }

      const existingById = new Map(existingLabels.map((item) => [item.id, item]));
      const toAdd = Array.from(desiredLabels.entries()).filter(([textId]) => !existingById.has(textId));
      const toRemove = existingLabels.filter((item) => !desiredLabels.has(item.id));
      const toUpdate = existingLabels.filter((item) => {
        const desired = desiredLabels.get(item.id);
        if (!desired) {
          return false;
        }

        const plainText = (item as Item & { text?: { plainText?: string } }).text?.plainText;
        const isPositionChanged =
          Math.abs(item.position.x - desired.position.x) > 0.01
          || Math.abs(item.position.y - desired.position.y) > 0.01;

        return item.attachedTo !== desired.unitId
          || plainText !== desired.name
          || item.visible !== desired.visible
          || isPositionChanged;
      });

      if (cancelled) {
        return;
      }

      if (toRemove.length > 0) {
        try {
          await OBR.scene.local.deleteItems(toRemove.map((item) => item.id));
        } catch (error) {
          LOGGER.error('Failed to remove stale GM name labels', error);
        }
      }

      if (toAdd.length > 0) {
        const labelsToAdd = toAdd.map(([textId, desired]) => (
          buildText()
            .id(textId)
            .name('GM Name Label')
            .layer('TEXT')
            .plainText(desired.name)
            .textType('PLAIN')
            .fontWeight(800)
            .fillOpacity(1)
            .fillColor('white')
            .strokeWidth(12)
            .strokeColor('black')
            .strokeOpacity(1)
            .fontSize(GM_LABEL_FONT_SIZE)
            .fontFamily(GM_LABEL_FONT_FAMILY)
            .textAlign('CENTER')
            .position(desired.position)
            .metadata({
              [GM_NAME_LABEL_FLAG]: true,
              [GM_NAME_LABEL_OWNER]: desired.unitId,
            })
            .attachedTo(desired.unitId)
            .visible(desired.visible)
            .locked(true)
            .disableHit(true)
            .disableAttachmentBehavior(['ROTATION', 'SCALE'])
            .build()
        ));

        try {
          await OBR.scene.local.addItems(labelsToAdd);
        } catch (error) {
          LOGGER.error('Failed to add GM name labels', error);
        }
      }

      if (toUpdate.length > 0) {
        try {
          await OBR.scene.local.updateItems(toUpdate.map((item) => item.id), (itemsToUpdate) => {
            itemsToUpdate.forEach((itemToUpdate) => {
              const desired = desiredLabels.get(itemToUpdate.id);
              if (!desired) {
                return;
              }

              itemToUpdate.attachedTo = desired.unitId;
              itemToUpdate.position = desired.position;
              itemToUpdate.visible = desired.visible;
              const textItemToUpdate = itemToUpdate as Item & { text?: { plainText?: string } };
              if (textItemToUpdate.text) {
                textItemToUpdate.text.plainText = desired.name;
              }
              itemToUpdate.metadata = {
                ...itemToUpdate.metadata,
                [GM_NAME_LABEL_FLAG]: true,
                [GM_NAME_LABEL_OWNER]: desired.unitId,
              };
            });
          });
        } catch (error) {
          LOGGER.error('Failed to update GM name labels', error);
        }
      }
    };

    void syncGmNameLabels();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, localItems, gridDpi, roomMetadata, sceneMetadata, playerData]);

  return null;
};

export default GmNameLabelManager;
