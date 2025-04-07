describe('TC001 - Login with valid credentials', () => {
    it('Should log in with standard_user and redirect to inventory', () => {
      cy.visit('/');
  
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
    });
  });