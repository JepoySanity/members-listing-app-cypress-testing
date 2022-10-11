describe('Authentication, i18n and CRUD tests', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    //Authentication test
    it('test login and logout', () => {
        cy.visit('/')
        cy.Login()
        cy.wait(8000)
        cy.LogoutUser()
    })

    //Relogin
    it('login', () => {
        cy.visit('/')
        cy.Login()
        cy.wait(8000)
    })

    //i18n toggle language to JP
    it('test toggle language', () => {
        cy.ToggleLang('日本語')
    })

    //CRUD test
    it('test CRUD functionality', () => {
        cy.get('a[id="create-new"]').click()
        cy.CreateUser()
        cy.wait(4000)
        cy.get('a[id="back-button"]').click()
        cy.wait(4000)
        cy.UpdateUser()
        cy.wait(4000)
        cy.get('a[id="back-button"]').click()
        cy.wait(4000)
        cy.DeleteUser()
    })

    //i18n toggle language to EN
    it('test toggle language', () => {
        cy.ToggleLang('日本語')
    })

    //CRUD test
    it('test CRUD functionality', () => {
        cy.get('a[id="create-new"]').click()
        cy.CreateUser()
        cy.wait(4000)
        cy.get('a[id="back-button"]').click()
        cy.wait(4000)
        cy.UpdateUser()
        cy.wait(4000)
        cy.get('a[id="back-button"]').click()
        cy.wait(4000)
        cy.DeleteUser()
    })
})