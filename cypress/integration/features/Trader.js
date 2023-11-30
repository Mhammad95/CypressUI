require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import 'cypress-time-marks'

// Generate a random number between 1000 and 9999
const randomNumber = Math.floor(Math.random() * 9000) + 1000;
// Create the username with the random number
const username = `johndoe${randomNumber}`;
const useremail = `johndoe${randomNumber}@yopmail.com`;

describe('Tradverse Signup', () => {


it('SignUp', function () {

    cy.visit('http://74.208.95.190:9080/signin');
    cy.get('p > a').click();
     cy.wait(1000);


    // Fill out the registration form
    cy.url().should('include', '/signup');
    cy.get('.el-scrollbar__view > :nth-child(1)').type(SignupData.Fullname);
    cy.get('.el-scrollbar__view > :nth-child(2)').type(username);
    cy.get('.el-scrollbar__view > :nth-child(3)').type(useremail);
    cy.get('.el-scrollbar__view > :nth-child(4)').type(SignupData.password);
    cy.get('.el-checkbox__inner').click();


    // Click the registration button
    cy.get('.btn').click();
    cy.url().should('include', '/signin');

    //Login check with new user with verification
    cy.wait(1000);
        cy.get(':nth-child(1) > .form-group-field').type(useremail);
        cy.get(':nth-child(2) > .form-group-field').type(SignupData.password)
       cy.get('.btn').click({ force: true }).timeMark('visit')
        cy.url().should('include', '/create');



    //route to yopmail for verification
      //cy.request('https://yopmail.com/');

   // cy.visit('https://yopmail.com/');
   // cy.get('.ycptinput').type('test@yopmail.com').type('{enter}');


  });

it('SignUp Negative', function () {
//inclorrectusername
      cy.visit('http://74.208.95.190:9080/signin');
      cy.get('p > a').click();
       cy.wait(1000);


      // Fill out the registration form
      cy.url().should('include', '/signup');
      //fullname
      cy.get('.el-scrollbar__view > :nth-child(1)').type('1');
      cy.get('.el-scrollbar__view > :nth-child(2)').type('aapl');
      cy.get('.el-scrollbar__view > :nth-child(3)').type('aapl');
      cy.get('.el-scrollbar__view > :nth-child(4)').type('aapl');
      cy.get('.el-checkbox__inner').click();
          cy.get('.btn').click();
                cy.get('.form-group-error > p').should("be.visible");



  });

it('SignUp Negative 1', function () {
//incorrectpassword
        cy.visit('http://74.208.95.190:9080/signin');
        cy.get('p > a').click();
         cy.wait(1000);


        // Fill out the registration form
        cy.url().should('include', '/signup');
        //fullname
        cy.get('.el-scrollbar__view > :nth-child(1)').type('1');
        cy.get('.el-scrollbar__view > :nth-child(2)').type('aaplaapl');
        cy.get('.el-scrollbar__view > :nth-child(3)').type('aapl');
        cy.get('.el-scrollbar__view > :nth-child(4)').type('aapl');
        cy.get('.el-checkbox__inner').click();
        cy.get('.btn').click();
        cy.get('.form-group-error > p').should("be.visible");


    });

it('SignUp Negative 2', function () {
//empty username
            cy.visit('http://74.208.95.190:9080/signin');
            cy.get('p > a').click();
             cy.wait(1000);


            // Fill out the registration form
            cy.url().should('include', '/signup');
            //fullname
            cy.get('.el-scrollbar__view > :nth-child(2)').type('aapl');
            cy.get('.el-scrollbar__view > :nth-child(3)').type('aapl');
            cy.get('.el-scrollbar__view > :nth-child(4)').type('aapl1234');
            cy.get('.el-checkbox__inner').click();
            cy.get('.btn').click();
            cy.get('.form-group-error > p').should("be.visible");


        });

it('SignUp Negative 3', function () {
//invalid email
            cy.visit('http://74.208.95.190:9080/signin');
            cy.get('p > a').click();
             cy.wait(1000);


            // Fill out the registration form
            cy.url().should('include', '/signup');
            //fullname
            cy.get('.el-scrollbar__view > :nth-child(1)').type('haider');
            cy.get('.el-scrollbar__view > :nth-child(2)').type('aaplese');
            cy.get('.el-scrollbar__view > :nth-child(3)').type('aapl');
            cy.get('.el-scrollbar__view > :nth-child(4)').type('aapl1234A');
            cy.get('.el-checkbox__inner').click();
            cy.get('.btn').click();
            //cy.get('.Vue-Toastification__toast').should("be.visible");


        });

it('Login Traderlink', function () {
//invalid email
            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");

                          //signout
                          cy.get('.AddIconCoverDv > svg').click();
                          cy.get('.itemGrid > :nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');

});

it('Crud Operation for Add Bio', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Click on the element with the text "Edit Profile"
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();
             //edit bio
             cy.get('.descriptionDv > .editable').click()
             .clear()
             .type('Test for bio in this automation');
             //tick button
             cy.get('#Rectangle_5963').click();
             //update successfully
             cy.get('.Vue-Toastification__toast').should("be.visible");
             //soft validation
             // Search for the text "Test for bio in this automation" and validate visibility
             cy.contains('Test for bio in this automation').should('be.visible');
            //.should('have.value', 'Test');

                          //signout
                          cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');

});
it('Crud Operation for Add Attribute/Tags', function () {
//invalid email
            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();
            //upload photos
            cy.get('.UploadButton > .svg_icon > svg').click();
            //unable to upload

             //add tags or attribute
             cy.get('.algorithmDv').click();
             cy.wait(2000);
             cy.get(':nth-child(1) > :nth-child(5) > p').click();
             cy.wait(2000);
             cy.get('.AddmoreDv > .btn').click();
             cy.wait(2000);
             cy.get('.btnDv > .btn--primary').click();
             cy.wait(5000);

             //tick mark
             cy.get('#Rectangle_5963').click();
             // Validate that the div with class .algorithmDv does not contain the text "Position trader"
              cy.get('.algorithmDv').should('contain', 'Arbitrage Trader');


              //remove attribute
              cy.get('.AddIconCoverDv > svg').click();
              cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();
              cy.get('.algorithmDv').click();
              //remove attribute triage
              cy.get('.remove-icon').eq(4).click();

              cy.get('.btnDv > .btn--primary').click();

            // tick button
             cy.get('#Rectangle_5963').click();
             //update successfully
             cy.get('.Vue-Toastification__toast').should("be.visible");


                          //signout
                          cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');

});

it('Crud Operation for stats', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();
             //visible 4k loss stat
             cy.get('.justify-content-end > :nth-child(1) > h2').should("be.visible");




             //remove stats
             //add stats
             cy.get('.ProfileDetailDv > :nth-child(1)').click();
             //top loss 4k iski id hai
             cy.get('.remove-icon').eq(3).click();
             //update button
             cy.get('.btnDv > .btn--primary').click();

             //cy.get('.justify-content-end > :nth-child(1) > h2').should('not.exist');


             //add toploss 4k stat
             cy.get('.ProfileDetailDv > :nth-child(1)').click();
             cy.get('.availableGridDv > :nth-child(9)').click();

             //add toploss4k
             cy.get('.AddmoreDv > .btn').click();
             //update button
             cy.get('.btnDv > .btn--primary').click();


              //tick button
              cy.get('#Rectangle_5963').click();
              //signout
              cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');


});


