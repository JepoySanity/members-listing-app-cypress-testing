describe('Loggin In - Basic Auth', () => {

  const username = 'jepoysan27'
  const password = 'jepoysan27'

  it('passes', () => {
    cy.visit('https://master.dhd7igftovw0h.amplifyapp.com/')
    cy.get('button[type="submit"]').click()
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    // cy.get('button[type="submit"]').click()
  })
})