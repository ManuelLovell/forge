import { useState, useEffect } from 'react';
import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import { SystemKeys } from '../components/SystemPage';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import LOGGER from './Logger';
import { useSceneStore } from './BSCache';
import { DATA_STORED_IN_ROOM } from './Constants';

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
  const [systemData, setSystemData] = useState<SystemData>({
    theme: null,
    cardLayout: [],
    listLayout: [],
    attributes: [],
    systemName: '',
    importDate: null,
    isLoading: true,
  });
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const cacheReady = useSceneStore((state) => state.cacheReady);

  useEffect(() => {
    if (!cacheReady) {
      return;
    }

    try {
      const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
      const theme = storageContainer[SystemKeys.CURRENT_THEME] as SystemData['theme'] | undefined;
      const cardLayout = storageContainer[SystemKeys.CURRENT_CARD] as CardLayoutComponent[] | undefined;
      const listLayout = storageContainer[SystemKeys.CURRENT_LIST] as ListLayoutComponent[] | undefined;
      const attributes = storageContainer[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined;

      if (!theme || !Array.isArray(cardLayout) || !Array.isArray(listLayout) || !Array.isArray(attributes)) {
        LOGGER.log('System data missing, using defaults');
        setSystemData({
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
        });
        return;
      }

      const systemName = storageContainer[SystemKeys.SYSTEM_NAME] as string || defaultGameSystem.name;
      const importDate = storageContainer[SystemKeys.IMPORT_DATE] as string || null;

      setSystemData({
        theme,
        cardLayout,
        listLayout,
        attributes,
        systemName,
        importDate,
        isLoading: false,
      });
    } catch (error) {
      LOGGER.error('Error loading system data:', error);
      setSystemData({
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
      });
    }
  }, [cacheReady, roomMetadata, sceneMetadata]);

  return systemData;
};
