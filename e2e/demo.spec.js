// @ts-check
const { test, expect } = require('@playwright/test');

test('has text', async ({ page }) => {
  await page.goto('/request-demo');

  await page.locator('id=hs-eu-confirmation-button').click();

  await page.getByLabel('First name').fill('secret');
  await page.getByLabel('Last name').fill('secret');
  await page.getByLabel('Clinic name').fill('secret');
  await page.locator('.free-trial .hs_email input').fill('secretsecrett@gmail.com');
  await page.getByLabel('Phone number').fill('+33 177 444 4444');
  await page.getByLabel('Job Title').fill('QA Engineer');
  await page.getByLabel('Country').selectOption('Germany');
  // Expect a title "to contain" a substring.
  await page.getByLabel('By submitting you accept our ').click();
  await page.getByRole('button', { name: 'Submit' }).click({ force: true });
});
