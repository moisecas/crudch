/// <reference types="cypress" /> 



//suite caso de prueba avanzados 

describe('otro conjunto de casos', ()=>{
    let datos; // Declare variable datos
    before(()=>{ //antes de todas las pruebas
    //cargaos los valores de la data ubicada en fixtures data.json
    cy.fixture('example.json').then((data)=>{ 
        datos = data; // Assign the data to variable `datos`
        cy.fixture(datos.imagen).as('imagen') //carga la data de la carpeta fixtures   
    }) 
    
 
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
        cy.get('.file').then (function($el){
            //convertir a base64 
            const blod = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')

            const file = new File([blod], 'imagen.png', {type: 'image/png'}) 

            const lista = new DataTransfer()

            lista.items.add(file)

            const myFileList = lista.files
            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', {bubbles: true}))
        }) 
        cy.get('#comentarios').type(datos.situacion) //ingresamos el comentario que esta en example.json en el campo situacion
        //de la siguiente clase class="dropdown-menu show" deseo seleccionar la opcion igual a datos.departamento
        cy.get(':nth-child(5) > :nth-child(3) > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click() //click en el boton para seleccionar el departamento
        cy.get('.dropdown-menu.show').contains(datos.departamento).click() //seleccionamos el departamento

        
    })  
})