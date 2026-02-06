import { useState, useEffect } from 'react';
import OBR from '@owlbear-rodeo/sdk';
import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import { SystemKeys } from '../components/SystemPage';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import LOGGER from './Logger';

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
    systemName: defaultGameSystem.name,
    importDate: null,
    isLoading: true,
  });

  useEffect(() => {
    let mounted = true;

    const loadSystemData = async () => {
      try {
        const metadata = await OBR.scene.getMetadata();

        const theme = metadata[SystemKeys.CURRENT_THEME] as SystemData['theme'] | undefined;
        const cardLayout = metadata[SystemKeys.CURRENT_CARD] as CardLayoutComponent[] | undefined;
        const listLayout = metadata[SystemKeys.CURRENT_LIST] as ListLayoutComponent[] | undefined;
        const attributes = metadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined;

        // Check if any required data is missing
        if (!theme || !cardLayout || !listLayout || !attributes) {
          LOGGER.log('System data missing, using defaults');
          
          if (mounted) {
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
          return;
        }

        // Load stored system data
        const systemName = metadata[SystemKeys.SYSTEM_NAME] as string || defaultGameSystem.name;
        const importDate = metadata[SystemKeys.IMPORT_DATE] as string || null;

        if (mounted) {
          setSystemData({
            theme,
            cardLayout,
            listLayout,
            attributes,
            systemName,
            importDate,
            isLoading: false,
          });
        }

      } catch (error) {
        LOGGER.error('Error loading system data:', error);
        
        // Fall back to defaults on error
        if (mounted) {
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
      }
    };

    loadSystemData();

    // Subscribe to metadata changes
    const unsubscribe = OBR.scene.onMetadataChange((metadata) => {
      const theme = metadata[SystemKeys.CURRENT_THEME] as SystemData['theme'] | undefined;
      const cardLayout = metadata[SystemKeys.CURRENT_CARD] as CardLayoutComponent[] | undefined;
      const listLayout = metadata[SystemKeys.CURRENT_LIST] as ListLayoutComponent[] | undefined;
      const attributes = metadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined;
      const systemName = metadata[SystemKeys.SYSTEM_NAME] as string || defaultGameSystem.name;
      const importDate = metadata[SystemKeys.IMPORT_DATE] as string || null;

      if (theme && cardLayout && listLayout && attributes && mounted) {
        setSystemData({
          theme,
          cardLayout,
          listLayout,
          attributes,
          systemName,
          importDate,
          isLoading: false,
        });
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  return systemData;
};
