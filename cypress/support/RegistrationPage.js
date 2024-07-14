import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.emailField = '#emailControl';
        this.passwordField = '#passwordControl';
        this.repeatPasswordField = '#repeatPasswordControl';
        this.securityAnswerField = '#securityAnswerControl';
        this.registerButton = '#registerButton';
        this.securityQuestion = '[class*="mat-select-arrow-wrapper"]';
        this.errorRegistrMessage = '#mat-error-10';
    }

    getEmailField() {
        cy.log("Get email field element");
        return cy.get(this.emailField);
    }

    getPasswordField() {
        cy.log("Get password field element");
        return cy.get(this.passwordField);
    }

    getRepeatPasswordField() {
        cy.log("Get repeat password field element");
        return cy.get(this.repeatPasswordField);
    }

    getSecurityAnswerField() {
        cy.log("Get security answer field element");
        return cy.get(this.securityAnswerField);
    }

    getRegisterBtn() {
        cy.log("Get register button element");
        return cy.get(this.registerButton)
    }

    getSecurityQustion() {
        cy.log("Get security question dropdown element");
        return cy.get(this.securityQuestion)
    }

    getErrorRegistrMessage() {
        cy.log("Get error registration message element");
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


    clickRegistrButton() {
        cy.log("Submit registration form");
        this.getRegisterBtn().click();
        return this
    }

    successfullyRegistration(email, password, repeatPass, question, answer) {
        this
            .fillEmailField(email)
            .fillPasswordField(password)
            .fillRepeatPasswordField(password)
            .selectSecurityQuestion(question)
            .fillSecurityAnswerField(answer)
            .clickRegistrButton()
            .getSuccessfullyRegistrMessage().should('have.text', 'Registration completed successfully. You can now log in.');
        return this
    }


}

export default new RegistrationPage();