describe('Authentication, i18n and CRUD tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    //Authentication test
    it('test login and logout', () => {
        cy.FillupLoginForm()
        cy.wait(8000)
        cy.LogoutUser()
    })

    //i18n test
    it('test toggle language', () => {
        cy.FillupLoginForm()
        cy.wait(5000)
        cy.ToggleLang()
        cy.wait(1000)
        cy.LogoutUser()
    })

    //CRUD test
    it('test CRUD functionality', () => {
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