require('cypress-xpath')
require('dotenv').config()
import openSite from '../pageObjectModels/homePage/openSite'

const fp = new openSite()

it("Opens website", function(){
    fp.visitAOF()
    fp.validateTitle()
})

