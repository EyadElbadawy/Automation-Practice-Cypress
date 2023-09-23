class HomePage {
    // Locators
    static LOGIN_LINK = 'a[href="/login"]';
    static LOGOUT_TEXT = ' Logout';
    static FEATURES_ITEMS = '.features_items';
    static BRANDS_NAME = '.brands-name';
    static PRODUCTS_LINK = 'a[href="/products"]';

    // Method to navigate to the sign-up page
    navigateToSignUp() {
        cy.get(HomePage.LOGIN_LINK).click();
    }

    // Method to verify if the user is logged in
    verifyUserLoggedIn() {
        cy.contains(HomePage.LOGOUT_TEXT).should('exist');
    }

    // Method to verify the existence and count of items on the page
    verifyItemsExist(count) {
        cy.get(HomePage.FEATURES_ITEMS).should('exist').find('.col-sm-4').should('have.length', count);
    }

    // Method to verify the existence and count of brands on the page
    verifyBrandCount(count) {
        cy.get(HomePage.BRANDS_NAME).should('exist').find('li').should('have.length', count);
    }

    // Method to click on the "Products" link
    ClickProduct() {
        cy.get(HomePage.PRODUCTS_LINK).click();
    }
}

export default HomePage;
