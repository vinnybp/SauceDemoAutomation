///  <reference types="Cypress"/>
import iventoryItemPage from "../e2e/pages/iventoryItemPage"
import inventoryPage from "../e2e/pages/inventoryPage"

Cypress.Commands.add('verifyInventoryProducts', () => {
    cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light')
    cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
    cy.get('#item_2_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Onesie')
    cy.get('#item_3_title_link > .inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('#item_5_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
})

Cypress.Commands.add('orderProductsAsc', () => {
    cy.get('.product_sort_container').select('Price (low to high)')
})


Cypress.Commands.add('orderProductsDesc', () => {
    cy.get('.product_sort_container').select('Price (high to low)')
})


Cypress.Commands.add('verifyOrderProductsAsc', () => {
    cy.get('#item_2_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Onesie')
    cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light')
    cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
    cy.get('#item_3_title_link > .inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('#item_5_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
})

Cypress.Commands.add('verifyOrderProductsDesc', () => {
    cy.get('#item_5_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('#item_3_title_link > .inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
    cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light')
    cy.get('#item_2_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Onesie')
})

Cypress.Commands.add('enterProductPage', (name) => {
    cy.contains(name).click()
})

Cypress.Commands.add('addItemToCartAndGoBack', () => {
    inventoryPage.clickAddToCartButton()
    iventoryItemPage.clickBackButton()
})