import { toPng } from "html-to-image";
import { Theme } from "./types";
import { themes } from "./themes";

function getThemeByName(name: string): Theme {
  const theme = themes.find((t) => t.name === name);
  if (!theme) {
    throw new Error(`Theme "${name}" not found`);
  }
  return theme;
}

function injectCustomCSS(css: string): HTMLStyleElement {
  const styleTag = document.createElement("style");
  styleTag.setAttribute("data-injected-theme-css", "true");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
  return styleTag;
}

function applyStylesToHTML(rawHtml: string, theme: Theme): HTMLElement {
  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, theme.wrapperStyle);

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = rawHtml;

  Array.from(tempContainer.children).forEach((child) => {
    const tagName = child.tagName.toLowerCase();
    const styles = theme.elementStyles?.[tagName];
    if (styles) {
      Object.assign((child as HTMLElement).style, styles);
    }
    wrapper.appendChild(child);
  });

  return wrapper;
}

export async function renderHtmlToImageClientSide(
  rawHtml: string,
  options: {
    theme?: string;
    returnDataUrlOnly?: boolean;
    maxLength?: number;
  } = {}
): Promise<string | void> {
  const {
    theme = "book-excerpt",
    returnDataUrlOnly = false,
    maxLength,
  } = options;

  if (maxLength !== undefined && rawHtml.length > maxLength) {
    throw new Error(
      `rawHtml exceeds the maximum allowed length of ${maxLength} characters`
    );
  }

  const themeObj = getThemeByName(theme);

  let styleTag: HTMLStyleElement | null = null;
  if (themeObj.customCSS) {
    styleTag = injectCustomCSS(themeObj.customCSS);
  }

  const styledElement = applyStylesToHTML(rawHtml, themeObj);
  document.body.appendChild(styledElement);

  const themeWidth = parseInt(themeObj.wrapperStyle.width as string) || 1000;
  const pixelRatio = 2;

  const dataUrl = await toPng(styledElement, {
    pixelRatio,
    backgroundColor: themeObj.wrapperStyle.backgroundColor || "#ffffff",
    canvasWidth: themeWidth * pixelRatio,
    canvasHeight: styledElement.offsetHeight * pixelRatio,
    skipAutoScale: false,
  });

  document.body.removeChild(styledElement);
  if (styleTag) {
    document.head.removeChild(styleTag);
  }

  if (returnDataUrlOnly) {
    return dataUrl;
  }

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `rendered-image-${theme}.png`;
  link.click();
}

export const availableThemes = themes.map((t) => t.name);
