const { chromium } = require('playwright');
const path = require('path');

async function takeScreenshot() {
    console.log('🚀 Starting screenshot capture...');
    
    // Launch browser
    const browser = await chromium.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--window-size=1920,1080'
        ]
    });

    try {
        const context = await browser.newContext({
            viewport: { width: 1920, height: 1080 },
            deviceScaleFactor: 1
        });
        
        const page = await context.newPage();
        
        // Navigate to the local HTML file
        const htmlPath = path.resolve(__dirname, 'sample-screen.html');
        await page.goto(`file://${htmlPath}`);
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');
        
        // Wait a bit more for dynamic content to render
        await page.waitForTimeout(2000);
        
        // Take screenshot
        const screenshotPath = path.resolve(__dirname, 'sample-screen-screenshot.png');
        await page.screenshot({
            path: screenshotPath,
            fullPage: true,
            type: 'png',
            quality: 100
        });
        
        console.log('✅ Screenshot captured successfully!');
        console.log(`📁 Screenshot saved to: ${screenshotPath}`);
        
        // Log some page info
        const title = await page.title();
        console.log(`📄 Page title: ${title}`);
        
        return screenshotPath;
        
    } catch (error) {
        console.error('❌ Error capturing screenshot:', error);
        throw error;
    } finally {
        await browser.close();
    }
}

// Run the screenshot function
takeScreenshot()
    .then((screenshotPath) => {
        console.log('\n🎉 Screenshot capture completed!');
        console.log(`📸 File location: ${screenshotPath}`);
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Screenshot capture failed:', error);
        process.exit(1);
    });