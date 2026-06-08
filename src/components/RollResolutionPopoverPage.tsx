import { useEffect, useRef, useState } from 'react';
import OBR, { type Player } from '@owlbear-rodeo/sdk';
import { RollResolutionPopup, type RollResolutionThemeData } from './RollResolutionPopup';
import { applyRollResolutionDeltaToItem, type RollResolutionAttributeConfig } from '../helpers/rollResolutionItemUpdate';
import { flashRollResolutionEffect } from '../helpers/flashRollResolutionEffect';
import { closeRollResolutionPopover, isRollResolutionPopoverMessage, ROLL_RESOLUTION_POPOVER_CHANNEL, ROLL_RESOLUTION_POPOVER_ID } from '../helpers/rollResolutionPopover';
import type { RollResolutionMode, RollResolutionSource } from '../helpers/rollResolutionStore';
import { useTranslation } from '../i18n/Translation';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { SystemKeys } from '../helpers/systemKeys';
import { supabase } from '../supabase/supabaseClient';

type SnapshotThemeResponse = {
  snapshot_public_id: string;
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
};

type RollResolutionPopoverState = {
  total: number;
  source: RollResolutionSource;
  message: string | null;
  attribute: RollResolutionAttributeConfig;
};

const DEFAULT_THEME: RollResolutionThemeData = {
  primary: defaultGameSystem.theme_primary,
  offset: defaultGameSystem.theme_offset,
  background: defaultGameSystem.theme_background,
  border: defaultGameSystem.theme_border,
};

const ROLL_RESOLUTION_COMPACT_WIDTH = 210;
const ROLL_RESOLUTION_COMPACT_HEIGHT = 84;

const parseInitialState = (): RollResolutionPopoverState | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const query = new URLSearchParams(window.location.search);
  const total = Number(query.get('total'));
  const source = query.get('source');
  const bid = query.get('bid');
  const type = query.get('type');
  const defaultMaxRaw = Number(query.get('defaultMax'));
  const message = query.get('message');

  if (!Number.isFinite(total) || !source || !bid || (type !== 'numb' && type !== 'resource')) {
    return null;
  }

  return {
    total: Math.abs(total),
    source: source as RollResolutionSource,
    message: message?.trim() || null,
    attribute: {
      bid,
      type,
      defaultMax: Number.isFinite(defaultMaxRaw) ? defaultMaxRaw : undefined,
    },
  };
};

