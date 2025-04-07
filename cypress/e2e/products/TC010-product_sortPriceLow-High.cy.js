describe('TC010 - Sort products by price (low to high)', () => {
    it('Should display products sorted by price from low to high', () => {
      cy.login();
  
      cy.get('[data-test="product-sort-container"]').select('lohi');
  
      cy.get('.inventory_item_price').then((prices) => {
        const priceValues = [...prices].map((el) => parseFloat(el.textContent.replace('$', '')));
        const sorted = [...priceValues].sort((a, b) => a - b);
        expect(priceValues).to.deep.equal(sorted);
      });
    });
  });
  