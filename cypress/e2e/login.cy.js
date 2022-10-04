describe('Loggin In - Basic Auth', () => {

  const username = 'jepoysan27'
  const password = 'jepoysan27'

  Cypress.Commands.add('Login',()=>{
    cy.visit('https://master.dhd7igftovw0h.amplifyapp.com/')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('form').submit()
  })

  it('login', () => {
    cy.Login()
    cy.wait(8000)
    cy.contains('Logout').click()
  })

})