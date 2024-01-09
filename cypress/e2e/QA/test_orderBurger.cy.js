describe("Order burger", () => {
    it("Visit page and select location", () => {
       cy.visit("https://wolt.com/");
       cy.contains('Accept').click();
       cy.get('#front-page-input').type('Kauno Dokas', { force: true });  
       cy.contains('Enter delivery address').click({ force: true }); 
       cy.contains('Kauno Dokas').first().click();
       cy.contains('Burger',{ timeout: 10000 }).scrollIntoView();
       cy.contains('Burger').click({ force: true });
       cy.contains('Burgers that will make you dance', { timeout: 30000 }).scrollIntoView();
       cy.contains('Burgers that will make you dance').click({ force: true });
       cy.contains('Disco Classic', { timeout: 20000 }).scrollIntoView().should('be.visible');
       cy.contains('Disco Classic').click();
       cy.contains('Add to order').click();
       cy.contains('View order').click();
       cy.contains('Disco Classic').should("exist");
       cy.contains('Go to checkout').click();
       cy.contains('Log in').click();
       cy.wait(2000);
       cy.contains('Continue with Google').click();
    });
});


  
  