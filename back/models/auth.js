const moongose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
 //herramienta para generar tokens
const crypto = require('crypto');
 

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
        default: 'admin',
    },
    registro:{
        type: Date,
        default: Date.now(),
    }
});

usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
}); //antes de guardar el usuario en la base de datos, se ejecuta esta funcion



usuarioSchema.methods.compararPass = async function (password) {
    return await bcrypt.compare(password, this.password);
}



module.exports = moongose.model('auth', usuarioSchema);  