export const RollResolutionPopoverPage = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<RollResolutionPopoverState | null>(() => parseInitialState());
  const [theme, setTheme] = useState<RollResolutionThemeData>(DEFAULT_THEME);
  const [isProcessMode, setIsProcessMode] = useState(false);
  const [mode, setMode] = useState<RollResolutionMode>('subtract');
  const [selection, setSelection] = useState<string[]>([]);
  const selectionInFlightRef = useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadThemeFromRoomMetadata = async (roomMetadata: Record<string, unknown>) => {
      const snapshotId = roomMetadata[SystemKeys.SNAPSHOT_PUBLIC_ID];
      if (typeof snapshotId !== 'string' || snapshotId.trim().length === 0) {
        if (mounted) {
          setTheme(DEFAULT_THEME);
        }
        return;
      }

      try {
        const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
          p_snapshot_public_id: snapshotId,
        });

        if (error) {
          if (mounted) {
            setTheme(DEFAULT_THEME);
          }
          return;
        }

        const snapshot = (Array.isArray(data) ? data[0] : data) as SnapshotThemeResponse | null;
        if (!snapshot || typeof snapshot.snapshot_public_id !== 'string') {
          if (mounted) {
            setTheme(DEFAULT_THEME);
          }
          return;
        }

        if (mounted) {
          setTheme({
            primary: snapshot.theme_primary,
            offset: snapshot.theme_offset,
            background: snapshot.theme_background,
            border: snapshot.theme_border,
          });
        }
      } catch {
        if (mounted) {
          setTheme(DEFAULT_THEME);
        }
      }
    };

    OBR.onReady(async () => {
      if (!mounted) {
        return;
      }

      const roomMetadata = await OBR.room.getMetadata();
      await loadThemeFromRoomMetadata(roomMetadata);

      const unsubscribeRoomMetadata = OBR.room.onMetadataChange((metadata) => {
        if (!mounted) {
          return;
        }

        void loadThemeFromRoomMetadata(metadata);
      });

      if (!mounted) {
        unsubscribeRoomMetadata();
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const nextWidth = ROLL_RESOLUTION_COMPACT_WIDTH;
    const nextHeight = isProcessMode ? ROLL_RESOLUTION_COMPACT_HEIGHT : 164;

    void (async () => {
      try {
        const currentWidth = await OBR.popover.getWidth(ROLL_RESOLUTION_POPOVER_ID);
        if (currentWidth !== nextWidth) {
          await OBR.popover.setWidth(ROLL_RESOLUTION_POPOVER_ID, nextWidth);
        }

        const currentHeight = await OBR.popover.getHeight(ROLL_RESOLUTION_POPOVER_ID);
        if (currentHeight !== nextHeight) {
          await OBR.popover.setHeight(ROLL_RESOLUTION_POPOVER_ID, nextHeight);
        }
      } catch {
      }
    })();
  }, [isProcessMode]);

  useEffect(() => {
    const unsubscribe = OBR.broadcast.onMessage(ROLL_RESOLUTION_POPOVER_CHANNEL, (event) => {
      const data = event.data as unknown;
      if (!isRollResolutionPopoverMessage(data)) {
        return;
      }

      setState({
        total: Math.abs(data.total),
        source: data.source,
        message: data.message?.trim() || null,
        attribute: data.attribute,
      });
      setMode('subtract');
      setIsProcessMode(false);
      selectionInFlightRef.current = null;
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadInitialSelection = async () => {
      const currentSelection = await OBR.player.getSelection();
      if (mounted) {
        setSelection(Array.isArray(currentSelection) ? currentSelection : []);
      }
    };

    void loadInitialSelection();

    const unsubscribe = OBR.player.onChange((player: Player) => {
      setSelection(Array.isArray(player.selection) ? player.selection : []);
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isProcessMode || !state) {
      selectionInFlightRef.current = null;
      return;
    }

    if (selection.length !== 1) {
      return;
    }

    const selectedItemId = selection[0];
    if (!selectedItemId || selectionInFlightRef.current === selectedItemId) {
      return;
    }

    selectionInFlightRef.current = selectedItemId;
    void (async () => {
      const delta = mode === 'subtract' ? -Math.abs(state.total) : Math.abs(state.total);
      const result = await applyRollResolutionDeltaToItem(selectedItemId, state.attribute, delta);

      if (result.status === 'success') {
        void flashRollResolutionEffect(selectedItemId, delta);
        await OBR.player.deselect();
        return;
      }

      if (result.status === 'invalid-target' || result.status === 'missing-attribute') {
        await OBR.player.deselect();
        return;
      }

      await OBR.notification.show(t('rollResolution.applyFailed'), 'ERROR');
    })().finally(() => {
      selectionInFlightRef.current = null;
    });
  }, [isProcessMode, mode, selection, state, t]);

  const handleApply = () => {
    setIsProcessMode(true);
    void OBR.player.deselect();
  };

  const handleClose = () => {
    void closeRollResolutionPopover();
  };

  if (!state) {
    return null;
  }

  return (
    <RollResolutionPopup
      theme={theme}
      isOpen
      isProcessMode={isProcessMode}
      total={state.total}
      mode={mode}
      onModeChange={setMode}
      onApply={handleApply}
      onExitProcessMode={() => setIsProcessMode(false)}
      onClose={handleClose}
    />
  );
};