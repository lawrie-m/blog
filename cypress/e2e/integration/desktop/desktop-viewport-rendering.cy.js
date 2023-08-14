describe('Desktop Viewport Test', () => {
  it('should render the page with a desktop viewport', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.viewport('macbook-13')

    cy.get('header').should('be.visible')
  });
});