import { chromium } from 'playwright';

const htmlPath = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/hero-homepage-circles-render-v4.html';
const outPath  = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/hero-homepage-circles-v3.png';

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 900, height: 900 });
await page.goto('file:///' + htmlPath);
await page.waitForTimeout(1000); // Allow fonts, shadows, and icons to render fully
await page.screenshot({
  path: outPath,
  clip: { x: 0, y: 0, width: 900, height: 900 },
  omitBackground: true,  // transparent PNG to match body theme
});
await browser.close();
console.log('Successfully rendered 3D hero image to:', outPath);
