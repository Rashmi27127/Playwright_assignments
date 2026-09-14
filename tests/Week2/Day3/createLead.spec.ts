import { test, expect } from '@playwright/test';

test('Create Lead using CSS Selectors', async ({ page }) => {

    // 1. Navigate to URL
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // 2. Enter username
    await page.locator('#username').fill('democsr2');

    // 3. Enter password
    await page.locator('#password').fill('crmsfa');

    // 4. Click Login
    await page.locator('.decorativeSubmit').click();

    // 5. Click CRM/SFA
    await page.locator('text=CRM/SFA').click();

    // 6. Click Leads
    await page.locator('a[href*="lead"]').first().click();

    // 7. Click Create Lead
    await page.locator('a[href*="createLead"]').click();

    // 9. Fill Company Name
    await page.locator('#createLeadForm_companyName').fill('TestLeaf');

    // 10. Fill First Name
    await page.locator('#createLeadForm_firstName').fill('Rashmi');

    // 11. Fill Last Name
    await page.locator('#createLeadForm_lastName').fill('QA');

    // 12. Fill Salutation
    await page.locator('#createLeadForm_personalTitle').fill('Ms');

    // 13. Fill Title
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');

    // 14. Fill Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill('500000');

    // 15. Fill Department
    await page.locator('#createLeadForm_departmentName').fill('Testing');

    // 16. Locate Source dropdown using CSS selector
    const sourceDropdown = page.locator('#createLeadForm_dataSourceId');

    // 17 & 18. Iterate through all Source dropdown options
    const options = sourceDropdown.locator('option');

    const count = await options.count();

    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).textContent());
    }

    // 19. Fill Phone Number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

    // 20. Click Create Lead
    await page.locator('input[value="Create Lead"]').click();

});