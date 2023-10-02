require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import 'cypress-time-marks'


describe('Tradverse Explore Page', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.Login()
        cy.viewport(1920, 1200);
        cy.wait(5000);
    });

it('User Explore', function () {

         cy.wait(2000);
         cy.get('#Layer_hamburger').should("be.visible");
         cy.get('#Layer_hamburger').click();
         cy.wait(2000);
         //Explore button
         cy.get('.scroll-sidebar > .sidebar-nav > #sidebarnav > :nth-child(3) > .sidebar-link').click();
         cy.wait(5000);
         //News
         cy.get('.discovery > :nth-child(2)').should("be.visible");
         //influencers
         cy.get('[data-v-c998f7c2=""][style="cursor: grab;"]').should("be.visible");
                  cy.get(':nth-child(3) > .align-self-baseline > .text--warning').click();
                  cy.url().should('include', '/Influencers');
                  cy.get('.menu > ul > :nth-child(1) > a').click();
         //Companies
         cy.get('.discovery > :nth-child(6)').should("be.visible");
         cy.wait(4000);
                  cy.get(':nth-child(5) > .align-self-baseline > .text--warning').click();
                  cy.url().should('include', '/Companies');
                  cy.get('.menu > ul > :nth-child(1) > a').click();
         //Groups
         cy.get('.allinfoGrid.nftsCardGrid').scrollIntoView().should("be.visible");
                  cy.get(':nth-child(7) > .align-self-baseline > .text--warning').click();
                  cy.url().should('include', '/Groups');
                  cy.get('.menu > ul > :nth-child(1) > a').click();

         //Stocks -- Take so much time to load
         cy.get('.discovery > :nth-child(10)').scrollIntoView().should("be.visible");
         cy.get('.discovery--container').scrollIntoView().should("be.visible");
         cy.get(':nth-child(9) > .align-self-baseline > .text--warning').click();
                           cy.url().should('include', '/Stocks');
                           cy.get('.menu > ul > :nth-child(1) > a').click();

         //NFTS
         cy.get('.discovery > :nth-child(12)').scrollIntoView().should("be.visible");
                  cy.get(':nth-child(11) > .align-self-baseline > .text--warning').click();
                  cy.url().should('include', '/NFTs');
                  cy.get('.menu > ul > :nth-child(1) > a').click();
         //Crypto
         cy.get('.discovery > :nth-child(14)').scrollIntoView().should("be.visible");
                  cy.get(':nth-child(13) > .align-self-baseline > .text--warning').click();
                  cy.url().should('include', '/Crypto');
                  cy.get('.menu > ul > :nth-child(1) > a').click();




});

it('User Explore Remianing Tabs', function () {

         cy.wait(2000);
         cy.get('#Layer_hamburger').should("be.visible");
         cy.get('#Layer_hamburger').click();
         cy.wait(2000);
         //Explore button
         cy.get('.scroll-sidebar > .sidebar-nav > #sidebarnav > :nth-child(3) > .sidebar-link').click();
          cy.wait(4000);


          //Market
          cy.get('.menu > ul > :nth-child(2) > a').click();
          cy.wait(4000);
          cy.get('.SecondsectionDv').should("be.visible");
          //sectorRotations
          cy.get('.ThirdsectionDv').scrollIntoView().should("be.visible");
          //MarketOverview
          cy.get('.fourthSectionDv > .card > .card-body').scrollIntoView().should("be.visible");
          //tansactions
          cy.get('.gridChangedv').scrollIntoView().should("be.visible");
          //Gainers
          cy.get('.gridChangeTwodv').scrollIntoView().should("be.visible");
          //News
          cy.get('.infothirdDv > .trendsGridItem > :nth-child(1)').scrollIntoView().should("be.visible");

          //Paper Tab
           cy.get('.menu > ul > :nth-child(4) > a').click();
           cy.wait(2000);
           cy.get('.container-fluid').should("be.visible");

           //News
           cy.get('.menu > ul > :nth-child(5) > a').click();
           cy.wait(1000);
           cy.get('.item01').scrollIntoView().should("be.visible");
           cy.get('.item02').scrollIntoView().should("be.visible");
           //trendingtopics
           cy.get('.secondSectionDv').scrollIntoView().should("be.visible");
           cy.get('.secondSectionDv > .gridInfoDv > :nth-child(1)').scrollIntoView().should("be.visible");
           cy.get('.secondSectionDv > .gridInfoDv > :nth-child(2)').scrollIntoView().should("be.visible");
           //Contributors
           cy.get('.thirdSectionDv').scrollIntoView().should("be.visible");

           //Trends
           cy.get('.menu > ul > :nth-child(6) > a').click();
           cy.get(':nth-child(1) > :nth-child(1) > .card-body').should("be.visible");

           //Glossary
           cy.get('.menu > ul > :nth-child(7) > a').click();

           //topsearches
         //  cy.get('#searchTextInput').type("zero").type('{enter}');
         //  cy.wait(1000);
         //  cy.get('.mainGridBoxDv').should("be.visible");
          // cy.get('.topSearches').scrollIntoView().should("be.visible");
         //  cy.get('.container-fluid > :nth-child(1) > :nth-child(4)').scrollIntoView().should("be.visible");


           //Wiki
           cy.get(':nth-child(8) > a').click();
           //seacrhbars
           cy.get('.SelectionDv').should("be.visible");
           //Assests
           cy.get('.CardAllDv').should("be.visible");



});
/*
it('User Explore Market Tabs', function () {


 });

it('User Explore Paper Tabs', function () {


 });

it('User Explore News Tabs', function () {


  });

it('User Explore Trends Tabs', function () {


  });

it('User Explore Glossary Tabs', function () {


    });

it('User Explore Wiki Tabs', function () {


  });
*/


    });
