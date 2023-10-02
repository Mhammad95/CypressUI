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
         cy.wait(2000);
         cy.get('.m-b-10').click();
         cy.get('.custom--container--sidebar > .card > .card-body').should("be.visible");
         cy.get('.profileAbout > :nth-child(1)').should("be.visible");
        cy.wait(4000);
        cy.get('.menu > ul > :nth-child(2) > a').click();
        cy.get('.coming_soon_container > h6').should("be.visible");
         cy.wait(5000);
         //Connections
         cy.get('.menu > ul > :nth-child(4) > a').click();
         cy.get('.flex_container').should("be.visible");
         //Assets
         cy.get('.menu--container > .menu > ul > :nth-child(5) > a').click();
         cy.get('.coming_soon_container > h6').should("be.visible");
         //Investment
         cy.get('.menu--container > .menu > ul > :nth-child(6) > a').click();
         cy.get('.coming_soon_container > h6').should("be.visible");
         //Accounts
         cy.get('.menu > ul > :nth-child(7) > a').click();
         cy.get('.profileAbout > .card-body > :nth-child(1)').should("be.visible");

         //exchanges row
         cy.get('.profileAbout > .card-body > :nth-child(2)').scrollIntoView().should("be.visible");
         //wallet row
  //       cy.get(':nth-child(3) > .accounts_row').scrollIntoView().should("be.visible");
         //custom
  //       cy.get('.profileAbout > .card-body > :nth-child(6)').scrollIntoView().should("be.visible");
         //purchased
   //      cy.get('.profileAbout > .card-body > :nth-child(7)').scrollIntoView().should("be.visible");
         //Feed

//          cy.get('.menu > ul > :nth-child(3) > a').click();
  //        cy.get('#Layer_hamburger').click();
    //      cy.wait(3000);
      //    cy.get('.card-body container-post-widgets').should("be.visible");


});



    })


    ;
