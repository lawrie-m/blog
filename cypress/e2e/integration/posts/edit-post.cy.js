describe('Admin edits last post', () => {

  beforeEach(() => {
        cy.adminLogin('lawrie@email.com', 'password')
  })
  
  it('Edits last post', () => {

    cy.get('#nav').click()

    cy.contains('Dashboard').click()

    cy.url().should('include', 'admin/posts')
      
    cy.get('tr').find('a').eq(1).click()
      
    cy.get('#title').clear().type('Edited title')
    
    cy.get('#slug').clear().type('edited-slug')

    cy.get('#excerpt').clear().type('Edited excerpt')

    cy.get('#body').clear().type('Edited body')

    cy.contains('button', 'Update').click()

    cy.get('#nav').click()

    cy.contains('Homepage').click()

    cy.contains('a', '2').click()

    cy.url().should('include', 'page=2')

    cy.contains('Edited excerpt')

    cy.contains('a', 'Edited title').click()

    cy.url().should('include', 'edited-slug')

    cy.contains('Edited body')

    cy.get('#nav').click()

    cy.contains('Dashboard').click()

    cy.url().should('include', 'admin/posts')
      
    cy.get('tr').find('a').eq(1).click()
      
    cy.get('#title').clear().type('Original title')
    
    cy.get('#slug').clear().type('original-slug')

    cy.get('#excerpt').clear().type('Original excerpt')

    cy.get('#body').clear().type('Original body')

    cy.contains('button', 'Update').click()
  })
})