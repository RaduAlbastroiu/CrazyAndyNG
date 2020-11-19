const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
  isHighlighted: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
});

const hashtagModel = mongoose.model('hashtag', hashtagSchema);
module.exports = hashtagModel;
