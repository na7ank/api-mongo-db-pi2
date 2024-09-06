// controllers/petController.js
const Pet = require('../models/Pet');


// Controlador para listar todos os pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('client_id');
    res.json(pets);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao listar pets', error });
  }
};


// Controlador para obter um pet por ID
exports.getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findById(id).populate('client_id');
    if (!pet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar pet', error });
  }
};


// Controlador para criar um novo pet
exports.createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar pet', error });
  }
};


// Controlador para atualizar um pet existente
exports.updatePet = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar pet', error });
  }
};


// Controlador para deletar um pet
exports.deletePet = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet não encontrado' });
    }
    res.json({ message: 'Pet deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar pet', error });
  }
};
