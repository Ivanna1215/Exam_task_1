

export function verifyElementContainsText(element, text) {
    cy.contains(element, text).should('be.visible');
    return this
}

export function verifyElementNotContainsText(element, text) {
    cy.get(element).should('not.contain', text);
    return this
}

export function verifyPageText(action, textArray) {
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







