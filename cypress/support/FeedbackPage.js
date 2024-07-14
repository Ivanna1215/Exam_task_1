import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    constructor() {
        super();

        this.openNav = '[aria-label ="Open Sidenav"]';
        this.openFeedback = '[aria-label="Go to contact us page"]';
        this.authorField = 'input[aria-label="Field with the name of the author"]';
        this.rating = '#rating';
        this.commentField = '#comment';
        this.captcha = '#captcha';
        this.captchaControl = '#captchaControl';
    }

    getOpenNav() {
        cy.log("Get open navigation button");
        return cy.get(this.openNav);
    }

    getOpenFeedback() {
        cy.log("Get open feedback button");
        return cy.get(this.openFeedback);
    }

    getAuthorField() {
        cy.log("Get author field");
        return cy.get(this.authorField);
    }

    getCommentField() {
        cy.log("Get comment field");
        return cy.get(this.commentField);
    }

    getCaptcha() {
        cy.log("Get captcha field");
        return cy.get(this.captcha);
    }

    getCaptchaControl() {
        cy.log("Get captcha control field");
        return cy.get(this.captchaControl);
    }

    getRating() {
        cy.log("Get rating slider");
        return cy.get(this.rating);
    }

    clickOpenNav() {
        cy.log("Click open navigation button");
        this.getOpenNav().click();
        return this;
    }

    clickCustomerFeedback() {
        cy.log("Click customer feedback button");
        this.getOpenFeedback().click();
        return this;
    }

    fillCustomerFeedback(author, comment) {
        cy.log("Fill customer feedback form");
        this.getAuthorField().type(author, { force: true });
        this.getCommentField().type(comment, { force: true });
        this.getCaptcha().invoke('text').then((text) => {
            const result = eval(text);
            this.getCaptchaControl().type(result.toString(), { force: true });
        });
        return this;
    }

    setRating(rating) {
        cy.log(`Set rating to ${rating}`);
        this.getRating().then($slider => {
            const width = $slider.width();
            const offset = width * (rating - 1) / 4;
            cy.wrap($slider).click(offset, 10);
        });
        return this;
    }
}

export default new FeedbackPage();