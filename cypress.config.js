const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',   //for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    "include": ["./node_modules/cypress", "cypress/**/*.js"],
    baseUrl: "https://automationexercise.com/"
  },
});
