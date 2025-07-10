import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a reasonable size
  await page.setViewportSize({ width: 1200, height: 800 });

  // Navigate to the HTML file
  const htmlPath = path.join(__dirname, 'sample-screen.html');
  await page.goto(`file://${htmlPath}`);

  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');

  // Take a screenshot
  const screenshotPath = path.join(__dirname, 'sample-screen-screenshot.png');
  await page.screenshot({ 
    path: screenshotPath, 
    fullPage: true,
    type: 'png'
  });

  await browser.close();
  
  console.log(`Screenshot saved to: ${screenshotPath}`);
  return screenshotPath;
}

// Run the screenshot function
takeScreenshot().catch(console.error);