///  <reference types="Cypress"/>

Cypress.Commands.add('loginSuccess', () => {
    cy.visit("https://www.saucedemo.com/v1")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
})

Cypress.Commands.add('isHomePage',()=>{
    cy.get('[data-test="username"]').should('be.visible')
})