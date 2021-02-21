class footerLinks{
    termsAndConditions(){
        return cy.get('#comp-j6uq8s8p > :nth-child(1) > a > .color_11')
    }

    validateTermsAndConditions(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/terms-conditions")
    }

    privacyPolicy(){
        return cy.get('#comp-j6uq8s8p > :nth-child(2) > a > .color_11')
    }
    
    validatePrivacyPolicy(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/privacy-policy")
    }

    contact(){
        return cy.get('#comp-j6uq8s8p > :nth-child(3) > a > .color_11')
    }

    validateContact(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/contact")
        
    }

    faq(){
        return cy.get('.color_11 > [style="font-size:17px"] > span > a')
    }

    validateFaq(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/faq")
    }

    youtube(){
        return cy.get(':nth-child(1) > a > .color_11 > [style="font-size:17px"] > span')
    }

    validateYoutube(){
        return cy.url().should('eq', "https://www.youtube.com/channel/UCR-vu-JWCBAKs5qIf56IgyA/videos")
    }

}

export default footerLinks