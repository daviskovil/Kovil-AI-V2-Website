import { chromium } from 'playwright';

const htmlPath = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/og-profiles.html';
const outPath  = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/og-profiles.png';

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto('file:///' + htmlPath);
await page.waitForTimeout(400);
await page.screenshot({
  path: outPath,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log('DONE:', outPath);
