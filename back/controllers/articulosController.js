const articulo = require('../models/articulos'); //traemos el modelo articulo que vamos a usar en la base de datos

//ver articulos
exports.getArticulos = async (req, res, next) => {
    const articulos = await articulo.find(); //buscamos todos los articulos en la base de datos
    res.status(200).json(articulos); //enviamos los articulos en formato json
} 

//crear articulo
exports.addArticulo = async (req, res, next) => {
    const articuloNuevo = new articulo(req.body); //creamos un nuevo articulo con los datos que nos llegan en el body
    try {
        await articuloNuevo.save(); //guardamos el articulo en la base de datos
        res.status(200).json({mensaje: 'Articulo agregado correctamente'}); //enviamos un mensaje de confirmacion
    } catch (error) {
        res.status(400).json({mensaje: 'Error al agregar el articulo'}); //enviamos un mensaje de error
    }

}