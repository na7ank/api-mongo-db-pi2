const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rota para listar todos os clientes
router.get('/', clientController.getAllClients);

// Rota para criar um novo cliente
router.post('/', clientController.createClient);

// Outras rotas (atualizar, deletar, etc.) aqui

module.exports = router;
