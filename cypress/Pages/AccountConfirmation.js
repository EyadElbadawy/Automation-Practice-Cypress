class AccountConfirmation {
    ClickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }
}
export default AccountConfirmation