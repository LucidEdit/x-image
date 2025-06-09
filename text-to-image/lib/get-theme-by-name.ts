import { Theme } from "../types";
import { themes } from "../themes";

export function getThemeByName(name: string): Theme {
  const theme = themes.find((t) => t.name === name);
  if (!theme) {
    throw new Error(`Theme "${name}" not found`);
  }
  return theme;
}
