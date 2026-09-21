import { test, expect } from '@playwright/test';

test('Input and Assertion Practice', async ({ page }) => {

    // Part 1 - Navigate to the page
    await page.goto('https://leafground.com/input.xhtml');

    // Part 2 - Verify that the textbox is disabled
    const disabledBox = page.getByPlaceholder('Disabled');
    await expect(disabledBox).toBeDisabled();

    // Part 3 - Verify that the textbox is editable
    const nameBox = page.getByPlaceholder('Babu Manickam');
    await expect(nameBox).toBeEditable();
    await nameBox.fill('Rashmi');

    // Part 4 - Soft assertion
    // This is intentionally expected to fail because the textbox is enabled
    await expect.soft(nameBox).toBeDisabled();

    // Part 5 - Clear existing text and enter new text
    await nameBox.fill('Playwright Learning');
    await page.waitForTimeout(5000);
});