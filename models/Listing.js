const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['sell', 'donate'], default: 'sell' },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);
