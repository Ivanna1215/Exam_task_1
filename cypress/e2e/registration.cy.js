import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';

describe('Registration test suite', () => {

  beforeEach(() => {
    registrationPage.navigateToLogin()
    registrationPage.clickNewCustomerLink()
    registrationPage.verifyUserForm('User Registration');
  });

  it('Registration with valid data', () => {
    user.email = faker.internet.email();
    registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer);
  })

  it('Registration with invalid data', () => {
    user.email = faker.internet.email();
    user.passwordFirst = faker.internet.password();
    user.passwordSecond = faker.internet.password();
    registrationPage.fillEmailField(user.email)
    registrationPage.fillPasswordField(user.passwordFirst)
    registrationPage.fillRepeatPasswordField(user.passwordSecond)
    registrationPage.selectSecurityQuestion(user.question)
    registrationPage.fillSecurityAnswerField(user.answer)
    registrationPage.getErrorRegistrMessage().should('contain.text', 'Passwords do not match')
    registrationPage.getRegisterBtn().should('have.attr', 'disabled');

  })

})
