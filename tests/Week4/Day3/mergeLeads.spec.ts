
import { test, expect } from '@playwright/test';

test('Merge two leads using window handling', async ({ page }) => {

    // Launch application
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // Enter username
    await page.locator('#username').fill('DemoSalesManager');

    // Enter password
    await page.locator('#password').fill('crmsfa');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Click CRM/SFA
    await page.getByText('CRM/SFA').click();

    // Click Leads
    await page.getByRole('link', { name: 'Leads' }).click();

    // Click Merge Leads
    await page.getByRole('link', { name: 'Merge Leads' }).click();

    // ---------------- FROM LEAD ----------------

    // Wait for From Lead popup
    const fromLeadPromise = page.waitForEvent('popup');

    // Click From Lead Lookup
    await page.getByRole('link', { name: 'Lookup' }).nth(0).click();

    // Capture From Lead popup
    const fromLeadPage = await fromLeadPromise;

    // Select first Lead ID
    await fromLeadPage.locator('a.linktext').first().click();

    // ---------------- TO LEAD ----------------

    // Wait for To Lead popup
    const toLeadPromise = page.waitForEvent('popup');

    // Click To Lead Lookup
    await page.getByRole('link', { name: 'Lookup' }).nth(1).click();

    // Capture To Lead popup
    const toLeadPage = await toLeadPromise;

    // Select second Lead ID
    await toLeadPage.locator('a.linktext').first().click();

    // ---------------- MERGE ----------------

    // Handle confirmation alert
    page.once('dialog', async dialog => {

        console.log('Alert Type:', dialog.type());
        console.log('Alert Message:', dialog.message());

        await dialog.accept();
    });

    // Click Merge button
    await page.getByRole('link', { name: 'Merge', exact: true }).click();

    // Assert page title
    await expect(page).toHaveTitle('Merge Leads | opentaps CRM');
});
