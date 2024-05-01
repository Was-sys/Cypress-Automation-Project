describe('Login to the application', () => {
  it('login', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type('Dwk123')
    cy.get("input[name='password']").type('#Darshi6')
    cy.get(':nth-child(5) > .button').click()
 
  })
  
})