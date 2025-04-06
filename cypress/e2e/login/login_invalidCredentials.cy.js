describe('TC002 - Login with invalid credentials', () => {
    it('Should show error message when logging in with invalid credentials', () => {
      cy.visit('/');
  
      cy.get('[data-test="username"]').type('fake_user');
      cy.get('[data-test="password"]').type('wrong_pass');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
  });