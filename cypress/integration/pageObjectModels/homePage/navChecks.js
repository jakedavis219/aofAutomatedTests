class nav{
    about(){
        return cy.get('#comp-j6uprizx1label')
    }

    valdiateAbout(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/about")
    }

    theLab(){
        return cy.get('#comp-j6uprizx2label')
    }

    validateTheLab(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/the-lab")
    }

    theLabMouseover(){
       return cy.get('#comp-j6uprizx2label').trigger('mouseover')
    }
    
    cameraChatLv2(){
        return cy.get('#comp-j6uprizxmoreContainer0label')
    }

    validateCameraChat(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/the-lab/categories/cameras")
    }
    
    featureFriday(){
        return cy.get('#comp-j6uprizxmoreContainer1label')
    }

    validateFeatureFriday(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/the-lab/categories/feature-friday")
    }

    filmExamples(){
        return cy.get('#comp-j6uprizxmoreContainer2label')
    }

    validateFilmExamples(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/the-lab/categories/film-examples")
    }
    
    filmGuides(){
        return cy.get('#comp-j6uprizxmoreContainer3label')
    }

    validateFilmGuides(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/the-lab/categories/film-guides")
    }

    directory(){
        return cy.get('#comp-j6uprizx3label')
    }

    validateDirectory(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/directory")
    }


    contact(){
        return cy.get('#comp-j6uprizx4label')
    }

    validateContact(){
        return cy.url().should('eq', "https://www.alwaysonfilm.com/contact")
    }
}

export default nav