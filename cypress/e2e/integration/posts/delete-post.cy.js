describe('Admin deletes post', () => {

  beforeEach(() => {
        cy.adminLogin('lawrie@email.com', 'password')
  })
  
  it('Deletes test post', () => {

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