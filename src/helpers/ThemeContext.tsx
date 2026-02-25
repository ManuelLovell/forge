import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ForgeTheme, DEFAULT_THEME, createTheme } from './ThemeConstants';

interface ThemeContextType {
  theme: ForgeTheme;
  setTheme: (theme: ForgeTheme) => void;
  updateThemeFromSystem: (
    primary: string,
    offset: string,
    background: string,
    border: string,
    backgroundUrl?: string
  ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ForgeTheme>(DEFAULT_THEME);

  const updateThemeFromSystem = useCallback((
    primary: string,
    offset: string,
    background: string,
    border: string,
    backgroundUrl?: string
  ) => {
    setTheme((prevTheme) => {
      if (
        prevTheme.PRIMARY === primary
        && prevTheme.OFFSET === offset
        && prevTheme.BACKGROUND === background
        && prevTheme.BORDER === border
        && prevTheme.BACKGROUND_URL === (backgroundUrl || undefined)
      ) {
        return prevTheme;
      }

      return createTheme(primary, offset, background, border, backgroundUrl);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, updateThemeFromSystem }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useForgeTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useForgeTheme must be used within a ThemeProvider');
  }
  return context;
};
