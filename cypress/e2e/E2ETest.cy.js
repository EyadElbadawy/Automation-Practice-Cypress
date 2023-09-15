import HomePage from "../Pages/HomePage"
import SignUp from "../Pages/SignUpPage"
import AccountInfo from "../Pages/AccountInfoPage"
import AccountConfirmation from "../Pages/AccountConfirmation"
import Products from "../Pages/ProductsPage"
describe('Performing E2E testing for the website', function () {

    Cypress.on('uncaught:exception', function (err, runnable) {
        // returning false here prevents Cypress from failing the test
        return false
    })
    //runs before each test
    beforeEach(function () {
        cy.viewport(1920, 1080);
        cy.fixture('TestData').as('data');
    })
    //run once before starting the test
    before(function () {
        cy.visit('/');
    })
    it('E2E user creation scenario', function () {
        cy.url().should('eq', 'https://automationexercise.com/');

        //Entering signup page
        const homePage = new HomePage();
        homePage.ClickLogin();

        //entering credentials
        cy.get('@data').then(function (data) {
            const signUp = new SignUp();
            signUp.setUserName(data.username);
            signUp.setEmail(data.email);
            signUp.clickSubmit();
        })

        //enteringAccountInfo
        cy.get('@data').then(function (data) {
            const accountInfo = new AccountInfo();
            accountInfo.chooseGender();
            accountInfo.setPassword(data.password);
            accountInfo.chooseDay();
            accountInfo.chooseMonth();
            accountInfo.chooseYear();
            accountInfo.setFirstName(data.firstName);
            accountInfo.setLastName(data.lastName);
            accountInfo.setAddress(data.address);
            accountInfo.chooseCountry();
            accountInfo.setState(data.state);
            accountInfo.setCity(data.city);
            accountInfo.setZipCode(data.zipcode);
            accountInfo.setMobileNumber(data.mobile_Number);
            accountInfo.clickSubmit();
        })

        //Account Confirmation Pgae
        cy.contains('Account Created!').should('exist');
        const accountConfirmation = new AccountConfirmation();
        accountConfirmation.ClickContinue();

        //verify Account is logged in
        cy.contains(' Logout').should('exist');

        //verifying it has 34 items
        cy.get('.features_items').should('exist').find('.col-sm-4').should('have.length', 34);

        //verifying that BRANDS has 8 brands 
        cy.get('.brands-name').should('exist').find('li').should('have.length', 8);

        //check products
        cy.get('@data').then(function (data) {
            homePage.ClickProduct();
            const products = new Products();
            products.enterSearchWord(data.searchWord);
            products.clickSearch();

            //verifying that cotton products are 6
            cy.get('.features_items').should('exist').find('.col-sm-4').should('have.length', 6);

            //storing data in a .txtfile
            let paragraphTexts = [];
            cy.get('.productinfo.text-center p').each(($p) => {
                paragraphTexts.push($p.text()); // Push the text content to the array
            });
            cy.writeFile('info.txt', paragraphTexts)
        })
    })
})