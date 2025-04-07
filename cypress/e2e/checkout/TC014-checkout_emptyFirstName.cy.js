describe('TC014 - Checkout Form First Name Empty', () => {
    beforeEach(() => {
      cy.login();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
    });

    it('Should show error when First Name is missing', () => {
      // Do not fill in the First Name field
      cy.get('[data-test="lastName"]').type('Test');
      cy.get('[data-test="postalCode"]').type('89200000');
      cy.get('[data-test="continue"]').click();

      cy.get('[data-test="error"]').should('contain', 'First Name is required');
    });
  });