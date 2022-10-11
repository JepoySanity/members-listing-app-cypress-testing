describe('Signup user', () => {
    beforeEach(()=>{
      cy.visit('/')
    })

    it('signup', () => {
        cy.wait(1000)
        cy.contains('Create Account').click()
        cy.wait(1000)
        cy.FillupSignupForm()
    })
})