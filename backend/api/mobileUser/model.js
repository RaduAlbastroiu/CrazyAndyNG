const mongoose = require('mongoose');

const mobileUserSchema = mongoose.Schema({
  deviceId: {
    type: String,
    required: [true, 'Device id field is empty'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
});

const mobileUserModel = mongoose.model('mobileUsers', mobileUserSchema);

module.exports = mobileUserModel;
