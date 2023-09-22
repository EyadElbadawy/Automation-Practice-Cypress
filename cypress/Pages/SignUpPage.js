class SignUpPage {
    // Locators
    static USERNAME_INPUT = '[data-qa="signup-name"]';
    static EMAIL_INPUT = '[data-qa="signup-email"]';
    static SUBMIT_BUTTON = '[data-qa="signup-button"]';

    // Methods
    fillRegistrationForm(username, email) {
        this.setUserName(username);
        this.setEmail(email);
        this.clickSubmit();
    }

    setUserName(username) {
        cy.get(SignUpPage.USERNAME_INPUT).type(username);
    }

    setEmail(email) {
        cy.get(SignUpPage.EMAIL_INPUT).type(email);
    }

    clickSubmit() {
        cy.get(SignUpPage.SUBMIT_BUTTON).click();
    }
}

export default SignUpPage;
