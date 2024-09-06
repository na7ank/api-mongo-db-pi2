const Client = require('../models/Client');

// Controlador para listar todos os clientes
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao listar clientes', error });
  }
};

// Controlador para criar um novo cliente
exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar cliente', error });
  }
};

// Outros controladores (atualizar, deletar, etc.) aqui
