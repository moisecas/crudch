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
    lugar:{
        type: String,
        required: true,
    },
    fecha:{
        type: Date,
        default: Date.now(),
    },
    responsable:{
        type: String,
        required: true,
    },
    codigo:{
        type: Number,
        required: true,
    },
    telefono:{
        type: Number,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    },
    //relacion con el modelo auth
    user:{
        type: mogoose.Schema.Types.ObjectId,
        ref: 'auth',
    }

});

module.exports = mogoose.model('articulos', articulosShcema); 

