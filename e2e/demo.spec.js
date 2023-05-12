const { test, expect, Page } = require("@playwright/test");
const { DemoPage } = require("../pages/demopage");
const testData = require("../resources/testData").testData;
const { messages, urls } = require("../resources/testData");
const generateEmail = require("../helpers/emailGenerator").default;

test.describe("provet Cloud Request Demo @e2e", () => {
  let page = Page;
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    const demoPage = new DemoPage(page);
    await page.goto(urls.REQUEST_DEMO);
    await demoPage.acceptCookies();
  });
  test("success Contact", async () => {
    const email = generateEmail(testData);
    const demoPage = new DemoPage(page);

    await demoPage.fillForm(testData, email);
    await demoPage.acceptLegalConsent();
    await demoPage.clickSubmitButton();

    await expect(demoPage.bannerSuccessPage).toHaveText(messages.SUCCESS_CONTACT);
    await expect(demoPage.brochureDownload(urls.BROCHURE)).toHaveText(messages.BROCHURE);
  });

  test("required fields", async () => {
    const demoPage = new DemoPage(page);
    await demoPage.clickSubmitButton();

    const requiredMsgQnty = await demoPage.getRequiredMsg();
    expect(requiredMsgQnty).toHaveLength("8");
  });
});
