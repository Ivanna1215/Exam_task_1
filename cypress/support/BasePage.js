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
        return this;
    }

    getCloseBanner() {
        cy.log("Get close banner element");
        return cy.get(this.closeBanner);
    }

    getDismissButton() {
        cy.log("Get dismiss button element");
        return cy.get(this.dismissButton);
    }

    getAccountBtn() {
        cy.log("Get account button element");
        return cy.get(this.accountBtn);
    }

    getNavBarLoginBtn() {
        cy.log("Get navbar login button element");
        return cy.get(this.navBarLoginBtn);
    }

    getNewCustomerLink() {
        cy.log("Get new customer link element");
        return cy.get(this.newCustomerLink);
    }

    getEmail() {
        cy.log("Get email input element");
        return cy.get(this.email);
    }

    getPassword() {
        cy.log("Get password input element");
        return cy.get(this.password);
    }

    getLoginBtn() {
        cy.log("Get login button element");
        return cy.get(this.loginBtn);
    }

    getErrorMessageText() {
        cy.log("Get error message text element");
        return cy.get(this.errorMessageText);
    }

    getSuccessfullyRegistrMessage() {
        cy.log("Get successfully registration message element");
        return cy.get(this.successfullyRegistrMessage);
    }

    fillLoginForm(loginName, password) {
        cy.log("Fill login form");
        loginName ? this.getEmail().type(loginName) : cy.log("Keep loginName input field empty");
        password ? this.getPassword().type(password) : cy.log("Keep password input field empty");
        return this
    }

    clickCloseBanner() {
        cy.log('Close banner about more information and documentation on the project');
        this.getCloseBanner().click();
        return this;
    }

    clickDismissButton() {
        cy.log('Close cookie message');
        this.getDismissButton().click();
        return this;
    }

    clickAccountBtn() {
        cy.log('Click account button');
        this.getAccountBtn().click();
        return this;
    }

    clickNavBarLoginBtn() {
        cy.log('Click navbar login button');
        this.getNavBarLoginBtn().click();
        return this;
    }

    clickNewCustomerLink() {
        cy.log('Click new customer link');
        this.getNewCustomerLink().click();
        return this;
    }

    clickLoginBtn() {
        cy.log('Click login button');
        this.getLoginBtn().click();
        return this;
    }

    verifyUserForm(contain) {
        cy.log(`Verify user form contains text: ${contain}`);
        cy.contains('h1', contain).should('be.visible');
        return this;
    }

    verifyMessage(contains) {
        cy.log(`Verify message contains text: ${contains}`);
        this.getSuccessfullyRegistrMessage().should('have.text', contains);
        return this;
    }

    navigateToLogin() {
        cy.log('Navigate to login');
        this
            .openHomePage()
            .clickCloseBanner()
            .clickDismissButton()
            .clickAccountBtn()
            .clickNavBarLoginBtn();
        return this;
    }

    clickNameButton(contains) {
        cy.log(`Click button with name: ${contains}`);
        cy.contains(contains, { timeout: 5000 }).click({ force: true });
        return this;
    }
}