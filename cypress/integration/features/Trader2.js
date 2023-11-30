
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
             cy.get(':nth-child(7) > .profile--container-body > .scroll-container > .scroll-content').should("be.visible");


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

});




