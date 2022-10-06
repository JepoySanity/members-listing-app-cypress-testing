describe('Create user', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl'))
    })

    it('create-user', () => {
        cy.FillupLoginForm()
        cy.wait(6000)
        cy.contains('New').click()
        cy.wait(2000)
        cy.CreateUser()
    })
})