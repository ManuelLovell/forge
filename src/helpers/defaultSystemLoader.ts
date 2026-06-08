import type { RuntimeSystemData } from './BSCache';
import type { CardLayoutComponent, ListLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

type DefaultGameSystem = {
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  background_url: string;
  card_layout: CardLayoutComponent[];
  list_layout: ListLayoutComponent[];
  attributes: SystemAttribute[];
  name: string;
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
    systemName: defaultGameSystem.name,
    importDate: null,
    snapshotPublicId: null,
  };
};