class Products {
    enterSearchWord(searchWord){
        cy.get('[id="search_product"]').type(searchWord);
    }
    clickSearch(){
        cy.get('[id="submit_search"]').click();
    }
}
export default Products