
const articulo = require('../models/articulos'); //traemos el modelo articulo que vamos a usar en la base de datos

//ver articulos
exports.getArticulos = async (req, res, next) => {
    const articulos = await articulo.find(); //buscamos todos los articulos en la base de datos
    res.status(200).json(articulos); //enviamos los articulos en formato json
} 

//crear articulo
exports.addArticulo = async (req, res, next) => {
    const articuloNuevo = await articulo.create(req.body); //creamos un nuevo articulo con los datos que nos envian en el body 
    res.status(200).json({
        success: true,
        articuloNuevo
        
    }); //enviamos el articulo en formato json

}