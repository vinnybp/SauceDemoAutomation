/// <reference types ="Cypress"/>

class InventoryPage {
  elements = {
    titleSpan: () => cy.get('.product_label'),
    addToCartButton: () => cy.get('.btn_primary')
  }

  clickAddToCartButton() {
    this.elements.addToCartButton().click()
  }


}

module.exports = new InventoryPage();