require('@cypress/xpath')
const jsonAssertion = require("soft-assert")
import loginLocators from "../features/locators/loginLocators.json"
import dashboardLocators from "../features/locators/dashboardLocator.json"
import errorsData from "../features/fixtures/errorsData.json"
import loginData from "../features/fixtures/loginData.json"
import SignupData from "../features/fixtures/SignupData.json"
import SignupLocators from "../features/locators/SignupLocators.json"
import 'cypress-time-marks'


describe('Tradverse Signup', () => {


it.only('SignUp', function () {

    cy.visit('https://social-internal.traderverse.io/login');
     cy.get(SignupLocators.Signupbutton).click();
     cy.wait(1000);

    // Fill out the registration form
    cy.url().should('include', '/register');
    cy.get(SignupLocators.Fullname).type(SignupData.Fullname);
    cy.get(SignupLocators.Username).type(SignupData.Username);
    cy.get(SignupLocators.userEmail).type(SignupData.useremail);
    cy.get(SignupLocators.password).type(SignupData.password);
    cy.get(SignupLocators.Checkbox).click();


    // Click the registration button
    cy.get(SignupLocators.btnLogin).click();
    cy.url().should('include', '/login');

    //Login check with new user with verification
    cy.wait(1000);
        cy.get(loginLocators.userEmail).type(SignupData.useremail);
        cy.get(loginLocators.password).type(SignupData.password)
        cy.get(loginLocators.btnLogin).click({ force: true }).timeMark('visit')
        cy.url().should('include', '/locked');
        cy.pause();



    //route to yopmail for verification
   // cy.visit('https://yopmail.com/');
   // cy.get('.ycptinput').type('test@yopmail.com').type('{enter}');


  });
});

