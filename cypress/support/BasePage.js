export default class BasePage {

    constructor() {
        this.closeBanner = '[aria-label="Close Welcome Banner"]';
        this.dismissButton = '[aria-label="dismiss cookie message"]';
        this.accountBtn = '#navbarAccount';
        this.loginBtn = '#navbarLoginButton';
        this.newCustomerLink = '#newCustomerLink';

    }

    openHomePage() {
        cy.log("Open home page");
        cy.visit('/');
        return this
    }

    getClosebanner() {
        return cy.get(this.closeBanner);
    }

    getDismissButton() {
        return cy.get(this.dismissButton)
    }

    getAccountBtn() {
        return cy.get(this.accountBtn);
    }

    getLoginBtn() {
        return cy.get(this.loginBtn);
    }

    getNewCustomerLink() {
        return cy.get(this.newCustomerLink)
    }

    clickCloseBanner() {
        cy.log('Close banner about more information and documentation on the project')
        this.getClosebanner().click();
        return this
    }

    clickDismissButton() {
        cy.log('Close cookie message')
        this.getDismissButton().click()
        return this
    }

    clickAccountBtn() {
        cy.log('Click account btn')
        this.getAccountBtn().click()
        return this
    }

    clickLoginBtn() {
        cy.log('Click login btn')
        this.getLoginBtn().click()
        return this
    }

    clickNewCustomerLink() {
        cy.log('Click login btn')
        this.getNewCustomerLink().click()
        return this
    }

verifyUserRegistratationForm(){
    cy.contains('h1', 'User Registration').should('be.visible')
    return this
}
    


}
