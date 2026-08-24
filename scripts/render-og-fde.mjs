import { chromium } from 'playwright';

const html = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/og-fde.html';
const out  = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/og-hire-forward-deployed-engineer.png';

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto('file:///' + html);
await page.waitForTimeout(300);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('Saved:', out);
