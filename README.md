# End-to-end Testing with Playwright

## Introduction

This guide will explain how to set up and run end-to-end tests with Playwright. Playwright is a powerful testing tool that enables reliable end-to-end testing for modern web apps.

## Technologies

* [Playwright](https://playwright.dev/): a testing tool that enables reliable end-to-end testing for modern web apps.
* [Node.js](https://nodejs.org/en/download/) +10.17: a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Requirements

- Node.js +10.17 installed

## Folder Structure

The following is the suggested folder structure for Playwright tests:

* `playwright`
    * `.github`: contains a template for GitHub actions.
    * `e2e`: contains the specifications for the tests.
        * `demo.spec.js`: a sample specification.
    * `helpers`: contains helper functions.
    * `pages`: contains data located in a file.
    * `resources`: contains test data and files to be used in tests.

## How to Set Up

To install all the necessary dependencies, run `npm install`.

## How to Run

To run the tests, you can use either the terminal or the headless mode. The following commands will be useful:

* `npm run e2e:allTests`: runs all the tests.
* `npm run e2e:openReport`: opens the local report.

The tests run in parallel, and the default configuration is set up to run on Chromium desktop and mobile Chrome Pixel 5. However, it is possible to set up the tests to run on Edge, Firefox, and mobile emulators.

## GitHub Actions

The following is the GitHub Actions workflow that runs the Playwright tests:

```
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 16
    - name: Lint check
      run: npm run lint
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 15
```

In the action summary, you can download the artifacts and view the HTML report with the test scenarios.

## Additional Information

The project uses `eslint` for linting. 

In the future, you can add component tests that use the front-end source code by following the steps outlined in [Playwright's documentation](https://playwright.dev/docs/test-components). 

To run the component tests, use the command `npm run components:tests`.