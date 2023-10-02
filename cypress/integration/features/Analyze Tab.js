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

it('User Analyze', function () {

         cy.wait(2000);
         cy.get('#Layer_hamburger').should("be.visible");
         cy.get('#Layer_hamburger').click();
         cy.wait(2000);
         cy.get(':nth-child(4) > .sidebar-link').click();
         //Analyze tab add watchlist

         cy.get(':nth-child(1) > .watchlist__card > .watchlist__card--head > .btn').click();
         cy.get('.modal--body > :nth-child(1)').type('Test');
         cy.get('.loginbtn > .btn').click();
         cy.wait(1000);
         cy.contains('Test').should('be.visible');
         cy.contains('Test').click();
         cy.wait(600);
     //    cy.get(':nth-child(1) > .accordion__item__body > :nth-child(1)').click();
         cy.get(':nth-child(2) > .watchlist__card > .watchlist__card--head > .btn').click();
         cy.get('.modal--header > .search > .change').type('aapl').type('{enter}');
         cy.get(':nth-child(1) > .custom_checkbox').click();
         cy.get('.primary').click();

         cy.get("img[src='https://cdn-images.traderverse.io/stocks/AAPL_NASDAQ.png']").should("be.visible");
         cy.wait(2000);
         cy.get('.active > .icon_more > .svg_icon > svg').click();
         cy.get('.watchlist__card--body-item.active > .icon_more > .popover_content > :nth-child(6)').click();
         cy.get('.loginbtn > .btn').click();



          cy.get(':nth-child(1) > .watchlist__card').should("be.visible");
          //Screener
          cy.get('.menu > ul > :nth-child(3) > a').click();
          cy.wait(2000);
          //Comparer
          cy.get('.menu > ul > :nth-child(5) > a').click();
          cy.wait(2000);
  //        cy.get('.selectinfoMarketdv').click();
  //        cy.get('.selectitem02').click();
  //        cy.get('.board__list--new > .title').click();
 //         cy.wait(400000);
  //        cy.get('.modal--body > :nth-child(1)').type('Testing')
   //       cy.get('.loginbtn > .btn').click();
    //      cy.get('#searchTextInput').type('aapl');
   //       cy.get('#sc_suggestion > :nth-child(2)').click();
          cy.wait(4000);

          //Birdseye
          cy.get('.menu > ul > :nth-child(6) > a').click();
          cy.wait(2000);
          //Charts
          cy.get('.menu > ul > :nth-child(7) > a').click();
          cy.get(':nth-child(2) > p').click();
          cy.get(':nth-child(1) > .card--chart--detail > .chart_view').should("be.visible");
          cy.get("img[src='https://cdn-images.traderverse.io/stocks/OXY_XNYS.png']").should("be.visible");
          cy.get ('.headingChartDv > .btn').click();
          cy.get('.change').type('aapl')
          cy.wait(3000);
          //Paper
          cy.get(':nth-child(9) > a').click();
          cy.get('.articles-content').scrollIntoView().should("be.visible");


         });
             });
