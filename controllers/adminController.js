const Admin = require('../models/Admin');


// Controlador para listar todos os admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao listar administradores', error });
  }
};


// Controlador para criar um novo admin
exports.createAdmin = async (req, res) => {
  try {
    const { username, password, password_hash } = req.body;
    
    // Criação de um novo admin
    const newAdmin = new Admin({
      username,
      password,
      password_hash
    });
    
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar administrador', error });
  }
};


// Controlador para atualizar um admin existente
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedAdmin) {
      return res.status(404).json({ message: 'Administrador não encontrado' });
    }
    res.json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar administrador', error });
  }
};


// Controlador para deletar um admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      return res.status(404).json({ message: 'Administrador não encontrado' });
    }
    res.json({ message: 'Administrador deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar administrador', error });
  }
};
