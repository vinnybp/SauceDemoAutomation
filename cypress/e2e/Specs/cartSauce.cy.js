/// <reference types="Cypress"/>
import cartPage from "../pages/cartPage";
import inventoryPage from "../pages/inventoryPage";
import iventoryItemPage from "../pages/iventoryItemPage";

describe('Cart SauceDemo Tests', () => {

    it('Removing Products from the Cart Test', () => {

        // Login
        cy.loginSuccess()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Onesie')
        // Add first item to cart and go back to the Iventory Page
        cy.addItemToCartAndGoBack()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Bike Light')
        // Add second item to cart and go back to the Iventory Page
        cy.addItemToCartAndGoBack()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Bolt T-Shirt')
        // Add third item to cart
        inventoryPage.clickAddToCartButton()

        // Getting to the Cart Page
        iventoryItemPage.clickToCartButton()

        // Remove all items from cart
        cy.removeItemsCart()

        // Should verify cart is empty
        cartPage.validateCartEmpty()

    });

    it('Proceed To Checkout Test', () => {
        // Login
        cy.loginSuccess()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Onesie')
        // Add first item to cart and go back to the Iventory Page
        cy.addItemToCartAndGoBack()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Bike Light')
        // Add second item to cart and go back to the Iventory Page
        cy.addItemToCartAndGoBack()

        // Getting to the Product Page
        cy.enterProductPage('Sauce Labs Bolt T-Shirt')
        // Add third item to cart
        inventoryPage.clickAddToCartButton()

        // Getting to the Cart Page
        iventoryItemPage.clickToCartButton()

        // Getting to the CheckOut Page
        cartPage.proceedToCheckout()

        // Entering Information At Checkout
        cy.enteringInformationAtCheckout('Vinny', 'Barros Paiva', '64608042')

        // Should verify Total Value Of Products
        cy.verifyTotalValueProducts()

        // Should Finish Checkout
        cy.finalizingCheckout()


    });
});