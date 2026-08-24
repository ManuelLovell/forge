import type { RuntimeSystemData } from './BSCache';
import type { CardLayoutComponent, ListLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

type DefaultEffectPreset = {
  id?: unknown;
  name?: unknown;
  type?: unknown;
  duration?: unknown;
  durationType?: unknown;
  endTiming?: unknown;
};

type DefaultGameSystem = {
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  background_url: string;
  card_layout: CardLayoutComponent[];
  list_layout: ListLayoutComponent[];
  attributes: SystemAttribute[];
  effect_presets?: DefaultEffectPreset[];
  name: string;
};

const normalizeDefaultEffectPresets = (rawPresets: DefaultEffectPreset[] | undefined): RuntimeSystemData['effectPresets'] => {
  if (!Array.isArray(rawPresets)) {
    return [];
  }

  return rawPresets
    .map((preset, index) => {
      const name = typeof preset?.name === 'string' ? preset.name.trim().slice(0, 80) : '';
      if (!name) {
        return null;
      }

      const durationRaw = Number(preset?.duration);
      const duration = Number.isFinite(durationRaw) && durationRaw > 0 ? Math.max(1, Math.trunc(durationRaw)) : 1;

      return {
        id: typeof preset?.id === 'string' && preset.id.trim() ? preset.id : `default-preset-${index + 1}`,
        name,
        type: preset?.type === 'buff' || preset?.type === 'debuff' || preset?.type === 'neutral' ? preset.type : 'neutral',
        duration,
        durationType: preset?.durationType === 'turns' ? 'turns' : 'rounds',
        endTiming: preset?.endTiming === 'end' ? 'end' : 'start',
      };
    })
    .filter((preset): preset is RuntimeSystemData['effectPresets'][number] => !!preset)
    .slice(0, 30);
};

let defaultGameSystemPromise: Promise<DefaultGameSystem> | null = null;

export const loadDefaultGameSystem = async (): Promise<DefaultGameSystem> => {
  if (!defaultGameSystemPromise) {
    defaultGameSystemPromise = import('../assets/defaultgamesystem.json').then(
      (module) => module.default as DefaultGameSystem,
    );
  }

  return defaultGameSystemPromise;
};

export const buildDefaultRuntimeSystemData = async (): Promise<RuntimeSystemData> => {
  const defaultGameSystem = await loadDefaultGameSystem();

  return {
    theme: {
      primary: defaultGameSystem.theme_primary,
      offset: defaultGameSystem.theme_offset,
      background: defaultGameSystem.theme_background,
      border: defaultGameSystem.theme_border,
      background_url: defaultGameSystem.background_url,
    },
    cardLayout: defaultGameSystem.card_layout as CardLayoutComponent[],
    listLayout: defaultGameSystem.list_layout as ListLayoutComponent[],
    attributes: defaultGameSystem.attributes as SystemAttribute[],
    effectPresets: normalizeDefaultEffectPresets(defaultGameSystem.effect_presets),
    systemName: defaultGameSystem.name,
    importDate: null,
    snapshotPublicId: null,
  };
};