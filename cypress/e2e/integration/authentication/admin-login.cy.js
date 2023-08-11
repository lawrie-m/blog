describe('Login as admin', () => {
  
    it('Logs admin into blog', () => {

    cy.visit('http://127.0.0.1:8000/login')

    cy.viewport('macbook-15')

    
    cy.get('input[type=email]').type('lawrie@email.com')

    cy.get('input[type=password]').type('password')

    cy.get('form').first().within(() => {
        cy.get('button').click()   
    })
        
    cy.get('#nav').should('contain', 'Welcome')
    })
})
