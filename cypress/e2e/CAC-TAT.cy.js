describe('Central de Atendimento do Cliente TAT', () => {
  it('verificar o titulo da aplicação', () => {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'TAT Customer Service Center')
  })
})