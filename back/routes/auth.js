const express = require('express');

const {registroUsuario} = require('../controllers/authController'); 

const router = express.Router(); 

router.route('/registro').post(registroUsuario);
router.route('/ususarios').get(); 

module.exports = router;
