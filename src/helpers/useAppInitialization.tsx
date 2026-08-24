import { useEffect, useState } from 'react';
import { useForgeTheme } from './ThemeContext';
import { RuntimeSystemTheme, useSceneStore } from './BSCache';
import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import LOGGER from './Logger';
import { supabase } from '../supabase/supabaseClient';
import { buildDefaultRuntimeSystemData } from './defaultSystemLoader';
import { SystemKeys } from './systemKeys';

type ThemeData = RuntimeSystemTheme;

interface SnapshotRoomResponse {
  snapshot_public_id: string;
  source_share_id: string;
  system_name: string;
  background_url: string;
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  card_layout: unknown;
  list_layout: unknown;
  attributes: unknown;
  effect_presets?: unknown;
  imported_at: string;
  updated_at: string;
}

const normalizePresetType = (rawType: unknown, name: string): 'neutral' | 'buff' | 'debuff' => {
  if (rawType === 'buff' || rawType === 'debuff' || rawType === 'neutral') {
    return rawType;
  }

  const normalizedName = name.toLowerCase();
  if (/\b(buff|bless|haste|shield|inspiration|rage|fortif|quicken|resist)\b/.test(normalizedName)) {
    return 'buff';
  }

  if (/\b(debuff|poison\w*|restrain|blind|charm|fright|paraly|stun|slow|exhaust|burn|bleed|daze|curse)\b/.test(normalizedName)) {
    return 'debuff';
  }

  return 'neutral';
};

const normalizePresetDuration = (rawDuration: unknown): number => {
  const parsed = Number(rawDuration);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 1;
  }

  return Math.max(1, Math.trunc(parsed));
};

const normalizePresetDurationType = (rawDurationType: unknown): 'rounds' | 'turns' => {
  return rawDurationType === 'turns' ? 'turns' : 'rounds';
};

const normalizePresetEndTiming = (rawEndTiming: unknown): 'start' | 'end' => {
  return rawEndTiming === 'end' ? 'end' : 'start';
};

/**
 * Central initialization hook for the application
 * Handles loading of:
 * - Game system data
 * - Theme configuration
 * - Settings data
 * 
 * This runs on app startup before rendering the main content
 */
