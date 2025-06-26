import { getThemes, getThemeByName, getAvailableThemeNames } from "./registry";

import "./manifesto";
import "./book-excerpt";
import "./dark-mono-poster";
import "./beige-green";

export const themes = getThemes();

export { getThemeByName, getAvailableThemeNames };
