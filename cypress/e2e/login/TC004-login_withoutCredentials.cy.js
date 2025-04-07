describe('TC004 - Login without credentials', () => {
  
    it('Should show error when trying to login without filling fields', () => {
      cy.visit('/');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
  });