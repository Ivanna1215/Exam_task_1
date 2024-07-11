import orderPage from '../support/OrderPage'

import registrationPage from './RegistrationPage'
import { faker } from '@faker-js/faker';

export function successfullyRegistration(email, password, repeatPass, question, answer) {
    registrationPage
        .fillEmailField(email)
        .fillPasswordField(password)
        .fillRepeatPasswordField(password)
        .selectSecurityQuestion(question)
        .fillSecurityAnswerField(answer)
        .clickRegistrButton()
        .getSuccessfullyRegistrMessage().should('have.text', 'Registration completed successfully. You can now log in.');
}

export function addAdress(country, name, mobileNumber, zipCode, address, city, state) {
    cy.contains('Add New Address', { timeout: 5000 }).click()
    orderPage.verifyUserForm('Add New Address')
    orderPage.getCountry().type(country);
    orderPage.getName().type(name);
    orderPage.getMobileNumber().type(mobileNumber);
    orderPage.getZipCode().type(zipCode);
    orderPage.getAddress().type(address);
    orderPage.getCity().type(city);
    orderPage.getState().type(state);
    orderPage.getSubmitBtn().click()

}

export function verifyElementContainsText(element, text) {
    cy.contains(element, text).should('be.visible');
    return this
}

export function verifyElementNotContainsText(element, text) {
    cy.get(element).should('not.contain', text);
    return this
}

export function verifyPageText(action, textArray) {
    for (const text of textArray) {
        switch (action) {
            case 'have':
                verifyElementContainsText('body', text);
                break;
            case 'notHave':
                verifyElementNotContainsText('body', text);
                break;
        }
    }
    return this;
}





