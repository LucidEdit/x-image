import puppeteer from 'puppeteer';

export interface RenderOptions {
  width?: number;
  height?: number;
  scale?: number;
  format?: 'png' | 'jpeg';
  quality?: number;
  fullPage?: boolean;
  darkMode?: boolean;
}

export async function renderToImage(
  html: string,
  options: RenderOptions = {}
): Promise<Buffer> {
  const {
    width = 1200,
    height = 800,
    scale = 2,
    format = 'png',
    quality = 100,
    fullPage = true,
    darkMode = false,
  } = options;

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true
  });

  try {
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({
      width,
      height,
      deviceScaleFactor: scale,
    });

    // Set color scheme if dark mode is enabled
    if (darkMode) {
      await page.emulateMediaFeatures([
        { name: 'prefers-color-scheme', value: 'dark' }
      ]);
    }

    // Set content
    await page.setContent(html, {
      waitUntil: ['networkidle0', 'load']
    });

    // Take screenshot
    const screenshot = await page.screenshot({
      type: format,
      quality: format === 'jpeg' ? quality : undefined,
      fullPage,
    });

    return screenshot as Buffer;
  } finally {
    await browser.close();
  }
}

export default renderToImage; 