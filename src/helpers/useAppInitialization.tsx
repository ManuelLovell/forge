import { useEffect, useState } from 'react';
import OBR from '@owlbear-rodeo/sdk';
import { useForgeTheme } from './ThemeContext';
import { useSceneStore } from './BSCache';
import { SystemKeys } from '../components/SystemPage';
import { SystemAttribute, CardLayoutComponent, ListLayoutComponent } from '../interfaces/SystemResponse';
import defaultGameSystem from '../assets/defaultgamesystem.json';
import LOGGER from './Logger';

interface ThemeData {
  primary: string;
  offset: string;
  background: string;
  border: string;
  background_url: string;
}

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
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const cacheReady = useSceneStore((state) => state.cacheReady);

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
      try {
        const themeMeta = sceneMetadata[SystemKeys.CURRENT_THEME] as ThemeData | undefined;
        const cardMeta = sceneMetadata[SystemKeys.CURRENT_CARD] as CardLayoutComponent[] | undefined;
        const listMeta = sceneMetadata[SystemKeys.CURRENT_LIST] as ListLayoutComponent[] | undefined;
        const attrMeta = sceneMetadata[SystemKeys.CURRENT_ATTR] as SystemAttribute[] | undefined;

        // If any key is missing, initialize with default system
        if (!themeMeta || !cardMeta || !listMeta || !attrMeta) {
          LOGGER.log('System data not found, initializing with defaults');
          await initializeDefaultSystem();
          return;
        }

        // Apply existing theme
        LOGGER.log('Loading existing system theme:', themeMeta);
        updateThemeFromSystem(
          themeMeta.primary,
          themeMeta.offset,
          themeMeta.background,
          themeMeta.border,
          themeMeta.background_url
        );

      } catch (error) {
        LOGGER.error('Error loading system data:', error);
        await initializeDefaultSystem();
      }
    };

    const initializeDefaultSystem = async () => {
      const defaultTheme: ThemeData = {
        primary: defaultGameSystem.theme_primary,
        offset: defaultGameSystem.theme_offset,
        background: defaultGameSystem.theme_background,
        border: defaultGameSystem.theme_border,
        background_url: defaultGameSystem.background_url,
      };

      // Store default system in OBR
      await OBR.scene.setMetadata({
        [SystemKeys.CURRENT_THEME]: defaultTheme,
        [SystemKeys.CURRENT_CARD]: defaultGameSystem.card_layout,
        [SystemKeys.CURRENT_LIST]: defaultGameSystem.list_layout,
        [SystemKeys.CURRENT_ATTR]: defaultGameSystem.attributes,
        [SystemKeys.SYSTEM_NAME]: defaultGameSystem.name,
        [SystemKeys.IMPORT_DATE]: null,
      });

      LOGGER.log('Default system initialized');

      // Apply default theme
      updateThemeFromSystem(
        defaultTheme.primary,
        defaultTheme.offset,
        defaultTheme.background,
        defaultTheme.border,
        defaultTheme.background_url
      );
    };

    initializeApp();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheReady, isInitialized]);

  return { isInitialized };
};
