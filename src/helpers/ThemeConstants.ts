/**
 * Default theme colors for the Forge application
 * These bright colors are used for easy visibility during development
 */
export const DEFAULT_THEME = {
  PRIMARY: '#FFFFFF',      // RED - Used for text
  OFFSET: '#2b772b',       // GREEN - Background for buttons/inputs and header backgrounds, text color for list headers
  BACKGROUND: '#203b1f',   // BLUE - Background color (typically at 70% opacity)
  BORDER: '#9b8007',       // YELLOW - Border color for windows, buttons, and line breaks
  BACKGROUND_URL: '',      // Optional background image URL
} as const;

/**
 * Interface for theme colors
 */
export interface ForgeTheme {
  PRIMARY: string;
  OFFSET: string;
  BACKGROUND: string;
  BORDER: string;
  BACKGROUND_URL?: string;
}

/**
 * Convert hex color to RGB values
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Convert RGB to RGBA string with opacity
 */
export const rgbaFromHex = (hex: string, opacity: number = 1): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(0, 0, 0, ${opacity})`;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

/**
 * Create theme object from hex values
 */
export const createTheme = (
  primary: string,
  offset: string,
  background: string,
  border: string,
  backgroundUrl?: string
): ForgeTheme => ({
  PRIMARY: primary,
  OFFSET: offset,
  BACKGROUND: background,
  BORDER: border,
  BACKGROUND_URL: backgroundUrl,
});
