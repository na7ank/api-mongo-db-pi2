const mongoose = require('mongoose');

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
    client_name: { type: String, required: true },
    client_email: { 
      type: String, 
      required: true, 
      match: /.+\@.+\..+/ // Validação simples de email
    },
    client_phone: { type: String, required: true },
    pet_name: { type: String, required: true },
    pet_species: { type: String, required: true },
    pet_breed: { type: String, required: true },
    pet_age: { type: Number, required: true },
    reason: { type: String, enum: ['Checkup', 'Vacinação', 'Banho e Tosa', 'Other'], required: true },
    appointment_date: { type: Date, required: true },
    appointment_time: { type: String, required: true },
    status: { type: String, enum: ['Scheduled', 'Completed', 'Canceled'], required: true },
    notes: { type: String },
  });

module.exports = mongoose.model('Appointment', appointmentSchema);
