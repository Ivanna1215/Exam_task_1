import orderPage from '../support/OrderPage'
import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';

import { verifyPageText } from '../support/helper';


beforeEach(() => {
    user.email = faker.internet.email();
    orderPage
        .navigateToLogin()
        .clickNewCustomerLink()
        .verifyUserForm('User Registration')
    registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
        .fillLoginForm(user.email, user.password)
        .clickLoginBtn()

});

describe('Order Process', () => {

    it('Complete the order process', () => {
        orderPage
            .searchProduct('Apple Juice')
            .clickAddProdToBasket()
            .selectBasket()
            .clickCheckout()
            .addAdress(user.country, user.name, user.mobileNumber, user.zipCode, user.address, user.city, user.state)
            .verifyUserForm('Select an address')
        verifyPageText('have', [user.name, user.address, user.state]);
        orderPage.checkAddress()
            .clickContinueBtn()
            .selectOption()
            .clickContinueBtn()
            .addCard()
            .fillCardOptions('Name', user.name, 'Card Number', user.cardNumber, 'Expiry Month', 11, 'Expiry Year', '2080')
            .clickSubmitBtn()
            .verifyMessage('Your card ending with 1234 has been saved for your convenience.')
            .selectOption()
            .clickContinueBtn()
            .placeOrder()
        verifyPageText('have', ['Thank you for your purchase!', 'Your order will be delivered in 1 days.']);


    })
})