it('Crud Operation for Recommendation ', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();


             //add recommendation
             cy.get('.innerBody > :nth-child(9)').click();
             //select aapl
             cy.get('.el-input__wrapper').click().type('aapl');
             cy.wait (5000);
             cy.get('.el-input__wrapper').click().type('{downarrow}').type('{enter}');

             cy.get('.selected').click();
             //add button
             cy.get('.AddmoreDv').click();
             //update button
             cy.get('.btnDv > .btn--primary').click();
             cy.wait(5000);

             //tick button
             cy.get('#Rectangle_5963').click();


             //validate pop up
            // cy.get('.Vue-Toastification__toast').should("be.visible");

             //view recommendation
             cy.get('.RecommendationsCardDv').should("be.visible");

             cy.scrollTo('top');
             //now delete recommendation
              //Setting button
              cy.get('.AddIconCoverDv > svg').click();
              //edit profile button
              // Using absolute XPath to click on the element
              cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();
              //click on recommendation
              cy.get('.innerBody > :nth-child(9)').click();

              cy.get('#Path_22289').click();
              cy.get('.btnDv > .btn--primary').click();

              //tick button
              cy.get('#Rectangle_5963').click();
              //signout
              cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');


});

it.only('Crud Operation for stocks/Investment', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();


             //stocks men deletion men issue hai
             //stock visible
             cy.get(':nth-child(3) > .stockItemCard').should("be.visible");
             //clickon investment
             cy.get('.innerBody > :nth-child(6)').click();
             cy.wait(4000);
             //removecnet
             cy.get('#minusStockCNET_NASDAQ').click();
             cy.wait(5000);
             //save button
             cy.get('.btn--primary').click();
             cy.wait(6000);

             //add the stock
             //clickon investment
             cy.get('.innerBody > :nth-child(6)').click();
             //search
             cy.get('.stock--container-head > input').click().type('cnet');
             cy.wait(4000);
             cy.get('.stock--container-body > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > :nth-child(1)').click();
             cy.wait(5000);
             //save button
             cy.get('.btn--primary').click();
             cy.wait(6000);

             //tick button
             cy.get('#Rectangle_5963').click();

                          //signout
                          cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');





});

