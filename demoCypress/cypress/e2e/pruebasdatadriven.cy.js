/// <reference types="cypress" /> 



//suite caso de prueba avanzados 

describe('otro conjunto de casos', ()=>{
    let datos; // Declare variable datos
    before(()=>{ //antes de todas las pruebas
        //cargaos los valores de la data ubicada en fixtures data.json
        cy.fixture('example.json').then((data)=>{ 
            datos = data; // Assign the data to variable `datos`
        })    
     
    })
    beforeEach(()=>{ //antes de cada prueba
        //ingresamos a la pagina 
        cy.visit("https://superargo.supersalud.gov.co/2/formularioWeb/pqrd.php") 
    })
    it("llenado formulario con data", ()=>{ 
        cy.visit("https://superargo.supersalud.gov.co/2/formularioWeb/pqrd.php") 
        cy.get('#nombre_afectado_1').type(datos.nombre) //ingresamos el nombre 
    })  
})