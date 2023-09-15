class SignUp {
    setUserName(Username){
        cy.get('[data-qa="signup-name"]').type(Username);
    }
    setEmail(email){
        cy.get('[data-qa="signup-email"]').type(email);
    }
    clickSubmit(){
        cy.get('[data-qa="signup-button"]').click();
    }
}
export default SignUp