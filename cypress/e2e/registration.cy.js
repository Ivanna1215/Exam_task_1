import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import registrationPage from '../support/RegistrationPage'

describe('Registration test suite', () => {

  beforeEach(() => {
    registrationPage
      .openHomePage()
      .clickCloseBanner()
      .clickDismissButton()
      .clickAccountBtn()
      .clickNavBarLoginBtn()
      .clickNewCustomerLink()
      .verifyUserForm('User Registration');
  });

  it('Registration with valid data', () => {
    // user.email = faker.internet.email();
    registrationPage
      .fillEmailField(user.email)
      .fillPasswordField(user.password)
      .fillRepeatPasswordField(user.password)
      .selectSecurityQuestion(user.question)
      .fillSecurityAnswerField(user.answer)
      .clickRegistrButton()
      .getSuccessfullyRegistrMessage().should('have.text', 'Registration completed successfully. You can now log in.');
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
