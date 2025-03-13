describe('Central de Atendimento do Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verificar o titulo da aplicação', () => {
    cy.title().should('be.equal', 'TAT Customer Service Center')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxtz', 10)
    cy.get('#firstName').type('Will')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('5drzi8h8@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type=submit]').click()

    cy.get('.success').should('be.visible')
  })

  it('campo telefone continua vazio quando preenchido com um valor não-númerico', () => {
    cy.get('#phone')
      .type('abcd')
      .should('have.value', '')
  })

  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxtz', 10)
    cy.get('#firstName').type('Will')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('5drzi8h8@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type=submit]').click()
  })

})