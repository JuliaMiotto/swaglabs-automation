describe('TC017 - Validate total purchase value', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('Should calculate the total value correctly based on selected items', () => {
      // Add two products to the cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // $29.99
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // $9.99
  
      // Go to cart and proceed to checkout
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
  
      // Fill in customer information
      cy.get('[data-test="firstName"]').type('Test');
      cy.get('[data-test="lastName"]').type('Test');
      cy.get('[data-test="postalCode"]').type('89200000');
      cy.get('[data-test="continue"]').click();
  
      // Capture item prices and calculate total
      const expectedItemTotal = 29.99 + 9.99;
  
      cy.get('.summary_subtotal_label').should(($subtotal) => {
        const text = $subtotal.text();
        const value = parseFloat(text.replace('Item total: $', ''));
        expect(value).to.equal(expectedItemTotal);
      });
  
      cy.get('.summary_tax_label').then(($tax) => {
        const tax = parseFloat($tax.text().replace('Tax: $', ''));
  
        cy.get('.summary_total_label').should(($total) => {
          const total = parseFloat($total.text().replace('Total: $', ''));
          expect(total).to.equal(expectedItemTotal + tax);
        });
      });
    });
  });
  