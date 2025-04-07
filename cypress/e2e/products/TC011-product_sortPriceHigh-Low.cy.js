describe('TC011 - Sort products by price (high to low)', () => {
    it('Should display products sorted by price descending', () => {
      cy.login();
  
      cy.get('[data-test="product-sort-container"]').select('hilo');
  
      cy.get('.inventory_item_price').then((prices) => {
        const values = [...prices].map((el) => parseFloat(el.textContent.replace('$', '')));
        const sorted = [...values].sort((a, b) => b - a);
        expect(values).to.deep.equal(sorted);
      });
    });
  });
  