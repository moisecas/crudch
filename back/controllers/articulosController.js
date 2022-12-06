
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

//consultar por id
exports.getArticuloById = async (req, res, next) => {
    const articuloById = await articulo.findById(req.params.id); //buscamos el articulo por id
    if(!articuloById){ //si no existe el articulo
        res.status(404).json({
            success: false,
            message: 'Articulo no encontrado'
        });
    }
    res.status(200).json(articuloById); //enviamos el articulo en formato json

    }  


//actualizar articulo
exports.updateArticulo=async (req, res, next) => {
    let articuloActualizado = await articulo.findByIdAndUpdate(req.params.id); //buscamos el articulo por id y lo actualizamos
    articuloActualizado = await articulo.findByIdAndUpdate
    (req.params.id, req.body); //actualizamos el articulo con los datos que nos envian en el body
    res.status(200).json({
        success: true,
        message: 'Articulo actualizado',
        articuloActualizado
    }); //enviamos el articulo en formato json
}


//eliminar articulo 
exports.deleteArticulo = async (req, res, next) => {
    const articuloBorrado = await articulo.findByIdAndDelete(req.params.id); //buscamos el articulo por id y lo eliminamos
    res.status(200).json({
        success: true,
        message: 'Articulo eliminado',
        articuloBorrado
    }); //enviamos el articulo borrado en formato json
}