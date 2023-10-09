require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import dashboardData from "../features/fixtures/dashboardData.json"
import errorsData from "../features/fixtures/errorsData.json"
import 'cypress-time-marks'


describe('Tradverse dashboard', () => {

    before(() => {
        cy.clearLocalStorage()
        cy.Login();
        cy.viewport(1920, 1200);
        cy.wait(50000);
    });

    beforeEach(() => {
        cy.routsRun()
    })

    it('Create and Delete Post', function () {

        // Post list visibility on dashboard
//        cy.wait('@login').then((interception) => {
 //           cy.wait(1000);
 //           cy.log('API Response time:', interception.response.headers.responseTime);

  //      });
        cy.log();
  //      cy.get(dashboardLocators.postList).should("be.visible")
  //      .timeSince('visit', 'page load time',  120000, true)

        // Creating new post        
        cy.get(dashboardLocators.postsomethig).click()
        cy.get(dashboardLocators.postTextarea).first().type(dashboardData.testPostText)
        cy.get(dashboardLocators.postPublishButton).click()

        // Waiting for new post visibility
        cy.wait('@newPost')
        cy.contains(dashboardData.testPostText).should("be.visible")
        cy.wait(6000);

        // Deleting new post
        cy.get(dashboardLocators.postOptionMenuButton).eq(0).click()
        cy.xpath(dashboardLocators.postDeleteButton).click()
        cy.xpath(dashboardLocators.postDelConfirmButton).click()


        // Post delete assertion
        cy.xpath(dashboardLocators.postDelAlert).should('have.text', dashboardData.postDelAlertText)
    })

    it('Add Widget', () => {

        //Widgets cards visibility
        cy.wait(6000);
        cy.get(dashboardLocators.marqueeSlider).should("be.visible")
       // cy.xpath(dashboardLocators.profileCard).should("be.visible")
        cy.xpath(dashboardLocators.widgetsScroller).scrollTo("bottom")
        cy.get(dashboardLocators.investmentCard).should("be.visible")
        cy.log();
     //   cy.xpath(dashboardLocators.nftCard).should("be.visible")

        // Add new widget
        cy.xpath(dashboardLocators.addWidgetButton).click()
        cy.xpath(dashboardLocators.selectWidgetType).click()
        cy.xpath(dashboardLocators.selectScreenerButton).click()
        cy.xpath(dashboardLocators.nextButton).click()
        cy.wait(6000);

        // Select grid layout
        cy.wait('@stockList')
        cy.xpath(dashboardLocators.stockList).should("be.visible")
        cy.xpath(dashboardLocators.gridLayout).click();
        cy.get(dashboardLocator.selectWidgetchart).click();
        cy.xpath(dashboardLocator.slectnextwidgetpage).click();
        cy.xpath(dashboardLocators.submitWidgetButton).click()

        // New widget visibility
        cy.xpath(dashboardLocators.widgetsScroller).scrollTo("bottom")
        cy.xpath(dashboardLocators.newWidgetVisiblity).should("be.visible")

        // Delete widget
        cy.xpath(dashboardLocators.widgetOptionMenuButton).click()
        cy.xpath(dashboardLocators.widgetDeleteButton).click()
        cy.xpath(dashboardLocators.widgetDelConfirmButton).click()


    })

 //   after(() => {
//        cy.clearLocalStorage()
 //   });


})