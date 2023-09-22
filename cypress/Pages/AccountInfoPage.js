class AccountInfoPage {
    // Locators
    static GENDER_RADIO_BUTTON = '[id="id_gender1"]';
    static PASSWORD_INPUT = '[data-qa="password"]';
    static DAYS_SELECT = '[data-qa="days"]';
    static MONTHS_SELECT = '[data-qa="months"]';
    static YEARS_SELECT = '[data-qa="years"]';
    static FIRST_NAME_INPUT = '[data-qa="first_name"]';
    static LAST_NAME_INPUT = '[data-qa="last_name"]';
    static ADDRESS_INPUT = '[data-qa="address"]';
    static COUNTRY_SELECT = '[data-qa="country"]';
    static STATE_INPUT = '[data-qa="state"]';
    static CITY_INPUT = '[data-qa="city"]';
    static ZIPCODE_INPUT = '[data-qa="zipcode"]';
    static MOBILE_NUMBER_INPUT = '[data-qa="mobile_number"]';
    static SUBMIT_BUTTON = '[data-qa="create-account"]';

    // Methods
    chooseGender() {
        cy.get(AccountInfoPage.GENDER_RADIO_BUTTON).click();
    }

    setPassword(password) {
        cy.get(AccountInfoPage.PASSWORD_INPUT).type(password);
    }

    chooseDay() {
        cy.get(AccountInfoPage.DAYS_SELECT).select('26');
    }

    chooseMonth() {
        cy.get(AccountInfoPage.MONTHS_SELECT).select('September');
    }

    chooseYear() {
        cy.get(AccountInfoPage.YEARS_SELECT).select('1997');
    }

    setFirstName(firstName) {
        cy.get(AccountInfoPage.FIRST_NAME_INPUT).type(firstName);
    }

    setLastName(lastName) {
        cy.get(AccountInfoPage.LAST_NAME_INPUT).type(lastName);
    }

    setAddress(address) {
        cy.get(AccountInfoPage.ADDRESS_INPUT).type(address);
    }

    chooseCountry() {
        cy.get(AccountInfoPage.COUNTRY_SELECT).select('Canada');
    }

    setState(state) {
        cy.get(AccountInfoPage.STATE_INPUT).type(state);
    }

    setCity(city) {
        cy.get(AccountInfoPage.CITY_INPUT).type(city);
    }

    setZipCode(zipcode) {
        cy.get(AccountInfoPage.ZIPCODE_INPUT).type(zipcode);
    }

    setMobileNumber(mobileNumber) {
        cy.get(AccountInfoPage.MOBILE_NUMBER_INPUT).type(mobileNumber);
    }

    clickSubmit() {
        cy.get(AccountInfoPage.SUBMIT_BUTTON).click();
    }

    fillAccountInfoForm(data) {
        this.chooseGender();
        this.setPassword(data.password);
        this.chooseDay();
        this.chooseMonth();
        this.chooseYear();
        this.setFirstName(data.firstName);
        this.setLastName(data.lastName);
        this.setAddress(data.address);
        this.chooseCountry();
        this.setState(data.state);
        this.setCity(data.city);
        this.setZipCode(data.zipcode);
        this.setMobileNumber(data.mobile_Number);
        this.clickSubmit();
    }
}

export default AccountInfoPage;
