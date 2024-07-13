import feddbackPage from '../support/FeedbackPage'
import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';

beforeEach(() => {
    user.email = faker.internet.email();
    feddbackPage
        .navigateToLogin()
        .clickNewCustomerLink()
        .verifyUserForm('User Registration')
    registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
        .fillLoginForm(user.email, user.password)
        .clickLoginBtn();
});

describe('', () => {

    it('Leave customer feedback', () => {
        feddbackPage
            .clickOpenNav()
            .clickCustomerFeedback()
            .setRating(3)
            .fillCustomerFeedback(user.name, user.comment)
            .clickNameButton('Submit')
            .verifyMessage('Thank you for your feedback.')


    })
})