it('Crud Operation for Winning Trades', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();


             //wining trades
             cy.get('.innerBody > :nth-child(7)').click();
             //search button
             //select aapl
             cy.get('.el-autocomplete > .el-input > .el-input__wrapper').click().type('aapl');
             cy.wait (5000);
             cy.get('.el-autocomplete > .el-input > .el-input__wrapper').click().type('{downarrow}').type('{enter}');

             //select date
             cy.get(':nth-child(3) > .gridInfo > :nth-child(1) > .searchinfoDv').click().type('2023-11-15');
             //quantity
             cy.get(':nth-child(3) > .gridInfo > :nth-child(2) > .searchinfoDv').click().type('1');
             //price
             cy.get(':nth-child(3) > .gridInfo > :nth-child(3) > .searchinfoDv').click().type('10');

             //solddate
             cy.get('.soldInfoDv > .gridInfo > :nth-child(1) > .searchinfoDv').click().type('2023-11-18');
             //quantity
             cy.get('.soldInfoDv > .gridInfo > :nth-child(2) > .searchinfoDv').click().type('1');
             //price
             cy.get('.soldInfoDv > .gridInfo > :nth-child(3) > .searchinfoDv').click().type('10');

             //add button
             cy.get('.AddmoreDv > .btn').click();

             //save button
             cy.get('.btnDv > .btn--primary').click();

             //delete trade
             //wining trades
             cy.get('.innerBody > :nth-child(7)').click();
             cy.scrollTo('bottom');

             //delete trade
             cy.get('#minus').click();

             //savebutton
             cy.get('.btnDv > .btn--primary').click();

                          //tick button
                          cy.get('#Rectangle_5963').click();

                                       //signout
                                       cy.get('.AddIconCoverDv > svg').click();
                                       cy.get(':nth-child(4) > h2').click();
                                       cy.url().should('include', '/signin');

});

it('Crud Operation for social media', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();

             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();


             //social grid
             cy.get('.SocialGridDv').click();
             cy.get(':nth-child(1) > .sociallink-category-links > .connect_row > .input_container > input').click().type('test');
             //conect button
             cy.get(':nth-child(1) > .sociallink-category-links > .connect_row > .btn').click();
             //update button
             cy.get('.btnDv > .btn--primary').click();
             cy.wait(5000);

             cy.get('.SocialGridDv').should("be.visible");

             //delete the media account
             cy.get('.SocialGridDv').click();
             //delet it
             cy.get('#Rectangle_5759').click();

             cy.get('.btnDv > .btn--primary').click();

                                       //tick button
                                       cy.get('#Rectangle_5963').click();

                                                    //signout
                                                    cy.get('.AddIconCoverDv > svg').click();
                                                    cy.get('.itemGrid > :nth-child(4) > h2').click();
                                                    cy.url().should('include', '/signin');



});

it('Crud Operation for portfolio ', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.get('.AddIconCoverDv > svg').click();
             //edit profile button
             // Using absolute XPath to click on the element
             cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();

             //click on portfolio
             cy.get('.innerBody > :nth-child(8)').click();
             //choose binance
             cy.wait(6000);
             cy.get('[style="background: rgb(196, 141, 5);"] > .contentDv > h2').click();
             cy.wait(6000);
             //click add button
             cy.get('.AddmoreDv > .btn').click();
             cy.wait(6000);
             //click save button
             cy.get('.btnDv > .btn--primary').click();

             //tick button
             cy.get('#Rectangle_5963').click();


             //visible portfolio
            // cy.get(':nth-child(8) > .profile--container-body > .scroll-container > .scroll-content').should("be.visible");


             cy.scrollTo('top');
             //delete portfolio
              //Setting button
              cy.get('.AddIconCoverDv > svg').click();
              //edit profile button
              // Using absolute XPath to click on the element
              cy.xpath('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/h2[1]').click();

             //click on portfolio
             cy.get('.innerBody > :nth-child(8)').click();
             cy.wait(6000);
             //choose binance
             cy.get('#Path_22289').click();
             cy.wait(6000);
             cy.get('.btnDv > .btn--primary').click();


             //tick button
             cy.get('#Rectangle_5963').click();
             //signout
             cy.get('.AddIconCoverDv > svg').click();
                          cy.get(':nth-child(4) > h2').click();
                          cy.url().should('include', '/signin');


});


it('View Cover and Profile Photo', function () {

            cy.visit('http://74.208.95.190:9080/signin');
             cy.wait(1000);
             cy.get(':nth-child(1) > .form-group-field').type('haider@yopmail.com');
             cy.get(':nth-child(2) > .form-group-field').type('Asdfg098@');
             cy.get('.btn').click();
             cy.get('.Vue-Toastification__toast').should("be.visible");
             cy.url().should('include', '/profile/');
             cy.get('.head > figure > img').should("be.visible");
             cy.scrollTo('top');
             //Setting button
             cy.wait (8000);
             //cover photo
            // cy.get('img[src="https://firebasestorage.googleapis.com/v0/b/internaldev-361116.appspot.com/o/images%2Fcoverphoto_1699028151501_v_1?alt=media"]')
           //    .should('be.visible');
             //Profile Photo
             // Assuming you have assigned a unique identifier (e.g., 'profile-picture') to the image
             cy.get('.profileiconinfoDv > .profile_container > .polytar > .spacing > div > img').should('be.visible');

                            //signout
                            cy.get('.AddIconCoverDv > svg').click();
                            cy.get(':nth-child(4) > h2').click();
                            cy.url().should('include', '/signin');


});

});

