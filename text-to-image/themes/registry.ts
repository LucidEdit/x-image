import { Theme } from "../types";

const themeRegistry = new Map<string, Theme>();

export const registerTheme = (theme: Theme) => {
  if (themeRegistry.has(theme.name)) {
    console.warn(`Warning: Theme "${theme.name}" already exists and will be overwritten. This might indicate a naming conflict.`);
  }
  themeRegistry.set(theme.name, theme);
};

export const getThemes = (): Theme[] => 
  Array.from(themeRegistry.values()).sort((a, b) => a.label.localeCompare(b.label));

export const getAvailableThemeNames = (): string[] => 
  Array.from(themeRegistry.keys());

export const getThemeByName = (name: string): Theme => {
  const theme = themeRegistry.get(name);
  if (!theme) {
    throw new Error(`Theme "${name}" not found. Available themes: ${getAvailableThemeNames().join(', ')}`);
  }
  return theme;
}; 