export const useAppInitialization = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { updateThemeFromSystem } = useForgeTheme();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const cacheReady = useSceneStore((state) => state.cacheReady);
  const runtimeSystemData = useSceneStore((state) => state.systemData);
  const setRuntimeSystemData = useSceneStore((state) => state.setSystemData);

  useEffect(() => {
    if (!cacheReady && isInitialized) {
      setIsInitialized(false);
      setRuntimeSystemData(null);
    }
  }, [cacheReady, isInitialized, setRuntimeSystemData]);

  useEffect(() => {
    if (!cacheReady || !runtimeSystemData) {
      return;
    }

    updateThemeFromSystem(
      runtimeSystemData.theme.primary,
      runtimeSystemData.theme.offset,
      runtimeSystemData.theme.background,
      runtimeSystemData.theme.border,
      runtimeSystemData.theme.background_url,
    );
  }, [cacheReady, runtimeSystemData, updateThemeFromSystem]);

  useEffect(() => {
    // Early return if already initialized
    if (isInitialized) {
      return;
    }

    let mounted = true;

    const initializeApp = async () => {
      // Wait for cache to be ready before initializing
      if (!cacheReady) {
        return;
      }

      try {
        LOGGER.log('Starting app initialization...');

        // Load game system data and theme
        await loadSystemDataAndTheme();

        if (mounted) {
          setIsInitialized(true);
          LOGGER.log('App initialization complete');
        }
      } catch (error) {
        LOGGER.error('Error during app initialization:', error);
        // Still mark as initialized to allow app to load with defaults
        if (mounted) {
          setIsInitialized(true);
        }
      }
    };

    const loadSystemDataAndTheme = async () => {
      const parseSnapshotArrayField = <T,>(value: unknown, fieldName: string): T[] => {
        if (Array.isArray(value)) {
          return value as T[];
        }

        if (typeof value === 'string') {
          let parsed: unknown;
          try {
            parsed = JSON.parse(value);
          } catch {
            throw new Error(`Snapshot ${fieldName} is not valid JSON`);
          }

          if (!Array.isArray(parsed)) {
            throw new Error(`Snapshot ${fieldName} is not a JSON array`);
          }

          return parsed as T[];
        }

        throw new Error(`Snapshot ${fieldName} has invalid type`);
      };

      const hydrateRuntimeFromSnapshot = async (snapshotPublicId: string): Promise<boolean> => {
        const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
          p_snapshot_public_id: snapshotPublicId,
        });

        if (error) {
          LOGGER.error('Failed to load room snapshot:', error);
          return false;
        }

        const snapshotData = (Array.isArray(data) ? data[0] : data) as SnapshotRoomResponse | null;
        if (!snapshotData || typeof snapshotData.snapshot_public_id !== 'string') {
          LOGGER.warn('Room snapshot reference was set, but no snapshot record was returned');
          return false;
        }

        const cardLayout = parseSnapshotArrayField<CardLayoutComponent>(snapshotData.card_layout, 'card_layout');
        const listLayout = parseSnapshotArrayField<ListLayoutComponent>(snapshotData.list_layout, 'list_layout');
        const attributes = parseSnapshotArrayField<SystemAttribute>(snapshotData.attributes, 'attributes');

        const snapshotTheme: ThemeData = {
          primary: snapshotData.theme_primary,
          offset: snapshotData.theme_offset,
          background: snapshotData.theme_background,
          border: snapshotData.theme_border,
          background_url: snapshotData.background_url,
        };

        const effectPresets = Array.isArray(snapshotData.effect_presets)
          ? snapshotData.effect_presets.filter((preset): preset is Record<string, unknown> => !!preset && typeof preset === 'object').map((preset) => ({
              id: typeof preset.id === 'string' ? preset.id : crypto.randomUUID(),
              name: typeof preset.name === 'string' ? preset.name.slice(0, 80) : '',
              type: normalizePresetType(preset.type, typeof preset.name === 'string' ? preset.name : ''),
              duration: normalizePresetDuration(preset.duration),
              durationType: normalizePresetDurationType(preset.durationType),
              endTiming: normalizePresetEndTiming(preset.endTiming),
            })).filter((preset) => preset.name.length > 0)
          : [];

        setRuntimeSystemData({
          theme: snapshotTheme,
          cardLayout,
          listLayout,
          attributes,
          effectPresets,
          systemName: snapshotData.system_name,
          importDate: snapshotData.imported_at,
          snapshotPublicId: snapshotData.snapshot_public_id,
        });

        LOGGER.log('System data hydrated from room snapshot', {
          snapshotPublicId: snapshotData.snapshot_public_id,
          systemName: snapshotData.system_name,
        });

        return true;
      };

      try {
        const roomSnapshotId = roomMetadata[SystemKeys.SNAPSHOT_PUBLIC_ID];
        if (typeof roomSnapshotId === 'string' && roomSnapshotId.trim().length > 0) {
          const loadedFromSnapshot = await hydrateRuntimeFromSnapshot(roomSnapshotId);
          if (loadedFromSnapshot) {
            return;
          }
        }
        LOGGER.log('Room snapshot reference missing or unavailable, initializing defaults');
        await initializeDefaultSystem();

      } catch (error) {
        LOGGER.error('Error loading system data:', error);
        await initializeDefaultSystem();
      }
    };

    const initializeDefaultSystem = async () => {
      const defaultRuntimeData = await buildDefaultRuntimeSystemData();
      setRuntimeSystemData(defaultRuntimeData);
      LOGGER.log('Default system initialized');
    };

    initializeApp();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cacheReady,
    isInitialized,
    roomMetadata,
    setRuntimeSystemData,
    updateThemeFromSystem,
  ]);

  useEffect(() => {
    if (!cacheReady || !isInitialized) {
      return;
    }

    const parseSnapshotArrayField = <T,>(value: unknown): T[] | null => {
      if (Array.isArray(value)) {
        return value as T[];
      }

      if (typeof value === 'string') {
        try {
          const parsed = JSON.parse(value);
          return Array.isArray(parsed) ? parsed as T[] : null;
        } catch {
          return null;
        }
      }

      return null;
    };

    const roomSnapshotValue = roomMetadata[SystemKeys.SNAPSHOT_PUBLIC_ID];
    const roomSnapshotId = typeof roomSnapshotValue === 'string' && roomSnapshotValue.trim().length > 0
      ? roomSnapshotValue.trim()
      : null;

    const currentSnapshotId = runtimeSystemData?.snapshotPublicId ?? null;
    if (roomSnapshotId === currentSnapshotId) {
      return;
    }

    let cancelled = false;

    const syncSnapshotChange = async () => {
      if (!roomSnapshotId) {
        if (!cancelled) {
          const defaultRuntimeData = await buildDefaultRuntimeSystemData();
          setRuntimeSystemData(defaultRuntimeData);
          LOGGER.log('Room snapshot reference cleared, reverted runtime system to defaults');
        }
        return;
      }

      const { data, error } = await supabase.rpc('bs_forge_get_snapshot_for_room', {
        p_snapshot_public_id: roomSnapshotId,
      });

      if (error) {
        LOGGER.error('Failed to refresh system from room snapshot change:', error);
        return;
      }

      const snapshotData = (Array.isArray(data) ? data[0] : data) as SnapshotRoomResponse | null;
      if (!snapshotData || typeof snapshotData.snapshot_public_id !== 'string') {
        LOGGER.warn('Room snapshot reference changed, but snapshot record was not found');
        return;
      }

      const cardLayout = parseSnapshotArrayField<CardLayoutComponent>(snapshotData.card_layout);
      const listLayout = parseSnapshotArrayField<ListLayoutComponent>(snapshotData.list_layout);
      const attributes = parseSnapshotArrayField<SystemAttribute>(snapshotData.attributes);

      if (!cardLayout || !listLayout || !attributes) {
        LOGGER.warn('Room snapshot refresh returned invalid payload arrays');
        return;
      }

      if (!cancelled) {
        const effectPresets = Array.isArray(snapshotData.effect_presets)
          ? snapshotData.effect_presets.filter((preset): preset is Record<string, unknown> => !!preset && typeof preset === 'object').map((preset) => ({
              id: typeof preset.id === 'string' ? preset.id : crypto.randomUUID(),
              name: typeof preset.name === 'string' ? preset.name.slice(0, 80) : '',
              type: normalizePresetType(preset.type, typeof preset.name === 'string' ? preset.name : ''),
              duration: normalizePresetDuration(preset.duration),
              durationType: normalizePresetDurationType(preset.durationType),
              endTiming: normalizePresetEndTiming(preset.endTiming),
            })).filter((preset) => preset.name.length > 0)
          : [];

        setRuntimeSystemData({
          theme: {
            primary: snapshotData.theme_primary,
            offset: snapshotData.theme_offset,
            background: snapshotData.theme_background,
            border: snapshotData.theme_border,
            background_url: snapshotData.background_url,
          },
          cardLayout,
          listLayout,
          attributes,
          effectPresets,
          systemName: snapshotData.system_name,
          importDate: snapshotData.imported_at,
          snapshotPublicId: snapshotData.snapshot_public_id,
        });

        LOGGER.log('Runtime system refreshed from room snapshot change', {
          snapshotPublicId: snapshotData.snapshot_public_id,
          systemName: snapshotData.system_name,
        });
      }
    };

    void syncSnapshotChange();

    return () => {
      cancelled = true;
    };
  }, [
    cacheReady,
    isInitialized,
    roomMetadata,
    runtimeSystemData,
    setRuntimeSystemData,
  ]);

  return { isInitialized };
};
