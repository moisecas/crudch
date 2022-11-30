const User = require('../models/auth');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const cryto = require('crypto');

//registro usuario 
exports.registroUsuario = catchAsyncErrors( async (req, res) => {
    const {nombre,email,password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password
    })

    res.status(200).json({
        success: true,
        user
    })
})

//login usuario
exports.loginUser=catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //verificar si el email y el password existen
    if (!email || !password) {
        return next(new ErrorHandler('Por favor ingrese email y password', 400));
    }

    //verificar si el usuario existe
    const user = await User .findOne({ 
        email
    }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Usuario no encontrado', 401));
    }

    //verificar si el password es correcto
    const isPasswordCorrect = await user.compararPass(password);

    if (!isPasswordCorrect) {
        return next(new ErrorHandler('Contraseña incorrecta', 401));
    }       

    //login exitoso sin token 
    
    res.status(200).json({
        success: true,
        message: 'Login exitoso'
    })
  
})