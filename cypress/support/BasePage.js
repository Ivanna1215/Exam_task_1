export default class BasePage {

    constructor() {
        this.closeBanner = '[aria-label="Close Welcome Banner"]';
        this.dismissButton = '[aria-label="dismiss cookie message"]';
        this.accountBtn = '#navbarAccount';
        this.navBarLoginBtn = '#navbarLoginButton';
        this.newCustomerLink = '#newCustomerLink';
        this.email = '#email';
        this.password = '#password';
        this.loginBtn = '#loginButton';
        this.errorMessageText = '[class="error ng-star-inserted"]';
        this.successfullyRegistrMessage = '[class="mat-simple-snack-bar-content"]';
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

    getNavBarLoginBtn() {
        return cy.get(this.navBarLoginBtn);
    }

    getNewCustomerLink() {
        return cy.get(this.newCustomerLink)
    }

    getEmail() {
        return cy.get(this.email)
    }

    getPassword() {
        return cy.get(this.password)
    }

    getLoginBtn() {
        return cy.get(this.loginBtn)
    }

    getErrormessageText() {
        return cy.get(this.errorMessageText)
    }

    getSuccessfullyRegistrMessage() {
        return cy.get(this.successfullyRegistrMessage)
    }

    fillLoginForm(loginName, password) {
        cy.log("Fill login form");
        loginName ? this.getEmail().type(loginName) : cy.log("Keep loginName input field empty");
        password ? this.getPassword().type(password) : cy.log("Keep password input field empty");
        return this
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

    clickNavBarLoginBtn() {
        this.getNavBarLoginBtn().click()
        return this
    }

    clickNewCustomerLink() {
        cy.log('Click login btn')
        this.getNewCustomerLink().click()
        return this
    }

    clickLoginBtn() {
        this.getLoginBtn().click()
        return this
    }

    verifyUserForm(contain) {
        cy.contains('h1', contain).should('be.visible')
        return this
    }

    verifyMessage(contains) {
        this.getSuccessfullyRegistrMessage().should('have.text', contains)
        return this
    }

    navigateToLogin() {
        this
            .openHomePage()
            .clickCloseBanner()
            .clickDismissButton()
            .clickAccountBtn()
            .clickNavBarLoginBtn()
        return this
    }

    clickNameButton(contains) {
        cy.contains(contains, { timeout: 5000 }).click({ force: true })
        return this
    }






}
