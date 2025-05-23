describe('TC018 - Successfully Checkout', () => {
    it('Should complete the checkout process and show confirmation message', () => {
      cy.login();
      
      // Add a product to the cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      
      // Fill in customer information an finish checkout
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('Test First Name');
      cy.get('[data-test="lastName"]').type('Test Last Name');
      cy.get('[data-test="postalCode"]').type('89200000');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
  
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
  });
  