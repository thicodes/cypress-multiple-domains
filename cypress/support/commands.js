// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const auth = {
  email: 'thiago.leite@nad1.com.br',
  password: 'cictj41j',
};

Cypress.Commands.add('authWithCSRF', (csrfToken) => {
  cy.request({
    method: 'POST',
    url: 'https://www.sanarsaude.com/usuario/logar',
    failOnStatusCode: false,
    form: true,
    body: {
      login: auth.email,
      senha: auth.password,
      csrf_token: csrfToken,
    },
  });
});
