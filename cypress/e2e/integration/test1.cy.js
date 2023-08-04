describe('Admin login, post, delete and logout', () => {

  beforeEach(() => {
        cy.login('lawrie@email.com', 'password')
  })
  
  it('Visits the Blog', () => {

    cy.get('#nav').click()

    cy.contains("New Post").click()

    cy.url().should('include', 'admin/posts')

      cy.get('#title').type('new title')
      
      cy.get('#slug').type('lawrie@email.com')

      cy.get('#excerpt').type('lawrie@email.com')

      cy.get('#body').type('lawrie@email.com')
      
      cy.fixture('omniman.webp').then((logo) => {
          cy.get('input').eq(4).selectFile('cypress/fixtures/omniman.webp')
      })

      cy.contains('button', 'Publish').click()
    
      cy.contains('new title')
    
        cy.get('#nav').click()

    cy.contains("Dashboard").click()

    cy.contains('tr', 'new title')
      .find('button')
      .contains('Delete')
      .click()

    cy.contains('new title').should('not.exist')

    cy.get('#nav').click()

    cy.contains("Log Out").click()
  })
})