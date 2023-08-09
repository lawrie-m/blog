describe('Check that each page displays correct no. posts', () => {

  beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/')
      cy.viewport('macbook-15')
  })
  
  it('Checks page 1 has 6 posts, and page 2 has 5', () => {
      
      cy.get('article').should('have.length', 6)

      cy.contains('Showing 1 to 6 of 11 results')
      
      cy.get('a').contains('2').click()
      
      cy.contains('Showing 7 to 11 of 11 results')

      cy.get('article').should('have.length', 5)
  })
})