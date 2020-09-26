const mongoose = require('mongoose');
const productRouter = require('./router');

const productSchema = mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
  Brand: {
    type: String,
    required: [true, 'Brand name field is empty'],
  },
  Price: {
    type: [Number],
    required: [true, 'Price field is empty'],
  },
  Description: {
    type: String,
    required: [true, 'Description field is empty'],
  },
  Hashtags: {
    type: [mongoose.Schema.Types.ObjectId],
    required: [true, 'Hashtags field is empty'],
    ref: 'hashtags',
  },
  Images: {
    type: [String],
  },
});

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
