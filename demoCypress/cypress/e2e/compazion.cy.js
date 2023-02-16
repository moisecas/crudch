describe("conjunto de caso de prueba 1 fundación compazión", function(){
    it("validar pagina de inicio", function(){
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('.logo').click()
        cy.get('.navbar-brand').click()
        cy.get(':nth-child(1) > .nav-link').contains('Inicio').click()
        cy.get(':nth-child(2) > .nav-link').contains('Servicios').click()
        cy.get('iframe').click()
        cy.get('footer > p').contains('Derechos reservados')
         
        
    })
})