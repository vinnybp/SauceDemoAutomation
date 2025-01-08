/// <reference types ="Cypress"/>

class CartPage {

    elements = {
        cartButton: () => cy.get('.cart_item'),
        checkOutButton: () => cy.get('.btn_action')
    }

    validateCartEmpty() {
        this.elements.cartButton().should('not.exist');
    }

    proceedToCheckout() {
        this.elements.checkOutButton().click();
    }


}

module.exports = new CartPage();
