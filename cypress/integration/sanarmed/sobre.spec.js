describe('/sobre', () => {
  beforeEach(() => {
    cy.visit('https://www.sanarmed.com/sobre');
  });

  it('should render slide by category properly', () => {
    cy.contains('Otimizando a faculdade').should('not.be.visible');
    cy.contains('Do internato à Residência').should('not.be.visible');
    cy.contains('Turbinando a carreira').should('not.be.visible');
    cy.contains('Ferramentas da prática').should('not.be.visible');
  });

  it('should render testimony', () => {
    cy.contains('Depoimentos').should('be.visible');
  });
});
