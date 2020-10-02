const mongoose = require('mongoose');
const productRouter = require('./router');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
  barcode: {
    type: String,
    unique: [true, 'Barcode must be unique'],
  },
  brand: {
    type: String,
    required: [true, 'Brand name field is empty'],
  },
  price: {
    type: Number,
    required: [true, 'Price field is empty'],
  },
  origin: {
    type: String,
  },
  size: {
    type: String,
  },
  colour: {
    type: String,
  },
  remarks: {
    type: String,
  },
  isValid: {
    type: Boolean,
    required: true,
  },
  productionDate: {
    type: Date,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Category field is empty'],
    ref: 'category',
  },
  hashtags: {
    type: [mongoose.Schema.Types.ObjectId],
    required: [true, 'Hashtags field is empty'],
    ref: 'hashtag',
  },
  images: {
    type: [String],
  },
});

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
