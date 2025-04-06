describe('TC010 - View product details', () => {
    it('Should redirect to product details page when a product is clicked', () => {
      cy.login();
  
      cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click();
  
      cy.url().should('include', '/inventory-item.html');
      cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack');
    });
  });
  