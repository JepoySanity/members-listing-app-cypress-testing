describe('Login and toggle language', () => {
    beforeEach(()=>{
        cy.visit(Cypress.env('baseurl'))
    })

    it('login-toggle-lang', () => {
        cy.FillupLoginForm()
        cy.wait(5000)
        cy.ToggleLang()
        cy.wait(1000)
        cy.LogoutUser()
    })
})