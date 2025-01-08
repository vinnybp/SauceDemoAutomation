///  <reference types="Cypress"/>
Cypress.Commands.add('removeItemsCart', () => {
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click()
})

Cypress.Commands.add('verifyNumberOfItemsCart', (value) => {
    cy.get('.fa-layers-counter').should('have.text', value)
})

Cypress.Commands.add('enteringInformationAtCheckout', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('verifyTotalValueProducts', () => {
    cy.get('.summary_total_label').should('have.text', 'Total: $36.69')
})

Cypress.Commands.add('finalizingCheckout', () => {
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
})




