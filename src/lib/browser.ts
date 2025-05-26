import puppeteer, { Browser, Page } from "puppeteer";

export async function createBrowser(): Promise<{
  browser: Browser;
  page: Page;
}> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  return { browser, page };
}
