/// <reference types="cypress" />

describe('Sample Test', () => {
    it('Visits the app root url', () => {
      // Visit the website
      cy.visit('https://www.ebay.com');
  
      // Check if the page contains a specific element
      
      //check the ebay logo existance
      cy.get('#gh-logo').should('exist');
      
      //check search button visiblility
      cy.get('#gh-btn').should('be.visible'); 
      
      // cy.get('#gh-ac').click();
      cy.get('#gh-ac').type('watch');
      
      cy.wait(500);
      
      //cy.get('#gh-btn').click({ force: true });  //getting an error

      //clicking on search button
      cy.get('#gh-btn').trigger("click");
      
      // Perform other Cypress commands as needed for your test
    });
  });
  