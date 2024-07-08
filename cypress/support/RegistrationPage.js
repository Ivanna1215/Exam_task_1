import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.newCustomerLink = '#newCustomerLink';
        this.emailField = '#emailControl';
        this.passwordField = '#passwordControl';
        this.repeatPasswordField = '#repeatPasswordControl';
        this.securityAnswerField = '#securityAnswerControl';
        this.registerButton = '#registerButton';
        this.securityQuestion = '[class*="mat-select-arrow-wrapper"]';
        this.successfullyRegistrMessage = '[class="mat-simple-snack-bar-content"]';
        this.errorRegistrMessage = '#mat-error-10';
    }

    getNewCustomerLink() {
        return cy.get(this.newCustomerLink)
    }

    getEmailField() {
        return cy.get(this.emailField);
    }

    getPasswordField() {
        return cy.get(this.passwordField);
    }

    getRepeatPasswordField() {
        return cy.get(this.repeatPasswordField);
    }

    getSecurityAnswerField() {
        return cy.get(this.securityAnswerField);
    }

    getRegisterBtn() {
        return cy.get(this.registerButton)
    }

    getSecurityQustion() {
        return cy.get(this.securityQuestion)
    }

    getSuccessfullyRegistrMessage() {
        return cy.get(this.successfullyRegistrMessage)
    }

    getErrorRegistrMessage() {
        return cy.get(this.errorRegistrMessage)
    }

    fillEmailField(email) {
        cy.log("Fill email field");
        this.getEmailField().type(email)
        return this
    }

    fillPasswordField(password) {
        cy.log("Fill password field");
        this.getPasswordField().type(password)
        return this
    }

    fillRepeatPasswordField(password) {
        cy.log("Fill repeat password field in registration form");
        this.getRepeatPasswordField().type(password)
        return this
    }

    selectSecurityQuestion(question) {
        cy.log("Select security question in registration form");
        this.getSecurityQustion().click()
        cy.contains(question).click()
        return this
    }

    fillSecurityAnswerField(answer) {
        cy.log("Fill security answer in registration form");
        this.getSecurityAnswerField().type(answer)
        return this
    }

    clickNewCustomerLink() {
        cy.log('Click login btn')
        this.getNewCustomerLink().click()
        return this
    }

    clickRegistrButton() {
        cy.log("Submit registration form");
        this.getRegisterBtn().click();
        return this
    }




}

export default new RegistrationPage();