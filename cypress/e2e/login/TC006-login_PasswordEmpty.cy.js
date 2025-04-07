describe('TC006 - Login Password is Empty', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Should show error when password is missing', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain', 'Password is required');
    });
});