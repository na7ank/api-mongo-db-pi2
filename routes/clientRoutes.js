const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');


// Rota para listar todos os clientes
router.get('/', clientController.getAllClients);


// Rota para criar um novo cliente
router.post('/', clientController.createClient);


// Atualizar um cliente existente
router.put('/:id', clientController.updateClient);


// Deletar um cliente
router.delete('/:id', clientController.deleteClient);


// Obter um cliente específico pelo ID
router.get('/:id', clientController.getClientById);


module.exports = router;