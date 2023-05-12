const { test, expect } = require('@playwright/test');
const { DemoPage } = require('../pages/demopage');
const testDataResource = require('../resources/testData');
const generateEmail = require('../helpers/emailGenerator').default;

const testData = testDataResource.testData;
const urls = testDataResource.urls;
const messages = testDataResource.messages;

test('Success Contact Provet Cloud', async ({ page }) => {
  const demoPage = new DemoPage(page);
  const email = generateEmail(testData);
  await demoPage.goto(urls.REQUEST_DEMO);
  await demoPage.fillform(testData, email);
  await demoPage.acceptLegalConsent();
  await demoPage.clickSubmitButton();
  expect(demoPage.bannerSuccessPage).toHaveText(messages.SUCCESS_CONTACT);
  expect(demoPage.bannerSuccessPage(urls.BROCHURE)).toHaveText(messages.BROCHURE);
});
