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
    it("agregar al carrito", function(){
        cy.visit("https://www.mercadolibre.com.co/") 
        cy.get('#cb1-edit').type('iphone 11') //escritura en el campo de busqueda
        cy.get('#cb1-edit').type('{enter}');
        cy.get('.ui-search-results')
        cy.get('h2').contains('128 GB').click() //busca el elemento h2 y verifica que contenga el texto 128 GB



    })
    //caso de prueba 3
    it("caso 3 elementos", function(){
        cy.visit("https://www.mercadolibre.com.co/") 
        cy.get('body > header > div > div.nav-header-menu-wrapper > button').invoke('attr', 'aria-expanded', 'true')//attr es para obtener el atributo aria-expanded y cambiarlo a true
        cy.get('.nav-header-menu-switch').click()
        cy.get('.payment-data-title').contains('Hasta 48 cuotas')
        cy.log("jeimy.cardenas@sophossolutions.com")
    })
    //caso de prueba 4
    it.only("llenar soportes moises", function(){
        //uso de comandos personalizados
        cy.formulario() //llama al comando formulario  

    })

    it("caso 5 ", function(){
        cy.visit("https://www.mercadolibre.com.co/") 
        cy.get('.nav-header-menu-switch').click()
        cy.get(':nth-child(3) > :nth-child(5) > a').click()
        cy.get(':nth-child(1) > .categories__list > :nth-child(7) > .categories__subtitle > .categories__subtitle-title').click() 
        cy.get(':nth-child(1) > .container-menu > .ui-category-trends-carousel-wrapper > .andes-carousel-snapped__container > .andes-carousel-snapped__controls-wrapper > .andes-carousel-snapped > .andes-carousel-snapped__wrapper > .andes-carousel-snapped__slide--active > .entry-column > .ui-category-trends-entry-container > .andes-card > .andes-card__content > .ui-category-trends-entry-content').click()
    
    })
})