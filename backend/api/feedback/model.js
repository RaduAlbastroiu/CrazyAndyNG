const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title field is empty"]
  },
  comment: {
    type: String,
  },
  stars: {
    type: Number,
    required: [true, "Stars required"]
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);
module.exports = feedbackModel;
