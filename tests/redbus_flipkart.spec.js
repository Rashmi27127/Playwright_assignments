
const { test, expect, chromium, webkit } = require('@playwright/test');

test('RedBus in Edge and Flipkart in WebKit', async () => {

    // Launch Edge browser
    const edge = await chromium.launch({
        channel: 'msedge',
        headless: false
    });

    // Create Edge browser context and page
    const edgeContext = await edge.newContext();
    const redBusPage = await edgeContext.newPage();

    // Open RedBus
    await redBusPage.goto('https://www.redbus.in');

    // Print RedBus title and URL
    console.log('RedBus Title:', await redBusPage.title());
    console.log('RedBus URL:', redBusPage.url());


    // Launch WebKit browser
    const webkitBrowser = await webkit.launch({
        headless: false
    });

    // Create WebKit browser context and page
    const webkitContext = await webkitBrowser.newContext();
    const flipkartPage = await webkitContext.newPage();

    // Open Flipkart
    await flipkartPage.goto('https://www.flipkart.com');

    // Print Flipkart title and URL
    console.log('Flipkart Title:', await flipkartPage.title());
    console.log('Flipkart URL:', flipkartPage.url());


    // Close browsers
    await edge.close();
    await webkitBrowser.close();
});

