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


// Controlador para atualizar um cliente existente
exports.updateClient = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedClient) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar cliente', error });
  }
};


// Controlador para deletar um cliente
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar cliente', error });
  }
};


// Controlador para obter um cliente específico pelo ID
exports.getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(client);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar cliente', error });
  }
};