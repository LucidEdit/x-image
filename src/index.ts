// index.ts
import puppeteer from 'puppeteer';
import { applyPreset } from './lib/presets';
import { wrapHtml } from './lib/wrap-html';
import type { RenderToImageOptions } from './types';

export async function renderToImage(
  htmlOrBody: string,
  options: RenderToImageOptions = {}
): Promise<Buffer> {
  const {
    markdown,
    body,
    wrap = true,
    preset,
    delayMs = 0,
    format = 'png',
    quality = 100,
    fullPage = true,
    darkMode = false,
    transparent = false,
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
    ? `<p>${markdown.replace(/\n/g, '<br/>')}</p>`
    : body || htmlOrBody;

  const finalHtml = wrap
    ? wrapHtml(finalBody, { fontLinks, customCSS, backgroundColor, transparent })
    : finalBody;

  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();

    await page.setViewport({ width, height, deviceScaleFactor: scale });

    if (darkMode) {
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
    }

    await page.setContent(finalHtml, { waitUntil: ['networkidle0', 'load'] });

    if (delayMs > 0) await new Promise(resolve => setTimeout(resolve, delayMs));

    return await page.screenshot({
      type: format,
      quality: format === 'jpeg' ? quality : undefined,
      fullPage,
      omitBackground: transparent,
    }) as Buffer;
  } finally {
    await browser.close();
  }
}

export default renderToImage;
