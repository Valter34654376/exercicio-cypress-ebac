describe('Testes da Agenda de Contatos', () => {
  const url = 'https://ebac-agenda-contatos-tan.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Deve incluir um novo contato', () => {
    cy.get('input[name="nome"]').type('Fulano Teste');
    cy.get('input[name="email"]').type('fulano@test.com');
    cy.get('input[name="telefone"]').type('11999999999');
    cy.get('button').contains('Adicionar').click();

    cy.contains('Fulano Teste').should('exist');
  });

  it('Deve alterar um contato existente', () => {
    cy.contains('Fulano Teste').parent().find('button').contains('Editar').click();
    cy.get('input[name="nome"]').clear().type('Fulano Alterado');
    cy.get('button').contains('Salvar').click();

    cy.contains('Fulano Alterado').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('Fulano Alterado').parent().find('button').contains('Remover').click();
    cy.contains('Fulano Alterado').should('not.exist');
  });
});
