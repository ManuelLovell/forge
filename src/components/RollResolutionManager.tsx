import { useEffect } from 'react';
import { useSceneStore } from '../helpers/BSCache';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { SettingsConstants } from '../interfaces/MetadataKeys';
import { useRollResolutionStore } from '../helpers/rollResolutionStore';
import { closeRollResolutionPopover, openCenteredRollResolutionPopover, sendRollResolutionPopoverUpdate } from '../helpers/rollResolutionPopover';

export const RollResolutionManager = () => {
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const systemAttributes = useSceneStore((state) => state.systemData?.attributes || []);

  const isOpen = useRollResolutionStore((state) => state.isOpen);
  const pendingTotal = useRollResolutionStore((state) => state.pendingTotal);
  const pendingSource = useRollResolutionStore((state) => state.pendingSource);
  const pendingMessage = useRollResolutionStore((state) => state.pendingMessage);
  const eventId = useRollResolutionStore((state) => state.eventId);
  const close = useRollResolutionStore((state) => state.close);

  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
  const enabled = storageContainer[SettingsConstants.ENABLE_ROLL_RESOLUTION] === true;
  const selectedBid = typeof storageContainer[SettingsConstants.ROLL_RESOLUTION_BID] === 'string'
    ? (storageContainer[SettingsConstants.ROLL_RESOLUTION_BID] as string).trim()
    : '';

  useEffect(() => {
    if (!enabled || !selectedBid) {
      void closeRollResolutionPopover();
    }

    if ((!enabled || !selectedBid) && isOpen) {
      close();
    }
  }, [close, enabled, isOpen, selectedBid]);

  useEffect(() => {
    if (!enabled || !isOpen || pendingTotal === null || !pendingSource || !selectedBid) {
      return;
    }

    const selectedAttribute = systemAttributes.find((attribute) => attribute.attr_bid === selectedBid);
    if (!selectedAttribute) {
      close();
      return;
    }

    if (selectedAttribute.attr_type !== 'numb' && selectedAttribute.attr_type !== 'resource') {
      close();
      return;
    }

    const payload = {
      total: pendingTotal,
      source: pendingSource,
      message: pendingMessage,
      attribute: {
        bid: selectedAttribute.attr_bid,
        type: selectedAttribute.attr_type,
        defaultMax: selectedAttribute.attr_type === 'resource'
          ? Number(selectedAttribute.attr_meta?.resource?.defaultMax)
          : undefined,
      },
    } as const;

    void (async () => {
      await openCenteredRollResolutionPopover(payload);
      await sendRollResolutionPopoverUpdate(payload);
      close();
    })();
  }, [close, enabled, eventId, isOpen, pendingMessage, pendingSource, pendingTotal, selectedBid, systemAttributes]);

  return null;
};