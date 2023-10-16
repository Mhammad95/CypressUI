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
        cy.wait(5000);
    });

    beforeEach(() => {
        cy.routsRun()
    })
/*
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
        cy.wait(6000);
        cy.contains(dashboardData.testPostText).should("be.visible")
        cy.wait(6000);

        // Deleting new post
        cy.get(dashboardLocators.postOptionMenuButton).eq(0).click()
        cy.xpath(dashboardLocators.postDeleteButton).click()
        cy.xpath(dashboardLocators.postDelConfirmButton).click()


        // Post delete assertion
        cy.xpath(dashboardLocators.postDelAlert).should('have.text', dashboardData.postDelAlertText)
    })
*/
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
  //      cy.xpath(dashboardLocators.selectWidgetType).click()
  //      cy.xpath(dashboardLocators.selectScreenerButton).click()
  //      cy.xpath(dashboardLocators.nextButton).click()
        cy.wait(6000);

        // Select grid layout
       // cy.wait('@stockList')
        cy.get('.gridboxWidgetManager > :nth-child(1)').should("be.visible")
        cy.get('.gridboxWidgetManager > :nth-child(5)').should("be.visible")
        cy.get('.gridboxWidgetManager > :nth-child(2)').click();
        cy.wait(6000);
        cy.get('.modal--body > :nth-child(3) > :nth-child(1)').click();
        cy.get('.btn--primary').click();
        cy.get(':nth-child(3) > :nth-child(2) > .image_wrapper').click();
        cy.get(':nth-child(7) > :nth-child(2) > .image_wrapper').click();
        cy.get('.btn--primary').click();
        cy.get('.Vue-Toastification__toast').should("be.visible")

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