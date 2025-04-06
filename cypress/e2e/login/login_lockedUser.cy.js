describe('TC003 - Login with locked out user', () => {
    it('Should show error message for locked out user', () => {
      cy.visit('/');
  
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
    });
  });