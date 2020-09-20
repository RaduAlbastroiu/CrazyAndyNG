const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email field is empty'],
    unique: [true, 'Email is already taken'],
  },
  password: {
    type: String,
    required: [true, 'Password field is empty'],
  },
  role: {
    type: String,
    required: [true, 'Role field is empty'],
  },
});

const userModel = mongoose.model('users', userSchema);

// no hashing for passwords
userModel.comparePassword = (password, hash) => {
  return password === hash;
};

module.exports = userModel;
