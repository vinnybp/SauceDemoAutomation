/// <reference types="Cypress"/>

class HomePage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLoginButton() {
        this.elements.loginBtn().click()
    }

    visit() {
        cy.visit("https://www.saucedemo.com/v1/")
    }

}

module.exports = new HomePage();