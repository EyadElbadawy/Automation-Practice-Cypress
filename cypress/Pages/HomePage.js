class HomePage {
    ClickLogin() {
        cy.get('a[href="/login"]').click();
    }
    ClickProduct() {
        cy.get('a[href="/products"]').click();
    }
}
export default HomePage