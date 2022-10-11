describe('test secured routes', () => {

    it('visit routes without authentication', () => {
        cy.visit('/')
        cy.wait(3000)
        cy.visit('member/new')  
    })

    it('visit routes with authentication', () => {
        cy.visit('/')
        cy.FillupLoginForm()
        cy.wait(5000)
        cy.LogoutUser()
    })
    
})