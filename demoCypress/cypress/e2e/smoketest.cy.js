describe("conjunto de pruebas", () => {
    it("validar pagina de inicio", () => {
        cy.visit("http://zero.webappsecurity.com/") //abre la pagina
        cy.get('.active > img').should('be.visible') //busca el elemento img y verifica que sea visible
        cy.get('#online_banking_features > :nth-child(1) > h4').contains('Online Banking') //busca el elemento h4 y verifica que contenga el texto Online Banking
    })

    it("validar pagina de inicio", () => {
        
    })

    it("validar pagina de inicio", () => {
        
    })

})