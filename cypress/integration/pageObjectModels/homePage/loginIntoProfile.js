class login{
    loginIntoSite(){
        return cy.get('.eKtig > span')
    }

    loginButtonStart(){
        return cy.get('[data-testid="signUp.switchToSignUp"]')
    }

    loginButtonNext(){
        return cy.get('#switchToEmailLink_SM_ROOT_COMP9 > [data-testid=buttonElement]')
    }

    typeUsername(){
        return cy.get('#input_input_emailInput_SM_ROOT_COMP9').type(Cypress.env('siteUsername'))
    }

    typePassword(){
        return cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type(Cypress.env('sitePassword'))
    }

    typeInvalidPassword(){
        return cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type(Cypress.env('incorrectPassword'))
    }

    clickLogin(){
        return cy.get('#okButton_SM_ROOT_COMP9 > [data-testid=buttonElement]')
    }

    clickDropDown(){
        return cy.get('._1vKS2 > svg')
    }

    clickProfile(){
        return cy.get(':nth-child(1) > [data-testid=link]')
    }

    validateProfileUrl(){
        return cy.url().should('include', "https://www.alwaysonfilm.com/profile/jakedavisphotos/profile")
    }

    wrongPasswordWarning(){
        return cy.get('[data-testid="siteMembers.inlineErrorMsg"]')
    }
}

export default login