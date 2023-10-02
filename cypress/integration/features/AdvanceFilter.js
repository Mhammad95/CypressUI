require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import 'cypress-time-marks'


describe('Tradverse Advance Filters', () => {
    before(() => {
        cy.clearLocalStorage()
        cy.Login()
        cy.viewport(1920, 1200);
        cy.wait(5000);
    });

it.only('Advance Filters', function () {


    // Applying Advance Filters
    cy.get('.align-items-center > .d-flex').click()
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .oval > span').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .oval > span').click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oval > span').click()
    cy.get('.buttons > :nth-child(2)').click()


    });
    });
