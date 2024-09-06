const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


// Rota para listar todos os admins
router.get('/', adminController.getAllAdmins);


// Rota para criar um novo admin
router.post('/', adminController.createAdmin);


// Rota para atualizar um admin existente
router.put('/:id', adminController.updateAdmin);


// Rota para deletar um admin
router.delete('/:id', adminController.deleteAdmin);


module.exports = router;
