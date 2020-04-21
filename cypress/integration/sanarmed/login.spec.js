/// <reference types="cypress" />

context('Sanar Med', () => {
  describe('Log in', () => {
    beforeEach(() => {
      cy.viewport(1600, 1600);
      cy.visit('https://sanarmed.com');
    });

    it('should open modal and be visible form', () => {
      cy.get('.navbar-signin-button').contains('ENTRAR').should('be.visible').click();
      cy.contains('Entrar com Facebook').should('be.visible');
      cy.contains('Entrar com Google').should('be.visible');
      cy.get('[type="email"]').should('be.visible');
      cy.get('[type="password"]').should('be.visible');
      cy.get('a').contains('Esqueci minha senha');
      cy.contains('Entrar');
    });
  });
});

context('Sanar Med - Residência Médica', () => {
  describe('Log in', () => {
    beforeEach(() => {
      cy.visit('https://aluno.sanarmed.com/residenciamedica/#/auth/entrar');
    });

    it('should be visible form', () => {
      cy.get('[data-testid="es-signin-form__form__email"]').should('be.visible');
      cy.get('[data-testid="es-signin-form__form__password"]').should('be.visible');
      cy.get('[data-testid="es-signin-form__form__keep-me-logged-in"]').should('be.visible');
      cy.get('[data-testid="es-signin-form__form__forgot-password"]')
        .contains('Esqueci minha senha')
        .should('be.visible');
      cy.get('[data-testid="es-signin-form__form__do-login"]').contains('Entrar').should('be.visible');
    });
  });
});
