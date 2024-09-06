// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Definir rotas para pets
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);
router.post('/', petController.createPet);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;