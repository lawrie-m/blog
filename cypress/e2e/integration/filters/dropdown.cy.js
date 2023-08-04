describe('check, nav as admin', () => {

  beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/')
      cy.viewport('macbook-15')
  })
  
  it('Visits the Blog', () => {
      
    cy.get('#dropdown')
      .click()

    cy.contains('All')
      .invoke('attr', 'href')
      .should('eq', '/?')
      
    cy.contains('Veniam')
      .invoke('attr', 'href')
      .should('eq', '/?category=veniam&')    
    
    cy.contains('Quas')
      .invoke('attr', 'href')
      .should('eq', '/?category=quas&')  

    cy.contains('Dolore')
      .invoke('attr', 'href')
      .should('eq', '/?category=dolore&')  

    cy.contains('Aliquam')
      .invoke('attr', 'href')
      .should('eq', '/?category=aliquam&')  
  })
})