describe('TC013 - Cancel checkout on personal info step', () => {
    it('Should cancel checkout and return to the cart page', () => {
      cy.login();
  
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="cancel"]').click();
  
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    });
  });
  