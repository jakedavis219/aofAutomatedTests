require('cypress-xpath')
require('dotenv').config()

it("Opens website", function(){
    cy.visit("https://alwaysonfilm.com/");
    cy.title().should('include', "Always On Film - Analog Photography");  
})

it("Logs in", function(){
    cy.wait(1000)
    cy.get('.eKtig > span').click()
    cy.wait(1000)
    cy.get('[data-testid="signUp.switchToSignUp"]').click()
    cy.wait(1000)
    cy.get('#switchToEmailLink_SM_ROOT_COMP9 > [data-testid=buttonElement]').click()
    cy.wait(1000)
    cy.get('#input_input_emailInput_SM_ROOT_COMP9').type(Cypress.env('siteUsername'))
    cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type(Cypress.env('sitePassword'))
    cy.get('#okButton_SM_ROOT_COMP9 > [data-testid=buttonElement]').click()
    cy.get('._1vKS2 > svg').click()
    cy.get(':nth-child(1) > [data-testid=link] > .V5DMD').click()
    cy.wait(2000)
    cy.url().should('include', "https://www.alwaysonfilm.com/profile/jakedavisphotos/profile")
})

