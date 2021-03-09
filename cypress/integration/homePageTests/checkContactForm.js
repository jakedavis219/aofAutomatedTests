require('cypress-xpath')
require('dotenv').config()
import openSite from '../pageObjectModels/homePage/openSite'

const fp = new openSite()

it("Opens website", function(){
    fp.visitAOF()
    fp.validateTitle()
})

it("Nav to contact form", function(){
    cy.get('#comp-j6uprizx4label').click()
    cy.get('#input_comp-jth2iur3').type("Test")
    cy.wait(1000)
    cy.get('#input_comp-jth2iur5').type("test@email.com")
    cy.wait(1000)
    cy.get('#input_comp-jth2iur7').type("0700000000")
    cy.wait(1000)
    cy.get('#textarea_comp-jth2iuvc').type("this is a test")
    cy.wait(1000)
    cy.get('#input_comp-jth2iur3').type("Test")
    cy.get('#comp-jth2iuvf > [data-testid=buttonElement]').click()
})