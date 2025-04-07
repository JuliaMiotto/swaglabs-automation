describe('TC015 - Checkout Form Last Name Empty', () => {
    beforeEach(() => {
      cy.login();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
    });

    it('TC017 - Should show error when Last Name is missing', () => {
        cy.get('[data-test="firstName"]').type('Test');
        // Do not fill in the Last Name field
        cy.get('[data-test="postalCode"]').type('89200000');
        cy.get('[data-test="continue"]').click();
    
        cy.get('[data-test="error"]').should('contain', 'Last Name is required');
      });
    });