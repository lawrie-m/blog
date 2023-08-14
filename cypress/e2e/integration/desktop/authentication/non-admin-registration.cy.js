describe('Register new user', () => {
  
    it('Registers a non-admin', () => {

    cy.visit('http://127.0.0.1:8000/register')

    cy.viewport('macbook-15')
        
    cy.get('#name').type('cypresstest2')
    
    cy.get('#username').type('cypresstest2')
    
    cy.get('input[type=email]').type('cypresstest2@email.com')

    cy.get('input[type=password]').type('password')

    cy.get('button[type="submit"]').eq(0).click();   
        
    cy.get('#nav').should('contain', 'Welcome')
    })
})
