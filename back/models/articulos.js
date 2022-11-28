const mogoose = require('mongoose');

const articulosShcema = new mogoose.Schema({
    articulo:{
        type: String,
        required: true,
        
    },
    inventario:{
        type: Number,
        required: true,
        
    },
    descripcion:{
        type: String,
        required: true,
        
    },

});

module.exports = mogoose.model('articulos', articulosShcema); 

