describe('Admin login, post, delete and logout', () => {

    beforeEach(() => {
        cy.login('lawrie@email.com', 'password')
    })

    it('Visits the Blog', () => {
        
        cy.visit('http://127.0.0.1:8000/')

        cy.get('#nav').click()

  })
})


