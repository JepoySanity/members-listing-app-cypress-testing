describe('Signup user', () => {
    beforeEach(()=>{
        cy.visit(Cypress.env('baseurl'))
    })

    Cypress.Commands.add('FillupSignupForm',() => {
        cy.get('input[name="username"]').type(Cypress.env('test_username'))
        cy.get('input[name="password"]').type(Cypress.env('test_password'))
        cy.get('input[name="confirm_password"]').type(Cypress.env('test_password'))
        cy.get('input[name="email"]').type(Cypress.env('test_email'))
        cy.wait(1000)
        cy.get('form').submit()
    })

    Cypress.Commands.add('FillupVerificationCode', () => {
        cy.get('input[name="confirmation_code"]').type(123441)
        cy.wait(1000)
        cy.get('form').submit()
    })

    it('signup', () => {
        cy.wait(1000)
        cy.contains('Create Account').click()
        cy.wait(1000)
        cy.FillupSignupForm()
    })
})