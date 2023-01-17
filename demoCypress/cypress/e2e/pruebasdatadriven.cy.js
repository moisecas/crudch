/// <reference types="cypress" /> 



//suite caso de prueba avanzados 

describe('otro conjunto de casos', ()=>{
    let datos; // Declare variable datos
    before(()=>{ //antes de todas las pruebas
    //cargaos los valores de la data ubicada en fixtures data.json
    cy.fixture('example.json').then((data)=>{ 
        datos = data; // Assign the data to variable `datos`
    }) 
    cy.fixture(datos.imagen, 'imagen.png').as('imagen.png') //carga la data de la carpeta fixtures   
 
})
    beforeEach(()=>{ //antes de cada prueba
        //ingresamos a la pagina 
        cy.visit("https://superargo.supersalud.gov.co/2/formularioWeb/pqrd.php") 
    })
    it("llenado formulario con data", ()=>{ 
       
        cy.get('#nombre_afectado_1').type(datos.nombre) //ingresamos el nombre 
        cy.get('#apellidos_afectado_1').type(datos.apellido) //ingresamos el apellido
        cy.get('#correo_afectado').type(datos.correo) //ingresamos el correo
        cy.get('#telefono_afectado').type(datos.telefono) //ingresamos el telefono
        cy.get('#agregar_archivo').click() //click en el boton para adjuntar archivo
        cy.get('#gestante').click() //click en el boton para adjuntar archivo
        cy.get('.file').attachFile(datos.imagen) //adjuntamos el archivo
        
        
    })  
})