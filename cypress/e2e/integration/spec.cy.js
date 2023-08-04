describe('My First Test', () => {
  it('Visits the Blog', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.viewport('macbook-15')

    cy.contains('Log In').click()

    cy.url().should('include', '/login')

    cy.get('input[type=email]').type('lawrie@email.com')

    cy.get('input[type=password]').type('password')

    cy.get('form').first().within(() => {
      cy.get('button').click()
    })

    cy.url().should('include', '/')

    cy.get('button').should('contain', 'lawrie')
  })
})