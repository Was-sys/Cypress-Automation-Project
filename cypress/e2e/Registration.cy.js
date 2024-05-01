describe('Launch the application', () => {
  it('Registration', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('darshi')
    cy.get("input[id='customer.lastName']").type('Perera')
    cy.get("input[id='customer.address.street']").type('Sri Lanka')
    cy.get("input[id='customer.address.city']").type('Galle')
    cy.get("input[id='customer.address.state']").type('xyz')
    cy.get("input[id='customer.address.zipCode']").type('1234')
    cy.get("input[id='customer.phoneNumber']").type('0711234567')
    cy.get("input[id='customer.ssn']").type('789')
    cy.get("input[id='customer.ssn']").type('789')
    cy.get("input[id='customer.username']").type('Dwk123')
    cy.get("input[id='customer.password']").type('#Darshi6')
    cy.get("input[id='repeatedPassword']").type('#Darshi6')
    cy.get("[colspan='2'] > .button").click()

  })
  
})