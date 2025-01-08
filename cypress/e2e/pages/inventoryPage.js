/// <reference types ="Cypress"/>

class inventoryPage{
      elements = {
        titleSpan: () => cy.get('.product_label')
      }
}


module.exports = new inventoryPage();