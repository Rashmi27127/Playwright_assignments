import { test } from '@playwright/test';

test('Create Lead', async ({ page }) => {

    // 1. Navigate to Leaftaps
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // 2. Enter username
    await page.locator('#username').fill('Demosalesmanager');

    // 3. Enter password
    await page.locator('#password').fill('crmsfa');

    // 4. Click Login
    await page.locator('.decorativeSubmit').click();

    // 5. Click CRM/SFA
    await page.locator('a[href*="crmsfa"]').click();

    // 6. Click Leads
    await page.getByText('Leads', { exact: true }).click();

    // 7. Click Create Lead
    await page.getByText('Create Lead', { exact: true }).click();

    // 8. Fill Company Name
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');

    // 9. Fill First Name
    await page.locator('#createLeadForm_firstName').fill('Rashmi');

    // 10. Fill Last Name
    await page.locator('#createLeadForm_lastName').fill('Jain');

    // 11. Fill Salutation
    await page.locator('#createLeadForm_personalTitle').fill('Ms');

    // 12. Fill Title
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');

    // 13. Fill Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill('500000');

    // 14. Fill Department
    await page.locator('#createLeadForm_departmentName').fill('Testing');

    // 15. Fill Phone Number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

    // 16. Click Create Lead button
    await page.locator('input[value="Create Lead"]').click();
});