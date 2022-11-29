const User = require('../models/auth');

//registro usuario 
exports.registroUsuario = async (req, res) => {
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
}