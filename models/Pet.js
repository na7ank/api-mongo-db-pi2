const mongoose = require('mongoose');

// Pet Schema
const petSchema = new mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
  });


module.exports = mongoose.model('Pet', petSchema);