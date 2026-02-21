import { useEffect } from 'react';
import OBR, { buildEffect } from '@owlbear-rodeo/sdk';
import { useSceneStore } from '../helpers/BSCache';
import LOGGER from '../helpers/Logger';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { EXTENSION_ID } from '../helpers/MockData';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import { GRID_SELECTION_EFFECT } from '../assets/gridSelectionEffect';

const TURN_EFFECT_ID = `${EXTENSION_ID}/current-turn-effect`;

export const TurnEffectManager = () => {
  const cacheReady = useSceneStore((state) => state.cacheReady);
  const sceneReady = useSceneStore((state) => state.sceneReady);
  const items = useSceneStore((state) => state.items);
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);

  useEffect(() => {
    if (!cacheReady || !sceneReady) {
      return;
    }

    let cancelled = false;

    const syncTurnEffect = async () => {
      const storage = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const showTurnEffect = storage[SettingsConstants.SHOW_TURN_EFFECT] === true;
      const currentTurnId = sceneMetadata[SettingsConstants.CURRENT_TURN] as string | undefined;

      if (!showTurnEffect || !currentTurnId) {
        try {
          await OBR.scene.local.deleteItems([TURN_EFFECT_ID]);
        } catch {
        }
        return;
      }

      const currentTurnItem = items.find((item) => item.id === currentTurnId);
      if (!currentTurnItem) {
        try {
          await OBR.scene.local.deleteItems([TURN_EFFECT_ID]);
        } catch {
        }
        return;
      }

      if (cancelled) {
        return;
      }

      try {
        let updatedExistingEffect = false;
        await OBR.scene.local.updateItems([TURN_EFFECT_ID], (localItems) => {
          const turnEffect = localItems[0] as typeof localItems[0] & { attachedTo?: string };
          if (!turnEffect) {
            return;
          }

          turnEffect.attachedTo = currentTurnId;
          updatedExistingEffect = true;
        });

        if (updatedExistingEffect) {
          return;
        }
      } catch {
      }

      if (cancelled) {
        return;
      }

      try {
        const effect = buildEffect()
          .id(TURN_EFFECT_ID)
          .name('Current Turn Effect')
          .effectType('ATTACHMENT')
          .attachedTo(currentTurnId)
          .locked(true)
          .disableHit(true)
          .sksl(GRID_SELECTION_EFFECT)
          .build();

        await OBR.scene.local.addItems([effect]);
      } catch (error) {
        LOGGER.error('Failed to sync current turn effect', error);
      }
    };

    void syncTurnEffect();

    return () => {
      cancelled = true;
    };
  }, [cacheReady, sceneReady, items, roomMetadata, sceneMetadata]);

  return null;
};

export default TurnEffectManager;