// This email could not be added to our newsletter list

describe('Login as non-admin', () => {
  
    it('Logs a non-admin into blog', () => {

        cy.visit('http://127.0.0.1:8000/')

        cy.viewport('macbook-15')
    
        cy.get('#email').type('asdefceerff@adsregdcerf')
        
        cy.get('button[type=submit]').click()

        cy.contains('This email could not be added to our newsletter list')
    })
})