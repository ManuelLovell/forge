import { useEffect } from 'react';
import { useForgeTheme } from './ThemeContext';
import { SystemResponse } from '../interfaces/SystemResponse.d';

/**
 * Hook to automatically update theme when system data changes
 * Usage: useSystemTheme(systemData);
 */
export const useSystemTheme = (systemData: SystemResponse | null) => {
  const { updateThemeFromSystem } = useForgeTheme();

  useEffect(() => {
    if (systemData) {
      updateThemeFromSystem(
        systemData.theme_primary,
        systemData.theme_offset,
        systemData.theme_background,
        systemData.theme_border
      );
    }
  }, [systemData, updateThemeFromSystem]);
};
