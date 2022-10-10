describe('Loggin In - Basic Auth', () => {

  beforeEach(()=>{
    cy.visit('/')
  })

  it('login and logout', () => {
    cy.FillupLoginForm()
    cy.wait(8000)
    cy.LogoutUser()
  })

})