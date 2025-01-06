const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  }
});

CourtSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Court', CourtSchema);