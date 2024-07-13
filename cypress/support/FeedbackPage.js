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
        return cy.get(this.openNav)
    }

    getOpenFeedback() {
        return cy.get(this.openFeedback)
    }

    getAuthorField() {
        return cy.get(this.authorField)
    }

    getCommentField() {
        return cy.get(this.commentField)
    }

    getCaptcha() {
        return cy.get(this.captcha)
    }

    getCaptchaControl() {
        return cy.get(this.captchaControl)
    }

    getRating() {
        return cy.get(this.rating)
    }

    clickOpenNav() {
        this.getOpenNav().click()
        return this
    }

    clickCustomerFeedback() {
        this.getOpenFeedback().click()
        return this
    }

    fillCustomerFeedback(author, comment) {
        this.getAuthorField().type(author, { force: true })
        this.getCommentField().type(comment, { force: true })
        let result;
        this.getCaptcha().invoke('text').then((text) => {
            const result = eval(text);
            this.getCaptchaControl().type(result.toString(), { force: true });
        });


        return this
    }

    setRating(rating) {
        this.getRating().then($slider => {
            const width = $slider.width();
            const offset = width * (rating - 1) / 4;
            cy.wrap($slider).click(offset, 10);
        });
        return this;
    }

}

export default new FeedbackPage();