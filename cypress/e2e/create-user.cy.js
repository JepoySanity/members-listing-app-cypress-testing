describe('Create user and Update after', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl'))
    })

    it('create-user-then-update', () => {
        cy.FillupLoginForm()
        cy.wait(6000)
        cy.contains('New').click()
        cy.CreateUser()
        cy.wait(4000)
        cy.contains('Back').click()
        cy.wait(4000)
        cy.UpdateUser()
        cy.wait(4000)
        cy.contains('Back').click()
        cy.wait(4000)
        cy.DeleteUser()
    })
})