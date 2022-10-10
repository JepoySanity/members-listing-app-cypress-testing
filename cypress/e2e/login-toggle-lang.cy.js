describe('Login and toggle language', () => {
    beforeEach(()=>{
      cy.visit('/')
    })

    it('login-toggle-lang', () => {
        cy.FillupLoginForm()
        cy.wait(5000)
        cy.get('div[role="button"]').click()
        cy.wait(1000)
        cy.contains('日本語').click()
        cy.wait(1000)
        cy.get('div[role="button"]').click()
        cy.wait(1000)
        cy.contains('EN').click()
        cy.wait(1000)
        cy.LogoutUser()
    })
})