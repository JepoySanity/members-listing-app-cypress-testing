describe('Loggin In - Basic Auth', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseurl'))
  })

  Cypress.Commands.add('Login',()=>{
    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.get('form').submit()
  })

  it('login', () => {
    cy.Login()
    cy.wait(8000)
    cy.contains('Logout').click()
  })

})