describe('TC007 - Add product to cart', () => {
    it('Should add "Sauce Labs Backpack" to the cart', () => {
      cy.login();
  
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
  
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    });
  });