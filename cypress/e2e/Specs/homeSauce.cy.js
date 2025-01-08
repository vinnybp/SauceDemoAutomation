/// <reference types ="Cypress"/>
import inventoryPage from "../pages/inventoryPage";
import homePage from "../pages/HomePage.JS";

describe.only('HomePage SauceDemo Tests', () => {

  it('ValidUsername Test', () => {

    // Open Website
    homePage.visit()

    // Insert Valid Username
    homePage.typeUsername("standard_user")

    // Insert Valid Password
    homePage.typePassword("secret_sauce")

    // Click Login Button with Valid Username and Valid Passsword
    homePage.clickLoginButton()

    // Should login to inventory page
    inventoryPage.elements.titleSpan().should('have.text', 'Products')

  });

  it('InvalidUsername Test', () => {

    // Open Website
    homePage.visit()

    // Insert Invalid Username
    homePage.typeUsername("standard_user1")

    //Insert valid Password 
    homePage.typePassword("secret_sauce")

    // Click Login Button with Invalid Username and Valid Password
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

  });


  it('InvalidPassword Test', () => {

    // Open Website
    homePage.visit()

    // Insert Valid Username
    homePage.typeUsername("standard_user")

    // Insert Invalid Password
    homePage.typePassword("secret_sauce1")

    // Click Login Button with Valid Username and Invalid Password
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')

  });

  it('UsernameAndPassword Empty Test', () => {

    // Open Website
    homePage.visit()

    // Click Login Button with Username and Password Empty
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Username is required')

  });

  it('Password Empty Test', () => {

    // Open Website
    homePage.visit()

    // Insert Valid Username
    homePage.typeUsername("standard_user")


    // Click Login Button with Password Empty
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Password is required')

  });

  it('Logging in with Blocked User', () => {

    // Open Website
    homePage.visit()

    // Insert Valid Blocked Username
    homePage.typeUsername("locked_out_user")

    //Insert valid Password 
    homePage.typePassword("secret_sauce")

    // Click Login Button with Valid Blocked Username and Password
    homePage.clickLoginButton()

    // Should throw an error message
    homePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

  });


});
