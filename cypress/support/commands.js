import loginLocators from "../integration/features/locators/loginLocators.json"
import loginData from "../integration/features/fixtures/loginData.json"
import "./index.js"
import 'cypress-time-marks'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test due to uncaught exceptions
  return false;
});

Cypress.Commands.add('Login', () => {

    cy.visit('https://social-dev.traderverse.io/login')
    cy.get(loginLocators.userEmail).type(loginData.useremail)
    cy.get(loginLocators.password).type(loginData.password)
    cy.get(loginLocators.btnLogin).click({ force: true }).timeMark('visit')
})


Cypress.Commands.add('routsRun', () => {

    cy.intercept('/api/posts').as('newPost')
    cy.intercept('GET', '//api/market?filterType=gainer').as('stockList')

    cy.intercept('/api/auth/login', (req) => {
        const start = Date.now()
        
        req.continue(res => {
            res.headers.responseTime = Date.now() - start;
          })
    }).as('login')


})






