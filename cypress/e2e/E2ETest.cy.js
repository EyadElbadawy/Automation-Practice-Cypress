import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import AccountInfoPage from "../Pages/AccountInfoPage";
import AccountConfirmationPage from "../Pages/AccountConfirmationPage";
import ProductsPage from "../Pages/ProductsPage";

describe('E2E Testing for the Website', function () {
    Cypress.on('uncaught:exception', function (err, runnable) {
        // Prevent Cypress from failing the test on uncaught exceptions
        return false;
    });

    // Set up before running tests
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.fixture('TestData').as('data');
    });

    // Run once before starting the test suite
    before(function () {
        cy.visit('/');
    });

    it('User Registration and Shopping Scenario', function () {
        // Ensure the correct website URL
        cy.url().should('eq', 'https://automationexercise.com/');

        // Navigate to the signup page
        const homePage = new HomePage();
        homePage.navigateToSignUp();

        // Fill in user registration details
        const signUpPage = new SignUpPage();
        signUpPage.fillRegistrationForm(this.data.username, this.data.email);

        // Fill in user account information
        const accountInfoPage = new AccountInfoPage();
        accountInfoPage.fillAccountInfoForm(this.data);

        // Confirm successful account creation
        const accountConfirmationPage = new AccountConfirmationPage();
        accountConfirmationPage.confirmAccountCreation();

        // Verify that the user is logged in
        homePage.verifyUserLoggedIn();

        // Verify the presence of items on the page
        homePage.verifyItemsExist(34);

        // Verify the number of brands
        homePage.verifyBrandCount(8);

        // Perform product search
        homePage.ClickProduct();
        const productsPage = new ProductsPage();
        productsPage.performProductSearch(this.data.searchWord);

        // Verify the number of products found
        productsPage.verifyProductCount(6);

        // Store product information in a .txt file
        productsPage.storeProductInfo('info.txt');
    });
});
