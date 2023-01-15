/// <reference types="cypress" />  //esto es para que cypress reconozca los comandos de typescript

describe("conjunto de caso de prueba 1", function(){
    //caso de prueba 1
    it("validar pagina de inicio", function(){
        cy.visit("https://uis.edu.co/es/")
        cy.get('.elementor-element-29d73bd > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-menu-toggle > .eicon-menu-bar').click() //busca el elemento img y verifica que sea visible
        cy.get('#menu-2-20ae787 > .menu-item-95095 > .elementor-item').click() 
        cy.get('.elementor-element-a008e3f').should('have.length', 19) //busca que en el css existan 18 elementos con la clase elementor-element-a008e3f
         
        
    })

    //caso de prueba 2
    it.only("agregar al carrito", function(){
        cy.visit("https://www.mercadolibre.com.co/") 
        cy.get('#cb1-edit').type('iphone 11') //escritura en el campo de busqueda
        cy.get('#cb1-edit').type('{enter}');
        cy.get('.ui-search-results')
        cy.get('h2').contains('128 GB').click() //busca el elemento h2 y verifica que contenga el texto 128 GB



    })
    //caso de prueba 3
})