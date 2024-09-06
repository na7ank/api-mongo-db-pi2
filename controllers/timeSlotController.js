const TimeSlot = require('../models/TimeSlot');


// Controlador para listar todos os slots de tempo
exports.getAllTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find().populate('appointment_id');
    res.json(timeSlots);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao listar slots de tempo', error });
  }
};


// Controlador para criar um novo slot de tempo
exports.createTimeSlot = async (req, res) => {
  try {
    const { slot_date, slot_time, is_available, appointment_id } = req.body;

    const newTimeSlot = new TimeSlot({
      slot_date,
      slot_time,
      is_available,
      appointment_id
    });

    await newTimeSlot.save();
    res.status(201).json(newTimeSlot);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar slot de tempo', error });
  }
};


// Controlador para atualizar um slot de tempo existente
exports.updateTimeSlot = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTimeSlot = await TimeSlot.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedTimeSlot) {
      return res.status(404).json({ message: 'Slot de tempo não encontrado' });
    }
    res.json(updatedTimeSlot);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar slot de tempo', error });
  }
};


// Controlador para deletar um slot de tempo
exports.deleteTimeSlot = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTimeSlot = await TimeSlot.findByIdAndDelete(id);
    if (!deletedTimeSlot) {
      return res.status(404).json({ message: 'Slot de tempo não encontrado' });
    }
    res.json({ message: 'Slot de tempo deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar slot de tempo', error });
  }
};
