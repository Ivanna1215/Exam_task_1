import feddbackPage from '../support/FeedbackPage'
import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';

beforeEach(() => {
    user.email = faker.internet.email();
    feddbackPage.navigateToLogin()
    feddbackPage.clickNewCustomerLink()
    feddbackPage.verifyUserForm('User Registration')
    registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
    feddbackPage.fillLoginForm(user.email, user.password)
    feddbackPage.clickLoginBtn();
});

it('Leave customer feedback', () => {
    feddbackPage.clickOpenNav()
    feddbackPage.clickCustomerFeedback()
    feddbackPage.setRating(3)
    feddbackPage.fillCustomerFeedback(user.name, user.comment)
    feddbackPage.clickNameButton('Submit')
    feddbackPage.verifyMessage('Thank you for your feedback.');
})
