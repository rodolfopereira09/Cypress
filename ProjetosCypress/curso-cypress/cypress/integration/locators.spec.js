/// <reference types="cypress" />

describe('Work with basic elements', () =>{

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')  
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Using css selector', () => {
        cy.get('#tabelaUsuarios > tbody > tr:nth-child(3) > td:nth-child(6) > input[type=text]')
        cy.xpath('//*[@id="tabelaUsuarios"]/tbody/tr[3]/td[6]/input')
    })

    it('Using xpath', () => {
        cy.xpath('//*[@id="tabelaUsuarios"]/tbody/tr[3]/td[6]/input')
        cy.xpath("//input[contains(@onclick, 'Francisco')]")
    })
})