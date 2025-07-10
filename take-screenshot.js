import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function takeScreenshot() {
    console.log('🚀 Starting screenshot capture...');
    
    // Launch browser
    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Set viewport size
        await page.setViewportSize({ width: 1200, height: 800 });
        
        // Navigate to the HTML file
        const htmlPath = join(__dirname, 'sample-screen.html');
        await page.goto(`file://${htmlPath}`);
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');
        
        // Take screenshot
        const screenshotPath = join(__dirname, 'sample-screen-screenshot.png');
        await page.screenshot({
            path: screenshotPath,
            fullPage: true
        });
        
        console.log(`✅ Screenshot saved to: ${screenshotPath}`);
        
    } catch (error) {
        console.error('❌ Error taking screenshot:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

// Run the screenshot function
takeScreenshot().catch(console.error);