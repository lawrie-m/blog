describe('Check that each page displays correct no. posts', () => {

  beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/')
      cy.viewport('macbook-15')
  })
  
  it('Checks page 1 has 6 posts, and page 2 has 5', () => {
      
      cy.get('article').should('have.length', 6)
      
      cy.get('a').contains('2').click()

      cy.get('article').should('have.length', 5)
  })
})