import authorizationPage from '../support/Authorizationpage'
import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';



beforeEach(() => {
    authorizationPage
        .navigateToLogin()
});

describe('Authorization test suite', () => {

    it('Successful authorization', () => {
        user.email = faker.internet.email();
        authorizationPage.clickNewCustomerLink()
            .verifyUserForm('User Registration')
        registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
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