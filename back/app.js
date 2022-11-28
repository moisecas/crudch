const express = require('express');
const app = express();
const bodyParser = require('body-parser') //evaluar lo que consigo en el body 


//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importar rutas 
const articulos = require('./routes/articulo');

//crear rutas 
app.use('/api', articulos);


module.exports = app; 