/// <reference types="cypress" />

it.only('A external test...', () => {

})
 
describe.skip('Shoul group test...', () => {
    describe('Should group more specific test...', () => {
        it.skip('A specific test...', () => {

        })
    })

    describe('Should group more specific test2...', () => {
        it('A specific test...', () => {

        })
    })


    it.only('A internal test...', () => {

    })
}) 