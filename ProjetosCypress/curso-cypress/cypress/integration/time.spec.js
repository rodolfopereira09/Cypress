/// <reference types="cypress" />

describe('Work with alerts', () =>{

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')  
    })

    it('Going back to the past', () => {
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '02/09/2020')

        const dt = new Date(2012,3,15,15,20,5)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '15/04/2012')
    })

    it('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '15990')
        cy.get('#resultado > span').invoke('text').should('gt', 1599070375286)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 5000)

    })
})