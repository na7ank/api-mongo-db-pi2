const Appointment = require('../models/Appointment');


// Controlador para listar todos os agendamentos
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      // .populate('client_id', 'name email')
      // .populate('pet_id', 'name species'); 
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao listar agendamentos', error });
  }
};


// Controlador para criar um novo agendamento
exports.createAppointment = async (req, res) => {
  try {
    const { 
      client_name,
      client_email,
      client_phone,
      pet_name,
      pet_species,
      pet_breed,
      pet_age,
      reason, 
      appointment_date, 
      appointment_time, 
      status, 
      notes 
    } = req.body;

    const newAppointment = new Appointment({
      client_name,
      client_email,
      client_phone,
      pet_name,
      pet_species,
      pet_breed,
      pet_age,
      reason,
      appointment_date,
      appointment_time,
      status,
      notes
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar agendamento', error });
  }
};


// Controlador para atualizar um agendamento existente
exports.updateAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar agendamento', error });
  }
};


// Controlador para deletar um agendamento
exports.deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.json({ message: 'Agendamento deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar agendamento', error });
  }
};
