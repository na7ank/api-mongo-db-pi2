const mongoose = require('mongoose');

// Time Slot Schema
const timeSlotSchema = new mongoose.Schema({
    slot_date: { type: Date, required: true },
    slot_time: { type: String, required: true },
    is_available: { type: Boolean, default: true },
    appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  });

  module.exports = mongoose.model('TimeSlot', timeSlotSchema);