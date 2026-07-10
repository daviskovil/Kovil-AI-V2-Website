import { chromium } from 'playwright';

const items = [
  {
    html: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/og-make-automation.html',
    out: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/og-hire-make-automation-experts.png'
  },
  {
    html: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/og-voiceflow.html',
    out: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/og-hire-voiceflow-developers.png'
  },
  {
    html: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/og-llamaindex.html',
    out: 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public/og-hire-llamaindex-engineers.png'
  }
];

const browser = await chromium.launch();
const page    = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });

for (const item of items) {
  console.log('Rendering:', item.html);
  await page.goto('file:///' + item.html);
  await page.waitForTimeout(500); // Allow fonts/gradients to render
  await page.screenshot({
    path: item.out,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  console.log('Saved:', item.out);
}

await browser.close();
console.log('All OG images rendered successfully!');
