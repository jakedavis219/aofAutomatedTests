require('cypress-xpath')
require('dotenv').config()
import openSite from '../pageObjectModels/homePage/openSite'
import login from '../pageObjectModels/homePage/loginIntoProfile'

const fp = new openSite()
const log = new login()


it("Opens website", function(){
    fp.visitAOF()
    fp.validateTitle()
})

it("Logs in", function(){
    cy.wait(2000)
    log.loginIntoSite().click()
    cy.wait(1000)
    log.loginButtonStart().click()
    cy.wait(1000)
    log.loginButtonNext().click()
    cy.wait(1000)
    log.typeUsername()
    log.typeInvalidPassword()
    log.clickLogin().click()
    log.wrongPasswordWarning().should('have.text', "Wrong email or password")

})