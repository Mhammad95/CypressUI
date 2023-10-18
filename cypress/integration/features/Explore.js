require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import dashboardData from "../features/fixtures/dashboardData.json"
import 'cypress-time-marks'


describe('Tradverse Web Page', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.Login()
        cy.viewport(1920, 1200);
        cy.wait(5000);
    });

it(' Traderverse Explore', function () {

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
       //  cy.get('.discovery--container').scrollIntoView().should("be.visible");
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

it('User Explore Tabs', function () {

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
          // cy.wait(2000);
          // cy.get('.container-fluid').should("be.visible");

           //News
           cy.get('.menu > ul > :nth-child(5) > a').click();
           cy.wait(1000);
        //   cy.get('.item01').scrollIntoView().should("be.visible");
        //   cy.get('.item02').scrollIntoView().should("be.visible");
           //trendingtopics
           cy.get('.secondSectionDv').scrollIntoView().should("be.visible");
           cy.get(':nth-child(18) > .itemInfo').click();
     //      cy.get('.filterAgainstNews > :nth-child(1)').scrollIntoView().should("be.visible");
     //      cy.get("img[src='https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png']").should("be.visible");

         //  cy.get('.secondSectionDv > .gridInfoDv > :nth-child(1)').scrollIntoView().should("be.visible");
         //  cy.get('.secondSectionDv > .gridInfoDv > :nth-child(2)').scrollIntoView().should("be.visible");
           //Contributors
         //  cy.get('.thirdSectionDv').scrollIntoView().should("be.visible");

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

it('User Profile', function () {

         cy.wait(2000);
         cy.get('#Layer_hamburger').should("be.visible");
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
        // cy.get('.profileAbout > .card-body > :nth-child(2)').scrollIntoView().should("be.visible");
         //wallet row
       // cy.get(':nth-child(3) > .accounts_row').scrollIntoView().should("be.visible");

//for social stage
        // custom
       // cy.get('.profileAbout > .card-body > :nth-child(6)').scrollIntoView().should("be.visible");
        // purchased
       //  cy.get('.profileAbout > .card-body > :nth-child(7)').scrollIntoView().should("be.visible");
         //Feed


      });

it('Create and Delete Post on Dashboard', function () {

        // Post list visibility on dashboard
//        cy.wait('@login').then((interception) => {
 //           cy.wait(1000);
 //           cy.log('API Response time:', interception.response.headers.responseTime);

  //      });
        cy.get('#Layer_hamburger').click();
        cy.get('#sidebarnav > :nth-child(2) > .router-link-active').click();
  //      cy.get(dashboardLocators.postList).should("be.visible")
  //      .timeSince('visit', 'page load time',  120000, true)

        // Creating new post
        cy.get(dashboardLocators.postsomethig).click()
        cy.get(dashboardLocators.postTextarea).first().type(dashboardData.testPostText)
        cy.get(dashboardLocators.postPublishButton).click()

        // Waiting for new post visibility
        cy.wait(6000)
        cy.contains(dashboardData.testPostText).should("be.visible")
        cy.wait(6000);

        // Deleting new post
        cy.get(dashboardLocators.postOptionMenuButton).eq(0).click()
        cy.xpath(dashboardLocators.postDeleteButton).click()
        cy.xpath(dashboardLocators.postDelConfirmButton).click()


        // Post delete assertion
        cy.xpath(dashboardLocators.postDelAlert).should('have.text', dashboardData.postDelAlertText)
    });


 it ('Add Widget & Delete Widget', () => {

        //Widgets cards visibility
        cy.wait(6000);
        cy.get(dashboardLocators.marqueeSlider).should("be.visible")
       // cy.xpath(dashboardLocators.profileCard).should("be.visible")
        cy.xpath(dashboardLocators.widgetsScroller).scrollTo("bottom")
        cy.get(dashboardLocators.investmentCard).should("be.visible")
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
      //  cy.get('div.hoverEffectDv').trigger('mouseover');
 //     cy.xpath("//div[@class='card-body h-100']", { timeout: 7000 }).should("exist");
 //       cy.get('.btn btn--primary btn--sm').click();
   //     cy.get(':nth-child(3) > :nth-child(2) > .image_wrapper').click();
    //    cy.get(':nth-child(7) > :nth-child(2) > .image_wrapper').click();
   //     cy.contains('.btn--primary', 'Submit').click();
        cy.get('.Vue-Toastification__toast').should("be.visible")

        // New widget visibility
        cy.xpath(dashboardLocators.widgetsScroller).scrollTo("bottom")
        cy.xpath(dashboardLocators.newWidgetVisiblity).should("be.visible")

        // Delete widget
        cy.xpath(dashboardLocators.widgetOptionMenuButton).click()
        cy.xpath(dashboardLocators.widgetDeleteButton).click()
        cy.xpath(dashboardLocators.widgetDelConfirmButton).click()


    });

it('Advance Filters', function () {


        // Applying Advance Filters
        cy.get('#Layer_hamburger').click();
        cy.get('#sidebarnav > :nth-child(2) > .router-link-active').click();
        cy.get('.align-items-center > .d-flex').click()
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .oval > span').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .oval > span').click()
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oval > span').click()
        cy.get('.buttons > :nth-child(2)').click()


        });
it('Analyze Tab', function () {

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
         cy.get(':nth-child(1) > .accordion__item__body > :nth-child(1)').click();
         cy.get(':nth-child(2) > .watchlist__card > .watchlist__card--head > .btn').click();
         cy.wait(600);
         cy.get(':nth-child(1) > .search > .change').click();
         cy.get('.modal--header > .search > .change').type('aapl').type('{enter}');
         cy.get(':nth-child(2) > .custom_checkbox').click();
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


          cy.wait(3000);
          //Paper
          cy.get(':nth-child(9) > a').click();
          cy.get('.articles-content').scrollIntoView().should("be.visible");


         });


it('SignUp', function () {

     cy.get('#hc_settings > .router-link-active > .svg_icon > svg').click();
     cy.get('ms_logout').click();
     cy.get(SignupLocators.Signupbutton).click();
     cy.wait(1000);

    // Fill out the registration form
    cy.url().should('include', '/register');
    cy.get(SignupLocators.Fullname).type(SignupData.Fullname);
    cy.get(SignupLocators.Username).type(username);
    cy.get(SignupLocators.userEmail).type(useremail);
    cy.get(SignupLocators.password).type(SignupData.password);
    cy.get(SignupLocators.Checkbox).click();


    // Click the registration button
    cy.get(SignupLocators.btnLogin).click();
    cy.url().should('include', '/login');

    //Login check with new user with verification
    cy.wait(1000);
        cy.get(loginLocators.userEmail).type(useremail);
        cy.get(loginLocators.password).type(SignupData.password)
        cy.get(loginLocators.btnLogin).click({ force: true }).timeMark('visit')
        cy.url().should('include', '/locked');



    //route to yopmail for verification
   // cy.visit('https://yopmail.com/');
   // cy.get('.ycptinput').type('test@yopmail.com').type('{enter}');


  });

    });
