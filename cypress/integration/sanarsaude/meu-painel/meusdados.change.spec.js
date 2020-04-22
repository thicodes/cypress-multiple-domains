describe('Meus Dados', () => {
  it('should login after auth', () => {
    cy.request('https://www.sanarsaude.com/login')
      .its('body')
      .then((body) => {
        const $html = Cypress.$(body);
        const csrf = $html.find('input[name="csrf_token"]').val();

        cy.authWithCSRF(csrf).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
  });
});
