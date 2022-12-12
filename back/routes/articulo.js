const express = require('express');
const router = express.Router();
const app = express();


const { getArticulos, addArticulo,getArticuloById,updateArticulo,deleteArticulo } = require('../controllers/articulosController');


app.get('/', (req, res) => {
    res.render('artis');
  }); 

//get articulos
router.route('/articulos').get(getArticulos); //peticion get para ver los articulos 

//peticion post para agregar articulos
router.route('/articulo/nuevo').post(addArticulo); 

//get articulo by id
router.route('/articulo/:id').get(getArticuloById);

//update articulo by id
router.route('/articulo/:id').put(updateArticulo);

//delete articulo by id
router.route('/articulo/:id').delete(deleteArticulo);


module.exports = router; 


