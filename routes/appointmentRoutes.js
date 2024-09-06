const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');


// Rota para listar todos os agendamentos
router.get('/', appointmentController.getAllAppointments);


// Rota para criar um novo agendamento
router.post('/', appointmentController.createAppointment);


// Rota para atualizar um agendamento existente
router.put('/:id', appointmentController.updateAppointment);


// Rota para deletar um agendamento
router.delete('/:id', appointmentController.deleteAppointment);


module.exports = router;
