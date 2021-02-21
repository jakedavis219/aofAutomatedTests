require('cypress-xpath')
require('dotenv').config()
import openSite from './pageObjectModels/homePage/openSite'
import login from './pageObjectModels/homePage/loginIntoProfile'

const fp = new openSite()
const log = new login()


it("Opens website", function(){
    fp.visitAOF()
    fp.validateTitle()
})

it("Logs in", function(){
    cy.wait(1000)
    log.loginIntoSite().click()
    cy.wait(1000)
    log.loginButtonStart().click()
    cy.wait(1000)
    log.loginButtonNext().click()
    cy.wait(1000)
    log.typeUsername()
    log.typePassword()
    log.clickLogin().click()
    log.clickDropDown().click()
    log.clickProfile().click()
    cy.wait(3000)
    log.validateProfileUrl()
})

