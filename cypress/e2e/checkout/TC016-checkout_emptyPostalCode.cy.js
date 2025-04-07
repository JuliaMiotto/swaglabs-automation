describe('TC016 - Checkout Form Postal Code Empty', () => {
    beforeEach(() => {
      cy.login();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
    });
    
    it('TC018 - Should show error when Postal Code is missing', () => {
        cy.get('[data-test="firstName"]').type('Test First Name');
        cy.get('[data-test="lastName"]').type('Test Last Name');
        // Do not fill in the Postal Code field
        cy.get('[data-test="continue"]').click();
    
        cy.get('[data-test="error"]').should('contain', 'Postal Code is required');
      });
    });