// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



const { defineConfig } = require('cypress')


module.exports = defineConfig({

  projectId: "i1pa1j",
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 25000,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  pageLoadTimeout: 99300,
  watchForFileChanges: false,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixture',
  viewportWidth: 1200,
  viewportHeight: 800,
  screenshotOnRunFailure: true,



  e2e: {
    experimentalRunAllSpecs: true,
    // setupNodeEvents(on, config) {
    //     return require('.cypress/plugins/index.js')(on, config)
    // },
    baseUrl: "https://social-stage.traderverse.io/login",

    specPattern: "cypress/integration/features/*.cy.{js,jsx,ts,tsx}",
    supportFile: 'cypress/support/commands.js',
    testIsolation: false,
    // retries: {
    //   "runMode": 2,
    //   "openMode": 0
    // }
    reporter: 'mochawesome',
    reporterOptions: {
          "reportDir": "cypress/reports",
          "overwrite": false,
          "html": true,
          "json": true
  //  reportDir: 'cypress/reports', // Specify the directory where reports will be saved
  //  overwrite: false, // Set to true to overwrite previous reports
  //  html: true, // Set to true to generate an HTML report
  //  json: true // Set to true to generate a JSON report (used for merging)
}


  },
})
