describe('Guest register, login, post comment and logout', () => {
  it('Visits the Blog', () => {
    cy.visit('http://127.0.0.1:8000')

    cy.viewport('macbook-15')

    cy.contains('Register').click()

    cy.url().should('include', '/register')

    cy.get('#name').type('cypresstest@email.com')
      
    cy.get('#username').type('cypresstest')

    cy.get('input[type=email]').type('cypresstest@email.com')

    cy.get('input[type=password]').type('password')

      cy.contains('button', 'Sign Up').click()
    
      cy.get('button').should('contain', 'cypresstest@email.com').first().click()

      cy.contains('Log Out').click()

    cy.contains('Log In').click()
    
        cy.get('input[type=email]').type('cypresstest@email.com')

    cy.get('input[type=password]').type('password')

    cy.get('form').first().within(() => {
      cy.get('button').click()
    })

    cy.url().should('include', '/')

    cy.contains('Read More').click()

    cy.get('textarea').type('test comment')

    cy.contains('button', 'Post').click()

    cy.contains('test comment')

    cy.get('#nav').click()

    cy.contains('Log Out').click()

    cy.contains('Register')
  })
})