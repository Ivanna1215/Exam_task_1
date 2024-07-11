import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import authorizationPage from '../support/Authorizationpage'
import { successfullyRegistration } from '../support/helper';

beforeEach(() => {
    authorizationPage
        .openHomePage()
        .clickCloseBanner()
        .clickDismissButton()
        .clickAccountBtn()
        .clickNavBarLoginBtn()
});

describe('Authorization test suite', () => {

    it('Successful authorization', () => {
        authorizationPage.clickNewCustomerLink()
            .verifyUserForm('User Registration');
        user.email = faker.internet.email();
        successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
        authorizationPage
            .fillLoginForm(user.email, user.password)
            .clickLoginBtn()
    })
})

describe('Negative authorization test suite', () => {

    beforeEach(() => {
        authorizationPage.verifyUserForm('Login')
    })

    afterEach(() => {
        authorizationPage.clickLoginBtn()

        cy.log('Verify error message')
        authorizationPage.getErrormessageText().should('contain.text', 'Invalid email or password.')
    })

    it('User cannot login with incorrect email', () => {

        user.email = faker.internet.email();
        authorizationPage.fillLoginForm(user.email, user.password)
    })

    it('User cannot login with incorrect password', () => {
        user.password = faker.internet.userName();
        authorizationPage.fillLoginForm(user.email, user.password)
    })

    it('User cannot login with empty password', () => {
        authorizationPage.fillLoginForm(user.email, ' ');
    })

})