class openSite {
    visitAOF(){
        return cy.visit("https://alwaysonfilm.com/");
    }

    validateTitle(){
        return cy.title().should('include', "Always On Film - Analog Photography");  
    }
}


export default openSite
