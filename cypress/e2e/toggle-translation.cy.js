describe('toggle translation', () => {
  it('passes', () => {
    cy.visit('https://master.dhd7igftovw0h.amplifyapp.com/')
    cy.get('role="listbox"').click()
  })
})