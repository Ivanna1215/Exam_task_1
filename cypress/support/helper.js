export function addProductIntoBasket(product) {
    cy.log(`Add product ${product} into basket`);
    cy.get('[class*="mat-search_icon-search"]').type(`${product}{enter}`);
    cy.get('[class*= "btn-basket"]').click();
    return this;
}

export function verifyElementContainsText(element, text) {
    cy.log(`Verify element ${element} contains text ${text}`);
    cy.contains(element, text).should('be.visible');
    return this;
}

export function verifyElementNotContainsText(element, text) {
    cy.log(`Verify element ${element} does not contain text ${text}`);
    cy.get(element).should('not.contain', text);
    return this;
}

export function verifyPageText(action, textArray) {
    cy.log(`Verify page text with action ${action}`);
    for (const text of textArray) {
        switch (action) {
            case 'have':
                verifyElementContainsText('body', text);
                break;
            case 'notHave':
                verifyElementNotContainsText('body', text);
                break;
        }
    }
    return this;
}




