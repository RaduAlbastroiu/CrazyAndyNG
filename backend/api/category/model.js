const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Category already exists'],
    required: [true, 'Name field is empty'],
  },
});

const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel;
