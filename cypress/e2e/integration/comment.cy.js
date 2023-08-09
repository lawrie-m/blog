describe('comment as non-admin user', () => {

  beforeEach(() => {
        cy.nonAdminLogin('cypresstest@email.com', 'password')
  })
  
  it('Clicks first post and ', () => {
      
      cy.contains('Facere fugiat').click()
      
      cy.get('textarea').type('Second comment')

      cy.contains('button', 'Post').click()

      cy.get('article').contains('Second comment')
  })
})