describe("1.2- Sign in with Facebook",
    function () {
    it('1.1.1- Sign in with Facebook Sample Test', () => {
        logIntoFacebook("some_login","some_password")
    });
    });

function logIntoFacebook(username, password) {
    let calledWithUrl;  // Declare a variable to store the URL
    let isWindowOpenCalled = false;
    cy.visit("https://wolt.com/");
    cy.contains('Accept').click();
    cy.wait(2000);
    cy.contains('Log in').click();
    cy.wait(1000);
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
      cy.contains('Continue with Facebook').click();
      
      if (!isWindowOpenCalled) {
        cy.get('@windowOpen').should('be.called').then((stub) => {
            isWindowOpenCalled = true; 
            // Extract the URL passed to window.open()
            calledWithUrl = stub.args[0];
            cy.log(`The URL called with window.open() is: ${calledWithUrl}`);
            const popupDoc = stub.frames[0].document;
            const popupButton = popupDoc.querySelector('#buttonInsidePopup');
            if (popupButton) {
            popupButton.click();
            } else {
            cy.log('Button inside popup not found.');
            }
        });
      }
}