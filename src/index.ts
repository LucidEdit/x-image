// index.ts
import { createBrowser } from "./lib/browser";
import { applyPreset } from "./presets";
import { wrapHtml } from "./lib/wrap-html";
import type { RenderToImageOptions } from "./types";

export async function renderToImage(
  htmlOrBody: string,
  options: RenderToImageOptions = {}
): Promise<Buffer> {
  const {
    markdown,
    body,
    wrap = true,
    preset,
    format = "png",
    transparent = false,
    maxLength,
  } = options;

  const presetDefaults = applyPreset(preset, options);
  const mergedOptions = { ...presetDefaults, ...options };

  const {
    width = 1200,
    height = 800,
    scale = 2,
    fontLinks,
    customCSS,
    backgroundColor,
  } = mergedOptions;

  const finalBody = markdown
    ? `<p>${markdown.replace(/\n/g, "<br/>")}</p>`
    : body || htmlOrBody;

  if (maxLength && finalBody.length > maxLength) {
    throw new Error(`Content length ${finalBody.length} exceeds maxLength limit of ${maxLength} characters`);
  }

  const finalHtml = wrap
    ? wrapHtml(finalBody, {
        fontLinks,
        customCSS,
        backgroundColor,
        transparent,
      })
    : finalBody;

  const { browser, page } = await createBrowser();

  try {
    await page.setViewport({ width, height, deviceScaleFactor: scale });

    await page.setContent(finalHtml, { waitUntil: ["networkidle0", "load"] });

    return (await page.screenshot({
      type: format,
      quality: format === "jpeg" ? 100 : undefined,
      fullPage: true,
      omitBackground: transparent,
    })) as Buffer;
  } finally {
    await browser.close();
  }
}

export default renderToImage;
