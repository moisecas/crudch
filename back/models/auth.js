const moongose = require('mongoose');

const usuarioSchema = new moongose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // no se puede repetir
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
    registro:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = moongose.model('auth', usuarioSchema);  