describe('Mobile Viewport Test', () => {
  it('should render the page with a mobile viewport', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.viewport(390, 844)

    cy.get('header').should('be.visible')
  });
});