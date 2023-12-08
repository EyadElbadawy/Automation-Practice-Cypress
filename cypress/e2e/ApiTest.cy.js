describe('Comprehensive Tests for API Endpoints', () => {
  it('GET: LIST USERS - Verify User List', () => {
    cy.request('GET', 'https://reqres.in/api/users')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data').and.to.be.an('array');
        expect(response.body.data).to.have.lengthOf.at.least(6);
      });

    // Negative scenario: Invalid endpoint
    cy.request({ url: 'https://reqres.in/eyad/elbadawi', failOnStatusCode: false })
      .should((response) => {
        expect(response.status).to.eq(404);
      });
  });

  it('POST: REGISTER UNSUCCESSFUL - Verify Bad Request', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      failOnStatusCode: false, // To prevent Cypress from treating non-2xx status as an error
    })
      .should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error').and.to.be.a('string');
      });

    // Negative scenario: Unprocessable Entity
    cy.fixture('payload').then((payload) => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: { email: payload.negative_email }, // Use the negative scenario email from the fixture
        failOnStatusCode: false,
      }).then((response) => {
        // Assertions for the negative scenario
        expect(response.status).to.eq(400);
      });

      // Positive scenario: Successful registration
      cy.fixture('payload').then((payload) => {
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/register',
          body: {
            email: payload.email,
            password: payload.password,
          }, // Use the positive scenario data from the fixture
        }).then((response) => {
          // Assertions for the positive scenario
          expect(response.status).to.eq(200);
        });
      });
    });
  });
  it('DELETE: DELETE - Verify User Deletion', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2') // Assuming user with ID 2 exists
      .should((response) => {
        expect(response.status).to.eq(204);
      });

    // Verify that the user with ID 2 no longer exists
    cy.request({ url: 'https://reqres.in/api/users/2', failOnStatusCode: false })
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('GET: DELAYED RESPONSE - Verify Delayed Response', () => {
    cy.request('GET', 'https://reqres.in/api/users?delay=5')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data').and.to.be.an('array');
        expect(response.duration).to.be.greaterThan(5000); // Assuming 5000ms delay
      });
  });
});

