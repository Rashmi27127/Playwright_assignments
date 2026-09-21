import { test } from "@playwright/test";

test('Handle JavaScript Prompt Dialog', async ({ page }) => {

    page.once('dialog', async (dialog) => {

        console.log(dialog.type());
        console.log(dialog.message());

        await dialog.accept('Playwright');
    });

    await page.goto('https://www.leafground.com/alert.xhtml');

    await page.locator('//span[text()="Show"]').nth(4).click();

});