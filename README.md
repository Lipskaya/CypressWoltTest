# Cypress Test for Ordering a Burger on Wolt.com
## Objective:
Develop a Cypress test that simulates the process of ordering a burger to an office located at Kauno Dokas via the Wolt.com website.

## Instructions for MacOs:
1. Preparation steps:
    - use Visual Studio Code;
2. How to Run the Test:
    - Clone this repository to your local machine;
    - Navigate to the project directory;
    - Install the necessary dependencies using:
        - $ npm install cypress --save-dev
    - Launch Cypress using:
        - $ npx cypress open;
    - Select the desired test file:
    - "CypressWoltTest/cypress/e2e/QA/test_orderBurger.cy.js"
        from the Cypress dashboard and execute it to initiate the test scenario;
3. Test Scenario:
    - Navigate to the Wolt.com website.
    - Search for restaurants offering burgers and deliver to Kauno Dokas.
    - Choose your preferred burger from the menu and add it to the cart.
    - Confirm that the burger is correctly added to your cart.
    - Proceed with the checkout process and simulate the order flow as far as possible.
## Issues:
    - authorization via e-mail: failed because "hcaptcha" is used;
    - authorization via Facebook and Apple: failed because Cypress does not switch to pop-up windows;
    - authorization via Google: failed due to security restrictions on Google side.
