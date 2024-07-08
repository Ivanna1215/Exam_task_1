import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import loginPage from '../support/LoginPage'

describe('Registration test suite', () => {

  beforeEach(() => {
    loginPage
      .openHomePage()
      .clickCloseBanner()
      .clickDismissButton()
      .clickAccountBtn()
      .clickLoginBtn()
      .clickNewCustomerLink()
      .verifyUserRegistratationForm();
  });

  it('Registration with valid data', () => {
    user.email = faker.internet.email();
    loginPage
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
    loginPage
      .fillEmailField(user.email)
      .fillPasswordField(user.passwordFirst)
      .fillRepeatPasswordField(user.passwordSecond)
      .selectSecurityQuestion(user.question)
      .fillSecurityAnswerField(user.answer)
      .getErrorRegistrMessage().should('contain.text', 'Passwords do not match')
    loginPage
      .getRegisterBtn().should('have.attr', 'disabled');

  })

})
