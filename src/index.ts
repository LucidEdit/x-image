import { toPng } from "html-to-image";
import { themes } from "./themes";
import { getThemeByName } from "./lib/get-theme-by-name";
import { injectCustomCSS } from "./lib/inject-custom-css";
import { applyStylesToHTML } from "./lib/apply-styles-to-html";
import { loadFonts } from "./lib/load-fonts";

export async function createBeautifulTextImage(
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

  if (themeObj.fontLinks?.length) {
    await loadFonts(themeObj.fontLinks);
  }

  let styleTag: HTMLStyleElement | null = null;
  if (themeObj.customCSS) {
    styleTag = injectCustomCSS(themeObj.customCSS);
  }

  const styledElement = applyStylesToHTML(rawHtml, themeObj);
  document.body.appendChild(styledElement);

  await new Promise((resolve) => setTimeout(resolve, 100));

  const themeWidth = parseInt(String(themeObj.wrapperStyle.width)) || 1000;
  const pixelRatio = 2;

  const dataUrl = await toPng(styledElement, {
    pixelRatio,
    backgroundColor: String(themeObj.wrapperStyle.backgroundColor || "#ffffff"),
    canvasWidth: themeWidth * pixelRatio,
    canvasHeight: styledElement.offsetHeight * pixelRatio,
    skipAutoScale: false,
  });

  document.body.removeChild(styledElement);
  if (styleTag) {
    document.head.removeChild(styleTag);
  }

  const fontStyle = document.querySelector("style[data-injected-fonts]");
  if (fontStyle) {
    document.head.removeChild(fontStyle);
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
