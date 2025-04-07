describe('TC008 - Remove product from cart', () => {
    it('Should remove the product from the cart', () => {
      cy.login();
  
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
  
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('.cart_item').should('not.exist');
    });
  });
  