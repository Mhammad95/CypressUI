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
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.Login()
        cy.viewport(1920, 1200);
        cy.wait(5000);
    });

it.only('SignUp', function () {

    //cy.visit('https://social-dev.traderverse.io/login');
     //cy.get(SignupLocators.Signupbutton).click();
     cy.get('#hc_settings > .router-link-active > .svg_icon > svg').click();
     cy.get('#ms_logout').click();
     cy.visit('https://social-dev.traderverse.io/register');
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

