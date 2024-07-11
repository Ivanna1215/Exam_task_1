import BasePage from "./BasePage";

class OrderPage extends BasePage {

    constructor() {
        super();
        this.searchProd = '[class*="mat-search_icon-search"]';
        this.btn_basket = '[class*= "btn-basket"]';
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

    getSeachProd() {
        return cy.get(this.searchProd)
    }

    getBtnBasket() {
        return cy.get(this.btn_basket)
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


    searchProduct(product) {
        this.getSeachProd().type(`${product}{enter}`)
        return this
    }

    clearProd() {
        this.getSeachProd().clear()
        return this
    }


    clickAddProdToBasket() {
        this.getBtnBasket().click()
        return this
    }

    clickCheckout() {
        this.getCheckBtn().click()
        return this
    }

    clickContBtn() {
        cy.contains('Continue').click()
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

    selectDeliverySpeed(index = 0) {
        this.getDeliverySpeed().find(".mat-radio-button").eq(index).click()
        return this
    }
}

export default new OrderPage();