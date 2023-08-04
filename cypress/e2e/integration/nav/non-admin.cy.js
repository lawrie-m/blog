describe('check, nav as non-admin user', () => {

  beforeEach(() => {
        cy.nonAdminLogin('cypresstest@email.com', 'password')
  })
  
  it('Visits the Blog', () => {
      
    cy.get('#logo')
      .invoke('attr', 'href')
      .should('eq', '/')

    cy.get('#nav')
      .trigger('mouseover')
      .should('have.class', 'hover:text-green-500')
    
    cy.get('#newsletterTop')
      .trigger('mouseover')
      .should('have.class', 'hover:bg-green-600')
    
    cy.get('#nav').click()

    cy.contains('Log Out')
      .invoke('attr', 'href')
      .should('eq', '#')
    
    cy.get('#newsletterTop')
      .invoke('attr', 'href')
      .should('eq', '#newsletter')
  })
})