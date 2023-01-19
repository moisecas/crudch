// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("formulario", () => {
    for (let i = 0; i < 5; i++) {
        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSf0_6SB7STsPC_kGeEPTWfx9MA6uRFYSSxKOBJpsqZN1arQKA/viewform")
        cy.get('#i17 > .vd3tt > .AB7Lab').click()
        cy.get('#i48 > .vd3tt > .AB7Lab').click()
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd').click()
        cy.get('#i67 > .vd3tt > .AB7Lab').click() 
        cy.get('#i77 > .vd3tt > .AB7Lab').click()
        cy.get('#i93 > .vd3tt > .AB7Lab').click()
        cy.get('#i112 > .vd3tt > .AB7Lab').click()
        cy.get('.lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd').click()

    }
}) 