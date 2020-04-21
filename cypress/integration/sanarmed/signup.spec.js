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
