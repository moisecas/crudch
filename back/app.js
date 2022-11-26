const express = require('express');
const app = express();

//importar rutas 
const articulos = require('./routes/articulo');

//crear rutas 
app.use('/api', articulos);


module.exports = app; 