/// <reference types ="Cypress"/>

class inventoryItemPage {
  elements = {
    backToIventoryButton: () => cy.get('.inventory_details_back_button'),
    clickToCartButton: () => cy.get('.shopping_cart_link')
  }

  clickBackButton() {
    this.elements.backToIventoryButton().click({ force: true })
  }

  clickToCartButton() {
    this.elements.clickToCartButton().click()
  }


}


module.exports = new inventoryItemPage();