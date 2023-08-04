describe('testing functionality of searchbar', () => {

  beforeEach(() => {
    cy.viewport('macbook-15')
    
    cy.visit('http://127.0.0.1:8000/')
  })

  // it('input interation test', () => {
  //   cy.get('#searchbar').type('testing input')
  // })

  it('submit test and receives correct no. results', () => {
    cy.get('#searchbar').type('facere').type('{enter}')

    cy.get('a#readmore').should('have.length', 6)
  })

})