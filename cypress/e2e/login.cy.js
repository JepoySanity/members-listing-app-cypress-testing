describe('Loggin In - Basic Auth', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseurl'))
  })

  Cypress.Commands.add('FillupLoginForm',()=>{
    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.get('form').submit()
  })

  it('login and logout', () => {
    cy.FillupLoginForm()
    cy.wait(8000)
    cy.contains('Logout').click()
  })

})