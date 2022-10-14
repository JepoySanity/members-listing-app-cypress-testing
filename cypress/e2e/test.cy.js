describe('Authentication, i18n and CRUD tests', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    //Authentication test
    it('test login and logout', () => {
        cy.visit('/')
        cy.wait(1000)
        cy.Login()
        cy.wait(5000)
        cy.LogoutUser()
    })

    //Toggle language test
    it('toggle language', () => {
        cy.visit('/')
        cy.wait(1000)
        cy.Login()
        cy.ToggleLang('日本語')
        cy.ToggleLang('EN')
        cy.ToggleLang('日本語')
        cy.ToggleLang('EN')
        cy.ToggleLang('日本語')
        cy.ToggleLang('EN')
        cy.LogoutUser()
    })

    //CRUD functionaliy per lang test
    it('test CRUD functionality per language', () => {
        cy.visit('/')
        cy.wait(1000)
        cy.Login()
        cy.wait(5000)

        cy.ToggleLang('日本語')

        cy.get('a[id="create-new"]').click()
        cy.CreateUser()
        cy.wait(2000)
        
        cy.get('a[id="back-button"]').click()
        cy.wait(2000)
        cy.UpdateUser()
        cy.wait(2000)
        cy.get('a[id="back-button"]').click()
        cy.wait(2000)
        cy.DeleteUser()
        cy.wait(2000)

        cy.ToggleLang('EN')

        cy.get('a[id="create-new"]').click()
        cy.CreateUser()
        cy.wait(2000)
        cy.get('a[id="back-button"]').click()
        cy.wait(2000)
        cy.UpdateUser()
        cy.wait(2000)
        cy.get('a[id="back-button"]').click()
        cy.wait(2000)
        cy.DeleteUser()
    })
})