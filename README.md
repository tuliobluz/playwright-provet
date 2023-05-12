## e2e with playwright 

### Technologies

* [Playwright](https://playwright.dev/): Playwright enables reliable end-to-end testing for modern web apps.

### Requirements

- [Node.js](https://nodejs.org/en/download/) +10.17 installed;

### How to set up

`npm install` will install all the dependencies

### Folders Structures


* `playwright`
    * `e2e` Where the specification of tests should be created
        * `demo.spec.js`
    * `pages` Where set of data located in a file.
    * `.github/workflows` 
        * `playwright.yml ` Commands to be reused along the project 
    

### How to run

#### Run via terminal/headless mode

`npm run e2e:allTests` will run all the tests

`npm run e2e:openReport` will open locally report 


