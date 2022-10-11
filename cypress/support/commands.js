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
Cypress.Commands.add('Login',()=>{
    cy.get('input[name="username"]')
        .type(Cypress.env('username'))
        .should('have.value',Cypress.env('username'))

    cy.get('input[name="password"]')
        .type(Cypress.env('password'))
        .should('have.value',Cypress.env('password'))

    cy.get('form')
        .submit()
})

//command for signing up using env parameters
Cypress.Commands.add('FillupSignupForm',() => {
    cy.get('input[name="username"]')
        .type(Cypress.env('test_username'))
        .should('have.value',Cypress.env('test_username'))

    cy.get('input[name="password"]')
        .type(Cypress.env('test_password'))
        .should('have.value',Cypress.env('test_password'))

    cy.get('input[name="confirm_password"]')
        .type(Cypress.env('test_password'))
        .should('have.value',Cypress.env('test_password'))

    cy.get('input[name="email"]')
        .type(Cypress.env('test_email'))
        .should('have.value',Cypress.env('test_email'))

    cy.wait(1000)

    cy.get('form')
        .submit()
})

//command for logging out users
Cypress.Commands.add('LogoutUser', () => {
    cy.contains('Logout')
        .click()
})

//command for toggling language from EN to JP
Cypress.Commands.add('ToggleLang', (lang) => {
    cy.get('div[role="button"]')
        .click()

    cy.wait(500)

    if (lang == 'EN') {
        cy.contains('EN')
        .click()
    } else {
        cy.contains('日本語')
        .click()
    }
})

//command for creating new user
Cypress.Commands.add('CreateUser', () => {
    cy.get('input[name="name"]')
        .type('test only')
        .should('have.value','test only')

    cy.get('div[id="status"]')
        .click()

    cy.contains('Active')
        .click()

    cy.get('input[name="email"]')
        .type('test@gg.com')
        .should('have.value','test@gg.com')

    cy.get('div[id="department"]')
        .click()

    cy.contains('Dev F')
        .click()

    cy.get('div[id="location"]')
        .click()

    cy.contains('Alabang')
        .click()

    cy.get('form')
        .submit()
})

//command for updating existing user
Cypress.Commands.add('UpdateUser', () => {
    cy.get('a[id="edit-button"]')
        .first()
        .click()

    cy.wait(2000)

    cy.get('input[name="name"]')
        .clear()

    cy.wait(500)

    cy.get('input[name="name"]')
        .type('update content')
        .should('have.value','update content')

    cy.get('div[id="status"]')
        .click()

    cy.contains('Inactive')
        .click()

    cy.get('input[name="email"]')
        .clear()

    cy.wait(500)

    cy.get('input[name="email"]')
        .type('test@rocket.gg.com')
        .should('have.value','test@rocket.gg.com')

    cy.get('div[id="department"]')
        .click()

    cy.contains('Dev G')
        .click()

    cy.get('div[id="location"]')
        .click()

    cy.contains('Makati')
        .click()

    cy.get('form')
        .submit()
})

//command for deleting existing user
Cypress.Commands.add('DeleteUser', () => {
    cy.get('button[id="delete-button"]')
        .first()
        .click()

    cy.wait(1000)

    cy.get('button[id="proceed-button"]')
        .click()
})