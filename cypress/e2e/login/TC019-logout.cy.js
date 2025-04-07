describe('TC019 - Logout', () => {
    it('Should log out and redirect back to login page', () => {
      cy.login();
      
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
  
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });