const moment = require("moment");

function convertToQuery(filter) {
  const newFilter = {};
  if (filter._id) {
    newFilter._id = filter._id;
  }
  if (filter.product) {
    newFilter.product = filter.product;
  }
  return newFilter;
}

class FeedbackController {
  constructor(model) {
    this.model = model;
  }

  async find(args) {
    const skip = (args.page - 1) * args.size;
    const query = convertToQuery(args.filter);
    let found = await this.model
      .find(query)
      .skip(skip)
      .limit(args.size);

    return found;
  }

  async create(feedback) {
    const newFeedback = new this.model(feedback);
    return await newFeedback.save();
  }

  async update(_id, feedback) {
    const oldFeedback = await this.model.findOne({ _id });
    if (oldFeedback) {
      oldFeedback.title = feedback.title || oldFeedback.title;
      oldFeedback.comment = feedback.comment || oldFeedback.comment;
      oldFeedback.stars = feedback.stars || oldFeedback.stars;
      
      const newFeedback = await oldFeedback.save();
      return newFeedback;
    }
    throw "not found";
  }

  async delete(_id) {
    const found = await this.model.findOneAndDelete({ _id });
    if (!found) throw "not found";
    return found;
  }
}

module.exports = FeedbackController;
