/// <reference types="cypress" />

context('About Us', () => {
    beforeEach(() => {
        cy.visit('http://localhost:63342/js-product/aboutAs.html?_ijt=cubbd9f92mnibon61pppbdseik')
    })

    // https://on.cypress.io/interacting-with-elements

    it('Check that text is correct for Harut button', () => {
        cy.get('[onclick="myFunctionOne()"]').click()
        cy.get('#myDivTwo').should(($div) => {
            expect($div).to.have.text('\n    Hi Harut\n')


            // expect(text).to.include('foo')
            // expect(text).not.to.include('bar')
        })
    }
    )
    it('Check that text is correct for Sevak button', () => {
        cy.get('[onclick="myFunctionTwo()"]').click()
        cy.get('#myDivOne').should(($div) => {
            expect($div).to.have.text('\n    Hi Sevak\n')


            // expect(text).to.include('foo')
            // expect(text).not.to.include('bar')
        })
    })
})