require('cypress-xpath')
require('dotenv').config()
import openSite from '../pageObjectModels/homePage/openSite'
import footerLinks from '../pageObjectModels/homePage/footerChecks'

const fp = new openSite()
const foot = new footerLinks()


it("Opens website", function(){
    fp.visitAOF()
    fp.validateTitle()
})

it("Checks Terms And Conditions", function(){
    foot.termsAndConditions().click()
    foot.validateTermsAndConditions()
})

it("Checks Privacy Policy", function(){
    cy.wait(2000)

    foot.privacyPolicy().click()
    foot.validatePrivacyPolicy()
})

it("Checks Contact", function(){
    cy.wait(2000)

    foot.contact().click()
    foot.validateContact()
})

it("Checks FAQ", function(){
    cy.wait(2000)
    
    foot.faq().click()
    foot.validateFaq()
})

it("Checks Youtube", function(){
    cy.wait(2000)
    
    foot.youtube().click()
    foot.validateYoutube()
})