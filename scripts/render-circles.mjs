import { chromium } from 'playwright';

const htmlPath = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/hero-homepage-circles-render.html';
const outPath  = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/hero-homepage-circles-v2.png';

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 900, height: 900 });
await page.goto('file:///' + htmlPath);
await page.waitForTimeout(600);
await page.screenshot({
  path: outPath,
  clip: { x: 0, y: 0, width: 900, height: 900 },
  omitBackground: true,  // transparent PNG so it blends with any page background
});
await browser.close();
console.log('DONE:', outPath);
