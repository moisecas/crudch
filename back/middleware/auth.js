const User = require('../models/auth');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors'); 

//verificacion de autenticación 

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Inicie sesión para acceder a esta ruta', 401))
    }

    const decodificada = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodificada .id);

    next();
})

//verificacion de roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`El rol (${req.user.role}) no tiene acceso a este recurso`, 403))
        }
        next();
    }
}