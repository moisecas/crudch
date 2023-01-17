/// <reference types="cypress" /> 

const { before } = require("cypress/types/lodash")

//suite caso de prueba avanzados 

describe('otro conjunto de casos', ()=>{

    before(()=>{ //antes de todas las pruebas
        //cargaos los valores de la data 
        cy.fixture('data').then((data)=>{ //fixture es para cargar la data de la carpeta fixtures, 'data' es el nombre del archivo
            this.data=data //arrow functon que recibe la data y la guarda en this.data 
        }) //carga la data de la carpeta fixtures
    })
    beforeEach(()=>{ //antes de cada prueba
        //ingresamos a la pagina 
        cy.visit("https://demoqa.com/automation-practice-form") 
    })
    it("llenado formulario con data", ()=>{
        cy.get('#firstName').type(this.data.nombre) //this.data.nombre es para acceder a la data que esta en el archivo data.json
    }) 
})