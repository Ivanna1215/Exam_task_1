import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';


describe('Registration test suite', () => {

  beforeEach(() => {
    registrationPage
      .navigateToLogin()
      .clickNewCustomerLink()
      .verifyUserForm('User Registration');
  });

  it('Registration with valid data', () => {
    user.email = faker.internet.email();
    registrationPage
      .successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
  })

  it('Registration with invalid data', () => {
    user.email = faker.internet.email();
    user.passwordFirst = faker.internet.password();
    user.passwordSecond = faker.internet.password();
    registrationPage
      .fillEmailField(user.email)
      .fillPasswordField(user.passwordFirst)
      .fillRepeatPasswordField(user.passwordSecond)
      .selectSecurityQuestion(user.question)
      .fillSecurityAnswerField(user.answer)
      .getErrorRegistrMessage().should('contain.text', 'Passwords do not match')
    registrationPage
      .getRegisterBtn().should('have.attr', 'disabled');

  })

})
