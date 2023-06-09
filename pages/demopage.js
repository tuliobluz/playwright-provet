exports.DemoPage = class DemoPage {
  /**
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.cookieConfirmation = page.locator("id=hs-eu-confirmation-button");
    this.firstName = page.getByLabel("First name");
    this.lastName = page.getByLabel("Last name");
    this.clinicName = page.getByLabel("Clinic name");
    this.email = page.locator(".free-trial .hs_email input");
    this.phoneNumber = page.getByLabel("Phone number");
    this.jobTitle = page.getByLabel("Job Title");
    this.country = page.getByLabel("Country");
    this.legalConsent = page.getByLabel("By submitting you accept our ");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.bannerSuccessPage = page.locator(".banner-content.page-center");
    this.brochureDownload = (url) => page.locator(`a[href="${url}"]`);
    this.getElementsByText = (text) => page.getByText(text);
    this.requiredMessages = ".hs-error-msgs";
  }

  async goto(path) {
    await this.page.goto(path);
  }

  async acceptCookies() {
    await this.cookieConfirmation.click();
  }

  async fillForm(data, email) {
    await this.firstName.fill(data.FIRST_NAME);
    await this.lastName.fill(data.LAST_NAME);
    await this.clinicName.fill(data.CLINIC_NAME);
    await this.email.fill(email);
    await this.phoneNumber.fill(data.PHONE_NUMBER);
    await this.jobTitle.fill(data.JOB_TITLE);
    await this.country.selectOption(data.COUNTRY);
  }

  async acceptLegalConsent() {
    await this.legalConsent.click();
  }

  async clickSubmitButton() {
    await this.submitButton.first().click();
  }

  async getRequiredMsg() {
    // eslint-disable-next-line
    const elements = await this.page.$$(this.requiredMessages);
    return elements.length;
  }
};
