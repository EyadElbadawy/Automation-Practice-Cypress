class ProductsPage {
    // Locators for elements on the page
    static FEATURES_ITEMS = '.features_items';
    static COL_SM_4 = '.col-sm-4';
    static PRODUCT_INFO = '.productinfo.text-center p';
    static DELETION_TEXT = 'Account Deleted!';

    // Locator for the search input
    static SEARCH_INPUT = '[id="search_product"]';
    
    // Locator for the search button
    static SEARCH_BUTTON = '[id="submit_search"]';

    // Method to enter a search word into the search input
    enterSearchWord(searchWord) {
        cy.get(ProductsPage.SEARCH_INPUT).type(searchWord);
    }

    // Method to click the search button
    clickSearch() {
        cy.get(ProductsPage.SEARCH_BUTTON).click();
    }

    // Method to perform a product search by entering a search word and clicking the search button
    performProductSearch(searchWord) {
        this.enterSearchWord(searchWord);
        this.clickSearch();
    }

    // Method to verify the product count on the page
    verifyProductCount(count) {
        cy.get(ProductsPage.FEATURES_ITEMS).should('exist').find(ProductsPage.COL_SM_4).should('have.length', count);
    }

    // Method to store product information in a file
    storeProductInfo(fileName) {
        let paragraphTexts = [];
        cy.get(ProductsPage.PRODUCT_INFO).each(($p) => {
            paragraphTexts.push($p.text()); // Push the text content to the array
        });
        cy.writeFile(fileName, paragraphTexts);
    }

    //Method to delete the account
    deleteAccount(){
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    }

    //check that the account is deleted
    assertAccountDelete(){
        cy.contains(ProductsPage.DELETION_TEXT).should('exist');
    }
}

export default ProductsPage;
