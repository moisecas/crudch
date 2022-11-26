const express = require('express');
const router = express.Router();

const { getArticulos, addArticulo } = require('../controllers/articulosController');

router.route('/articulos').get(getArticulos).post(addArticulo); //peticion get para ver los articulos 

//peticion post para agregar articulos
router.route('/articulos/nuevo').post(addArticulo); 


module.exports = router; 
