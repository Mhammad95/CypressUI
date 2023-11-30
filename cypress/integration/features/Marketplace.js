require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import 'cypress-time-marks'


describe('Tradverse User Profiles', () => {
    before(() => {
        cy.clearLocalStorage()
        cy.Login()
        cy.viewport(1920, 1200);
        cy.wait(5000);
    });

it('User Profile', function () {

         cy.get('#Layer_hamburger').click();
         cy.wait(3000);
         cy.get(':nth-child(7) > .sidebar-link > .hide-menu').click();
         cy.get('.marketContent > .body > :nth-child(4) > :nth-child(2)').should("be.visible");
         //itemGrid
         cy.get('.itemGrid > :nth-child(1)').should("be.visible");
         cy.get('.itemGrid > :nth-child(1)').should("be.visible");
         cy.get('#Layer_hamburger').click();
         cy.get(':nth-child(5) > .sidebar-link').click();
         cy.get('.actions > :nth-child(1) > .app--input > .select-wrapper > .dropdown-trigger').click();
         cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[2]").click();
        // cy.xpath('//li[@id="select-options-d8a38746-7140-a977-b1e5-cd5db33f48bc1"]').click();



               });


         });