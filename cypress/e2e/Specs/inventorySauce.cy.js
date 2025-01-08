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

    it('Sort Products in Ascending Order Test', () => {

        // Login
        cy.loginSuccess()

        // Ordering Products in Ascending Order
        cy.orderProductsAsc()

        // Should verify if the products are in the ascending order
        cy.verifyOrderProductsAsc()

    });


    it('Sort Products in Descending Order Test', () => {

        // Login
        cy.loginSuccess()

        // Ordering Products in Descending Order
        cy.orderProductsDesc()

        // Should verify if the products are in the descending order
        cy.verifyOrderProductsDesc()

    });


    it('Logout Test', () => {

        // Login
        cy.loginSuccess()

        // Logout
        cy.logout()

        // Should verify if the user logout it with success
        cy.isHomePage()

    });


});