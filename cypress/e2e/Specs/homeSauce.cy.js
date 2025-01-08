/// <reference types ="Cypress"/>
import inventoryPage from "../pages/inventoryPage";
import homePage from "../pages/HomePage.JS";

describe.only('HomePage SauceDemo Tests', () => {

  it('ValidUsername Test', () => {

    // Open Website
    homePage.visit()

    // Insert Valid Username
    homePage.typeUsername("standard_user")
    homePage.typePassword("secret_sauce")
    homePage.clickLoginButton()

    // Should login to inventory page
    inventoryPage.elements.titleSpan().should('have.text', 'Products')

  });

  it('InvalidUsername Test', () => {

    // Open Website
    homePage.visit()

    // Insert Invalid Username
    homePage.typeUsername("standard_user1")
    homePage.typePassword("secret_sauce")
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

  });


});
