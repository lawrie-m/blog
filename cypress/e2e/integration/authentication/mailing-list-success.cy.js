describe('Login as non-admin', () => {
  
    it('Logs a non-admin into blog', () => {

        cy.visit('http://127.0.0.1:8000/')

        cy.viewport('macbook-15')
    
        cy.get('#email').type('asdefceerff@adsregdcerf.com')
        
        cy.get('button[type=submit]').click()

        cy.get('#success').contains('You are now signed up for our newsletter!')
    })
})