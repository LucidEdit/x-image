import { getThemes, getThemeByName, getAvailableThemeNames } from "./registry";

import "./book-excerpt";
import "./dark-mono-poster";
import "./manifesto";
import "./forest";

export const themes = getThemes();

export { getThemeByName, getAvailableThemeNames };
