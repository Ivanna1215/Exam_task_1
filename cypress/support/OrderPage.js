import BasePage from "./BasePage";

class OrderPage extends BasePage {

    constructor() {
        super();
        this.basket = '[aria-label="Show the shopping cart"]';
        this.checkoutBtn = '#checkoutButton';
        this.country = '[data-placeholder="Please provide a country."]';
        this.name = '[placeholder="Please provide a name."]';
        this.mobileNumber = '[placeholder="Please provide a mobile number."]';
        this.zipCode = '[placeholder="Please provide a ZIP code."]';
        this.address = '[placeholder="Please provide an address."]';
        this.city = '[placeholder="Please provide a city."]';
        this.state = '[placeholder="Please provide a state."]';
        this.submitBtn = '#submitButton';
        this.radio = '[class="mat-radio-inner-circle"]';
        this.deliverySpeed = '[class="mat-row cdk-row ng-star-inserted"]';
        this.namePaymentOptions = '#mat-input-1';
        this.cardPaymentOptions = '#mat-input-2';
        this.expiryMonth = '#mat-input-3';
        this.expiryYear = '#mat-input-4';
    }

    getCheckBtn() {
        return cy.get(this.checkoutBtn)
    }

    getCountry() {
        return cy.get(this.country);
    }

    getName() {
        return cy.get(this.name);
    }

    getMobileNumber() {
        return cy.get(this.mobileNumber);
    }

    getZipCode() {
        return cy.get(this.zipCode);
    }

    getAddress() {
        return cy.get(this.address);
    }

    getCity() {
        return cy.get(this.city);
    }

    getState() {
        return cy.get(this.state);
    }

    getSubmitBtn() {
        return cy.get(this.submitBtn)
    }

    getRadio() {
        return cy.get(this.radio)
    }

    getDeliverySpeed() {
        return cy.get(this.deliverySpeed)
    }

    getNameForPayment() {
        return cy.get(this.namePaymentOptions)
    }

    getCardForPayment() {
        return cy.get(this.cardPaymentOptions)
    }

    getExpireMonth() {
        return cy.get(this.expiryMonth)
    }

    getExpireYear() {
        return cy.get(this.expiryYear)
    }

    clearProd() {
        this.getSeachProd().clear()
        return this
    }

    clickCheckout() {
        this.getCheckBtn().click()
        return this
    }

    clickSubmitBtn() {
        this.getSubmitBtn().click()
        return this
    }

    checkAddress() {
        this.getRadio().click()
        return this
    }

    selectOption(index = 0) {
        this.getDeliverySpeed().find(".mat-radio-button").eq(index).click()
        return this
    }

    selectBasket() {
        cy.contains('Your Basket', { timeout: 5000 }).click()
        return this
    }

    addAdress(country, name, mobileNumber, zipCode, address, city, state) {
        cy.contains('Add New Address', { timeout: 5000 }).click()
        this.verifyUserForm('Add New Address')
        this.getCountry().type(country); А
        this.getName().type(name);
        this.getMobileNumber().type(mobileNumber);
        this.getZipCode().type(zipCode);
        this.getAddress().type(address);
        this.getCity().type(city);
        this.getState().type(state);
        this.getSubmitBtn().click()
        return this
    }

    addCard() {
        cy.contains(' Add a credit or debit card ').click()
        return this
    }

    fillCard(contains, text) {
        cy.contains('mat-label', contains).then(($el) => {
            cy.wrap($el).parent().parent().parent().find('input').click().type(text);
        });
        return this
    }

    fillCardExpiryOptions(contains, option) {
        cy.contains('mat-label', contains).then(($el) => {
            cy.wrap($el).parent().parent().parent().find('.mat-input-element').select(option)
        });
        return this
    }

    fillCardOptions(optionName, name, optionNumber, cardNumber, optionMonth, month, optionYear, year) {
        this.fillCard(optionName, name)
            .fillCard(optionNumber, cardNumber)
            .fillCardExpiryOptions(optionMonth, month)
            .fillCardExpiryOptions(optionYear, year)
        return this
    }

    placeOrder() {
        cy.contains('Place your order and pay').click()
        return this
    }


}

export default new OrderPage();