const mongoose = require('mongoose');

const favoritesSchema = mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  owner: {
    type: String,
    required: true,
  },
});

const favoritesModel = mongoose.model('favorites', favoritesSchema);
module.exports = favoritesModel;
