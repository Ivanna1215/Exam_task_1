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
        cy.log("Get checkout button element");
        return cy.get(this.checkoutBtn);
    }

    getCountry() {
        cy.log("Get country input element");
        return cy.get(this.country);
    }

    getName() {
        cy.log("Get name input element");
        return cy.get(this.name);
    }

    getMobileNumber() {
        cy.log("Get mobile number input element");
        return cy.get(this.mobileNumber);
    }

    getZipCode() {
        cy.log("Get ZIP code input element");
        return cy.get(this.zipCode);
    }

    getAddress() {
        cy.log("Get address input element");
        return cy.get(this.address);
    }

    getCity() {
        cy.log("Get city input element");
        return cy.get(this.city);
    }

    getState() {
        cy.log("Get state input element");
        return cy.get(this.state);
    }

    getSubmitBtn() {
        cy.log("Get submit button element");
        return cy.get(this.submitBtn);
    }

    getRadio() {
        cy.log("Get radio button element");
        return cy.get(this.radio);
    }

    getDeliverySpeed() {
        cy.log("Get delivery speed element");
        return cy.get(this.deliverySpeed);
    }

    getNameForPayment() {
        cy.log("Get name for payment input element");
        return cy.get(this.namePaymentOptions);
    }

    getCardForPayment() {
        cy.log("Get card for payment input element");
        return cy.get(this.cardPaymentOptions);
    }

    getExpireMonth() {
        cy.log("Get expiry month select element");
        return cy.get(this.expiryMonth);
    }

    getExpireYear() {
        cy.log("Get expiry year select element");
        return cy.get(this.expiryYear);
    }

    clearProd() {
        cy.log("Clear product search input");
        this.getSeachProd().clear();
        return this;
    }

    clickCheckout() {
        cy.log("Click checkout button");
        this.getCheckBtn().click();
        return this;
    }

    clickSubmitBtn() {
        cy.log("Click submit button");
        this.getSubmitBtn().click();
        return this;
    }

    checkAddress() {
        cy.log("Click address radio button");
        this.getRadio().click();
        return this;
    }

    selectOption(index = 0) {
        cy.log(`Select delivery speed option at index ${index}`);
        this.getDeliverySpeed().find(".mat-radio-button").eq(index).click();
        return this;
    }

    selectBasket() {
        cy.log("Select 'Your Basket'");
        cy.contains('Your Basket', { timeout: 5000 }).click();
        return this;
    }

    addAddress(country, name, mobileNumber, zipCode, address, city, state) {
        cy.log("Click 'Add New Address'");
        cy.contains('Add New Address', { timeout: 5000 }).click();
        this.verifyUserForm('Add New Address');
        cy.log("Fill address form");
        this.getCountry().type(country);
        this.getName().type(name);
        this.getMobileNumber().type(mobileNumber);
        this.getZipCode().type(zipCode);
        this.getAddress().type(address);
        this.getCity().type(city);
        this.getState().type(state);
        this.getSubmitBtn().click();
        return this;
    }

    addCard() {
        cy.log("Click 'Add a credit or debit card'");
        cy.contains('Add a credit or debit card').click();
        return this;
    }

    fillCard(contains, text) {
        cy.log(`Fill card input field '${contains}' with text '${text}'`);
        cy.contains('mat-label', contains).then(($el) => {
            cy.wrap($el).parent().parent().parent().find('input').click().type(text);
        });
        return this;
    }

    fillCardExpiryOptions(contains, option) {
        cy.log(`Select expiry option '${option}' for '${contains}'`);
        cy.contains('mat-label', contains).then(($el) => {
            cy.wrap($el).parent().parent().parent().find('.mat-input-element').select(option);
        });
        return this;
    }

    fillCardOptions(optionName, name, optionNumber, cardNumber, optionMonth, month, optionYear, year) {
        cy.log("Fill card options");
        this.fillCard(optionName, name)
            .fillCard(optionNumber, cardNumber)
            .fillCardExpiryOptions(optionMonth, month)
            .fillCardExpiryOptions(optionYear, year);
        return this;
    }

    placeOrder() {
        cy.log("Click 'Place your order and pay'");
        cy.contains('Place your order and pay').click();
        return this;
    }
}

export default new OrderPage();