const mongoose = require('mongoose');

const { Schema } = mongoose;

const offersSchems = new Schema({
  name: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  seatsLeft: {
    type: Number,
    required: true,
  },
  pickUp: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  }
});

const offersModel = mongoose.model('offers', offersSchems);
module.exports = offersModel;