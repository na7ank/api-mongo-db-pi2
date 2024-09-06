const express = require('express');
const router = express.Router();
const timeSlotController = require('../controllers/timeSlotController');


// Rota para listar todos os slots de tempo
router.get('/', timeSlotController.getAllTimeSlots);


// Rota para criar um novo slot de tempo
router.post('/', timeSlotController.createTimeSlot);


// Rota para atualizar um slot de tempo existente
router.put('/:id', timeSlotController.updateTimeSlot);


// Rota para deletar um slot de tempo
router.delete('/:id', timeSlotController.deleteTimeSlot);


module.exports = router;
