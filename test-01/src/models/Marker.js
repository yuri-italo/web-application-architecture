const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  name: String,
  location: [Number],
});

module.exports = mongoose.model('Marker', markerSchema);