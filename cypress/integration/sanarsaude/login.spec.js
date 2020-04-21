/// <reference types="cypress" />

const auth = {
  email: 'thiago.leite@nad1.com.br',
  password: 'cictj41j',
};

describe('Log in', () => {
  beforeEach(() => {
    cy.visit('https://www.sanarsaude.com/login');
  });

  it('should be visible form', () => {
    cy.get('.e-mail-login').should('be.visible');
    cy.get('.senha').should('be.visible');
    cy.contains('.link-esqueci', 'Esqueci minha senha').should('be.visible');
    cy.contains('.continuar', 'CONTINUAR').should('be.visible');
    cy.contains('.bt-cadastrar', 'CADASTRAR').should('be.visible');
  });

  it('should login', () => {
    cy.get('.e-mail-login').type(auth.email);
    cy.get('.senha').type(auth.password);
    cy.contains('.continuar', 'CONTINUAR').should('be.visible').click();
  });
});
