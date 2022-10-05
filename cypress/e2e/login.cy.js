describe('Loggin In - Basic Auth', () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('baseurl'))
  })

  it('login and logout', () => {
    cy.FillupLoginForm()
    cy.wait(8000)
    cy.LogoutUser()
  })

})