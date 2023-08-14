describe('check, nav as guest (not signed in/registered)', () => {

  beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/')
      cy.viewport('macbook-15')
  })
  
  it('Checks header nav', () => {
      
    cy.get('#logo')
      .invoke('attr', 'href')
      .should('eq', '/')

    cy.get('#register')
      .trigger('mouseover')
      .should('have.class', 'hover:text-green-500')
      
    cy.get('#register')
      .invoke('attr', 'href')
      .should('eq', '/register')    
      

    cy.get('#login')
      .trigger('mouseover')
      .should('have.class', 'hover:text-green-500')

    cy.get('#login')
      .invoke('attr', 'href')
      .should('eq', '/login')  
    
    cy.get('#newsletterTop')
      .invoke('attr', 'href')
      .should('eq', '#newsletter')
  })
})