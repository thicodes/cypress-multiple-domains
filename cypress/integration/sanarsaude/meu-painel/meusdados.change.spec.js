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

  it('should see menu on private area', () => {
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
