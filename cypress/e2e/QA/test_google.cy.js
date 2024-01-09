describe("1.1- Sign in with Google",
    function () {
    it('1.1.1- Sign in with Google Sample Test', () => {
    logIntoGoogle("some_login","some_password")
    });
    });

function logIntoGoogle(username, password) {
    Cypress.on(
        'uncaught:exception',
        (err) =>
          !err.message.includes('ResizeObserver loop') &&
          !err.message.includes('Error in protected function')
      )
    cy.visit("https://wolt.com/");
    cy.contains('Accept').click();
    cy.wait(2000);
    cy.contains('Log in').click();
    cy.wait(2000);
    cy.contains('Continue with Google').click();

  cy.origin(
    'https://accounts.google.com',
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
      Cypress.on(
        'uncaught:exception',
        (err) =>
          !err.message.includes('ResizeObserver loop') &&
          !err.message.includes('Error in protected function')
      )

      cy.get('input[type="email"]').type(username, {
        log: false,
      })
      // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues
      cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
      cy.get('[type="password"]').type(password, {
        log: false,
      })
      cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
     }
  )
}