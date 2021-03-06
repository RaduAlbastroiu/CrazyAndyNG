const mongoose = require('mongoose');
const productRouter = require('./router');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
  barcode: {
    type: String,
  },
  brand: {
    type: String,
    required: [true, 'Brand name field is empty'],
  },
  price: {
    type: [Number],
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
  productionDate: {
    type: Date,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hashtag',
    },
  ],
  images: {
    type: [String],
  },
  owner: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
