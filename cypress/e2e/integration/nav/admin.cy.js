describe('check, nav as admin', () => {

  beforeEach(() => {
        cy.adminLogin('lawrie@email.com', 'password')
  })
  
  it('Checks header nav', () => {
      
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

    cy.contains('Homepage')
      .invoke('attr', 'href')
      .should('eq', '/')
    
    cy.contains('Dashboard')
      .invoke('attr', 'href')
      .should('eq', '/admin/posts')    

    cy.contains('New Post')
      .invoke('attr', 'href')
      .should('eq', '/admin/posts/create')

    cy.contains('Log Out')
      .invoke('attr', 'href')
      .should('eq', '#')
    
    cy.get('#newsletterTop')
      .invoke('attr', 'href')
      .should('eq', '#newsletter')
  })
})