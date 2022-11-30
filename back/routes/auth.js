const express = require('express');

const {registroUsuario, loginUser} = require('../controllers/authController'); 
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router(); 

router.route('/registro').post(registroUsuario);
router.route('/ususarios').get(); 
router.route('/login').post(loginUser);

module.exports = router;
