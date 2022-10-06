// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//command for logging in using env parameters
Cypress.Commands.add('FillupLoginForm',()=>{
    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.get('form').submit()
})

//command for signing up using env parameters
Cypress.Commands.add('FillupSignupForm',() => {
    cy.get('input[name="username"]').type(Cypress.env('test_username'))
    cy.get('input[name="password"]').type(Cypress.env('test_password'))
    cy.get('input[name="confirm_password"]').type(Cypress.env('test_password'))
    cy.get('input[name="email"]').type(Cypress.env('test_email'))
    cy.wait(1000)
    cy.get('form').submit()
})

//command for logging out users
Cypress.Commands.add('LogoutUser', () => {
    cy.contains('Logout').click()
})

//command for toggling language from EN to JP
Cypress.Commands.add('ToggleLang', () => {
    cy.get('div[role="button"]').click()
    cy.wait(1000)
    cy.contains('日本語').click()
    cy.wait(1000)
    cy.get('div[role="button"]').click()
    cy.wait(1000)
    cy.contains('EN').click()
})

//command for creating new user
Cypress.Commands.add('CreateUser', () => {
    cy.get('input[name="name"]').type('test only')
    cy.get('div[id="status"]').click()
    cy.contains('Active').click()
    cy.get('input[name="email"]').type('test@gg.com')
    cy.get('div[id="department"]').click()
    cy.contains('Dev F').click()
    cy.get('div[id="location"]').click()
    cy.contains('Alabang').click()
    cy.get('form').submit()
})