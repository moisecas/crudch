const express = require('express');
const router = express.Router();

const { getArticulos, addArticulo } = require('../controllers/articulosController');

router.route('/articulos').get(getArticulos); //peticion get para ver los articulos 

//peticion post para agregar articulos
router.route('/articulo/nuevo').post(addArticulo); 


module.exports = router; 


