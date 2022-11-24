const mogoose = require('mongoose');

const articulosShcema = new mogoose.Schema({
    articulo: {
        type: String,
        required: [true, 'El articulo es obligatorio'],
        trim: true, 
        maxlenth: [50, 'El articulo no puede tener mas de 50 caracteres']
    }, 
    inventario: {
        type: Number,
        required: [true, 'El inventario es obligatorio'],
        trim: true,
        maxlenth: [50, 'El inventario no puede tener mas de 50 caracteres'],
        default: 0
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria'],
        trim: true,
        maxlenth: [200, 'La descripcion no puede tener mas de 200 caracteres']
    },
    imagen: [
        {
            public_id: { //id de la imagen
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true

            } //url de la imagen
        }

        ]
});

module.exports = mogoose.model('Articulo', articulosShcema); 

