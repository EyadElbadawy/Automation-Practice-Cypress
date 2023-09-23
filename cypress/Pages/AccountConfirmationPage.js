class AccountConfirmationPage {
    // Locators
    static CONFIRMATION_TEXT = 'Account Created!';
    static CONTINUE_BUTTON = '[data-qa="continue-button"]';

    // Method to confirm account creation
    confirmAccountCreation() {
        // Check for "Account Created!" text
        cy.contains(AccountConfirmationPage.CONFIRMATION_TEXT).should('exist');

        // Click the continue button
        cy.get(AccountConfirmationPage.CONTINUE_BUTTON).click();
    }
}

export default AccountConfirmationPage;
