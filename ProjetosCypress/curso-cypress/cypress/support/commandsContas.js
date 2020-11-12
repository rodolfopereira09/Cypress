import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', (conta) => {
    cy.get(loc.CONTAS.NOME).type(conta)
    cy.get(loc.CONTAS.BTN_CONTAS).click()
})

Cypress.Commands.add('alterarConta', (contaAlterada) => {
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR(contaAlterada)).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type(contaAlterada)
        cy.get(loc.CONTAS.BTN_CONTAS).click()
})

Cypress.Commands.add('inserirMovimentacao', (desc, value, inter, conta) => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
    cy.get(loc.MOVIMENTACAO.VALOR).type('123')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
    cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes') // Banco qdo frontend
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_MOVIMENTACAO).click()
})


 
