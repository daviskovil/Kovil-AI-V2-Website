import { chromium } from 'playwright';

const htmlPath = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/hero-vertex-ai-render.html';
const outPath  = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/vertex-ai-hero-flat-2d-v4.png';

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 900, height: 900 });
await page.goto('file:///' + htmlPath);
await page.waitForTimeout(1000); // Allow fonts/shadows to render
await page.screenshot({
  path: outPath,
  clip: { x: 60, y: 20, width: 780, height: 780 },
  omitBackground: true,  // transparent PNG so it floats perfectly
});
await browser.close();
console.log('DONE:', outPath);
