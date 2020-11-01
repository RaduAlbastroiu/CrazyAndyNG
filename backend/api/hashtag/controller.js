const hashtagRouter = require('./router');

const CategoryModel = require('../category/model');

function converToQuery(filter) {
  const newFilter = {};
  if (filter._id) {
    newFilter._id = filter._id;
  }
  if (filter.category) {
    newFilter.category = filter.category;
  }

  return newFilter;
}

class HashtagController {
  constructor(model) {
    this.model = model;
  }

  async find(args) {
    const skip = (args.page - 1) * args.size;
    const query = converToQuery(args.filter);

    // ignore pagination
    let foundHashtags = await this.model.find(query);

    return foundHashtags;
  }

  async create(hashtag) {
    const category = await CategoryModel.findOne({ _id: hashtag.category });
    if (category) {
      hashtag.isHighlighted = hashtag.isHighlighted || false;
      const newHashtag = new this.model(hashtag);
      return await newHashtag.save();
    }
    throw 'not found';
  }

  async update(_id, hashtag) {
    const oldHashtag = await this.model.findOne({ _id });
    if (oldHashtag) {
      oldHashtag.name = hashtag.name || oldHashtag.name;
      oldHashtag.isHighlighted =
        hashtag.isHighlighted || oldHashtag.isHighlighted;
      const newHashtag = await oldHashtag.save();
      return newHashtag;
    }
    throw 'not found';
  }

  async delete(_id) {
    const found = await this.model.findOneAndDelete({ _id });
    if (!found) throw 'not found';
    return found;
  }
}

module.exports = HashtagController;
