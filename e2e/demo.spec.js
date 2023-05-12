const { test, expect, Page } = require('@playwright/test');
const { DemoPage } = require('../pages/demopage');
const testData = require('../resources/testData').testData;
const { messages, urls } = require('../resources/testData');
const generateEmail = require('../helpers/emailGenerator').default;

test.describe('Provet Cloud Request Demo', () => {
  let page = Page;
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(urls.REQUEST_DEMO);
  });

  test('Success Contact', async ({}) => {
    const email = generateEmail(testData);
    const demoPage = new DemoPage(page);

    await demoPage.fillForm(testData, email);
    await demoPage.acceptLegalConsent();
    await demoPage.clickSubmitButton();

    expect(demoPage.bannerSuccessPage).toHaveText(messages.SUCCESS_CONTACT);
    expect(demoPage.brochureDownload(urls.BROCHURE)).toHaveText(messages.BROCHURE);
  });

  test('Required fields', async ({}) => {
    const demoPage = new DemoPage(page);
    await demoPage.clickSubmitButton();

    const requiredMsgQnty = await demoPage.getRequiredMsg();
    expect(requiredMsgQnty).toHaveLength(7);
  });
});
