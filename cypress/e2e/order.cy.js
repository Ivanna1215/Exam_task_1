import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import orderPage from '../support/OrderPage'
import { successfullyRegistration, addAdress, verifyPageText } from '../support/helper';


beforeEach(() => {
    orderPage
        .openHomePage()
        .clickCloseBanner()
        .clickDismissButton()
        .clickAccountBtn()
        .clickNavBarLoginBtn()
        .clickNewCustomerLink()
        .verifyUserForm('User Registration');
    user.email = faker.internet.email();
    successfullyRegistration(user.email, user.password, user.password, user.question, user.answer)
    orderPage
        .fillLoginForm(user.email, user.password)
        .clickLoginBtn()

});

describe('', () => {

    it('', () => {
        orderPage
            .searchProduct('Apple Juice')
            .clickAddProdToBasket()
        cy.contains('Your Basket', { timeout: 5000 }).click()
        orderPage
        orderPage.clickCheckout()
        addAdress(user.country, user.name, user.mobileNumber, user.zipCode, user.address, user.city, user.state)
        orderPage.verifyUserForm('Select an address')
        verifyPageText('have', [user.name, user.address, user.state]);
        orderPage.checkAddress()
            .clickContBtn()
            .selectDeliverySpeed()
            .clickContBtn()
        cy.contains(' Add a credit or debit card ').click()


        cy.contains('mat-label', 'Name').then(($el) => {
            cy.wrap($el).parent().parent().parent().find('input').click().type(user.name);
        });


        cy.contains('mat-label', 'Card Number').then(($el) => {
            cy.wrap($el).parent().parent().parent().find('input').click().type(user.cardNumber);
        });


        cy.contains('mat-label', 'Expiry Month').then(($el) => {
            cy.wrap($el).parent().parent().parent().find('.mat-input-element').select('11')

        });


        cy.contains('mat-label', 'Expiry Year').then(($el) => {
            cy.wrap($el).parent().parent().parent().find('.mat-input-element').select('2080')
        });

        orderPage.clickSubmitBtn()
            .getSuccessfullyRegistrMessage().should('have.text', 'Your card ending with 1234 has been saved for your convenience.')

        // check this 
        orderPage.selectDeliverySpeed(0)
            .clickContBtn()

        cy.contains('Place your order and pay').click()

        verifyPageText('have', ['Thank you for your purchase!', 'Your order will be delivered in 1 days.']);


    })
})