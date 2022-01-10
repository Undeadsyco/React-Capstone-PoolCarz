const mongoose = require('mongoose');

const { Schema } = mongoose;

const ridesSchema = new Schema({
  riders: [{
    riderId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    riderName: {
      type: String,
    },
    pickUp: {
      type: String,
    },
    destination: {
      type: String,
    },
  }],
  driver: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    name: {
      type: String,
      required: true,
    }
  },
  status: {
    type: String,
    required: true,
  }
});

const ridesModel = mongoose.model('rides', ridesSchema);
module.exports = ridesModel;
