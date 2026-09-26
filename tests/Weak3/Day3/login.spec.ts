import { test, expect } from '@playwright/test';

test('Login and save storage state', async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('#username').fill('democsr');

    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    await expect(page).toHaveTitle(/Leaftaps/);

    // Save login session
    await page.context().storageState({
        path: 'tests/Weak3/Day3/leafTapsLogin.json'
    });
});