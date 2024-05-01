describe('contact', () => {
  it('contact page', () => {
    cy.visit('https://www.telerik.com/contact')
    cy.get("select[id='Dropdown-1']").select(1)
    //cy.get("input[name='password']").type('#Darshi6')
    //cy.get(':nth-child(5) > .button').click()
 
  })
  
})