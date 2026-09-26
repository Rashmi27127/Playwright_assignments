import { test, expect } from '@playwright/test';

test.use({
    storageState: 'tests/Week3/Day2/leafTapsLogin.json'
});

test('Open Leaftaps without login', async ({ page }) => {

    // Open Leaftaps directly
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // Verify Welcome/Home page
    await expect(page.locator('text=Welcome')).toBeVisible();
});