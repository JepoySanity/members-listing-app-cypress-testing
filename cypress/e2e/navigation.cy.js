describe('test secured routes', () => {

    it('visit routes without authentication', () => {
        cy.visit(Cypress.env('baseurl'))
        cy.wait(3000)
        cy.visit(Cypress.env('createUserUrl'))
    })

    it('visit routes with authentication', () => {
        cy.visit(Cypress.env('baseurl'))
        cy.FillupLoginForm()
        cy.wait(5000)
        cy.LogoutUser()
    })
    
})