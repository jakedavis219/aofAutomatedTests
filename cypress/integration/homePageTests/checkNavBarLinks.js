require('cypress-xpath')
require('dotenv').config()
import openSite from '../pageObjectModels/homePage/openSite'
import footerLinks from '../pageObjectModels/homePage/footerChecks'
import nav from '../pageObjectModels/homePage/navChecks'


const fp = new openSite();
const foot = new footerLinks();
const navLinks = new nav();


it("Opens Website", function(){
    fp.visitAOF();
    fp.validateTitle();
})

it("Checks About", function(){
    navLinks.about().click();
    navLinks.valdiateAbout();
})

it("Checks The Lab", function(){
    navLinks.theLab().click();
    navLinks.validateTheLab();
})

it("Checks Camera Chat", function(){
    navLinks.theLabMouseover()
    navLinks.cameraChatLv2().click()
    navLinks.validateCameraChat()
})

it("Checks feature friday", function(){
    navLinks.theLabMouseover()
    navLinks.featureFriday().click()
    navLinks.validateFeatureFriday()
})

it("Checks Film Examples", function(){
    navLinks.theLabMouseover()
    navLinks.filmExamples().click()
    navLinks.validateFilmExamples()
})

it("Checks Film Guides", function(){
    navLinks.theLabMouseover()
    navLinks.filmGuides().click()
    navLinks.validateFilmGuides()
})

it("Checks The Directory", function(){
    navLinks.directory().click();
    navLinks.validateDirectory();

})

it("Checks Contact", function(){
    cy.wait(1000)
    navLinks.contact().click();
    navLinks.validateContact();
})

