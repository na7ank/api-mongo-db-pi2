const mongoose = require('mongoose');

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    pet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    reason: { type: String, enum: ['Checkup', 'Vaccination', 'Surgery', 'Other'], required: true },
    appointment_date: { type: Date, required: true },
    appointment_time: { type: String, required: true },
    status: { type: String, enum: ['Scheduled', 'Completed', 'Canceled'], required: true },
    notes: { type: String },
  });

module.exports = mongoose.model('Appointment', appointmentSchema);