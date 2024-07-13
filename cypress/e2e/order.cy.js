import orderPage from '../support/OrderPage'
import registrationPage from '../support/RegistrationPage'
import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';

import { addProductIntoBasket, verifyPageText } from '../support/helper';


beforeEach(() => {
    user.email = faker.internet.email();
    orderPage.navigateToLogin()
    orderPage.clickNewCustomerLink()
    orderPage.verifyUserForm('User Registration')
    registrationPage.successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
    orderPage.fillLoginForm(user.email, user.password)
    orderPage.clickLoginBtn()

});

describe('Order Process', () => {

    it('Complete the order process', () => {
        addProductIntoBasket('Apple Juice')
        orderPage.selectBasket()
        orderPage.clickCheckout()
        orderPage.addAdress(user.country, user.name, user.mobileNumber, user.zipCode, user.address, user.city, user.state)
        orderPage.verifyUserForm('Select an address')
        verifyPageText('have', [user.name, user.address, user.state]);
        orderPage.checkAddress()
        orderPage.clickNameButton('Continue')
        orderPage.selectOption()
        orderPage.clickNameButton('Continue')
        orderPage.addCard()
        orderPage.fillCardOptions('Name', user.name, 'Card Number', user.cardNumber, 'Expiry Month', 11, 'Expiry Year', '2080')
        orderPage.clickSubmitBtn()
        orderPage.verifyMessage('Your card ending with 1234 has been saved for your convenience.')
        orderPage.selectOption()
        orderPage.clickNameButton('Continue')
        orderPage.placeOrder()
        verifyPageText('have', ['Thank you for your purchase!', 'Your order will be delivered in 1 days.']);


    })
})