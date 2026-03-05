import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import { useSceneStore } from './BSCache';

interface SystemData {
  theme: {
    primary: string;
    offset: string;
    background: string;
    border: string;
    background_url: string;
  } | null;
  cardLayout: CardLayoutComponent[];
  listLayout: ListLayoutComponent[];
  attributes: SystemAttribute[];
  systemName: string;
  importDate: string | null;
  isLoading: boolean;
}

/**
 * Hook to access current system data from OBR scene metadata
 * Automatically falls back to default system if data is missing
 */
export const useSystemData = (): SystemData => {
  const runtimeSystemData = useSceneStore((state) => state.systemData);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  if (!cacheReady) {
    return {
      theme: null,
      cardLayout: [],
      listLayout: [],
      attributes: [],
      systemName: '',
      importDate: null,
      isLoading: true,
    };
  }

  if (runtimeSystemData) {
    return {
      theme: runtimeSystemData.theme,
      cardLayout: runtimeSystemData.cardLayout,
      listLayout: runtimeSystemData.listLayout,
      attributes: runtimeSystemData.attributes,
      systemName: runtimeSystemData.systemName,
      importDate: runtimeSystemData.importDate,
      isLoading: false,
    };
  }

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
    isLoading: false,
  };
};
