describe('TC005 - Login Username is Empty', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Should show error when username is missing', () => {
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
});