const auth = {
  email: 'thiago.leite@nad1.com.br',
  password: 'cictj41j',
};

describe('Meus Dados', () => {
  Cypress.Commands.add('AuthWithCSRF', (csrfToken) => {
    cy.request({
      method: 'POST',
      url: '/usuario',
      failOnStatusCode: false,
      form: true,
      body: {
        login: auth.email,
        senha: auth.password,
        csrf_token: csrfToken,
      },
    });
  });

  it('Test', () => {
    cy.request('https://www.sanarsaude.com/login')
      .its('body')
      .then((body) => {
        const $html = Cypress.$(body);
        const csrf = $html.find('input[name="csrf_token"]').val();

        cy.authWithCSRF(csrf).then((resp) => {
          expect(resp.status).to.eq(303);
        });
      });
  });
});

// cy.request('https://www.sanarsaude.com/login')
//   .its('body')
//   .then((body) => {});

// cy.request('https://www.sanarsaude.com/login').then((response) => {
//   // pull out the location redirect
//   const loc = response.headers['Location'];

//   // parse out the token from the url (assuming its in there)
//   const token = parseOutMyToken(loc);

//   // do something with the token that your web application expects
//   // likely the same behavior as what your SSO does under the hood
//   // assuming it handles query string tokens like this
//   cy.visit('http://localhost:8080?token=' + token);

//   // if you don't need to work with the token you can sometimes
//   // visit the location header directly
//   cy.visit(loc);
// });
