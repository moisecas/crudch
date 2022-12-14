const express = require('express');
const app = express();
const bodyParser = require('body-parser') //evaluar lo que consigo en el body 
app.set('view engine', 'ejs')

// Configurar el servidor para permitir el acceso a los recursos desde cualquier origen
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importar rutas 
const articulos = require('./routes/articulo');
const auth = require('./routes/auth');

//crear rutas res.header('Access-Control-Allow-Origin', '*')
app.use('/api', articulos);
app.use('/api', auth); 



module.exports = app; 