/// <reference types="Cypress"/>


describe('Inventory SauceDemo Tests', () => {

    it('Visualize Products Test', () => {

        // Login
        cy.loginSuccess()

        // Should verify all products in inventory
        cy.verifyInventoryProducts()

    });


    it('Adding Products in the Cart Test', () => {

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
        // Add third item to cart and go back to the Iventory Page
        cy.addItemToCartAndGoBack()

        // Should verify the number of items in the cart
        cy.verifyNumberOfItemsCart(3)

    });


});