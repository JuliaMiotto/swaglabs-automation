describe('TC009 - Sort products by name (Z to A)', () => {
    it('Should display products sorted alphabetically from Z to A', () => {
      cy.login();
  
      cy.get('[data-test="product-sort-container"]').select('za');
  
      cy.get('.inventory_item_name').then((items) => {
        const names = [...items].map((el) => el.textContent);
        const sorted = [...names].sort().reverse();
        expect(names).to.deep.equal(sorted);
      });
    });
  });
  