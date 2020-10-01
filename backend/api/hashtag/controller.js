class HashtagController {
  constructor(model) {
    this.model = model;
  }

  async find(params) {
    let filter = {};
    if (params.category) {
      filter.category = params.category;
    }

    const foundHashtags = await this.model.find(filter);
    return foundHashtags;
  }

  /*
  async create(category) {
    const duplicate = await this.model.findOne({
      name: category.name,
    });

    if (duplicate) throw 'duplicate';
    const newCategory = new this.model(category);
    return await newCategory.save();
  }

  async update(_id, category) {
    const oldCategory = await this.model.findOne({ _id });
    if (oldCategory) {
      oldCategory.name = category.name || oldCategory.name;
      const newCategory = await oldCategory.save();
      return newCategory;
    }
    throw 'not found';
  }

  async delete(category) {
    const found = await this.model.findOneAndDelete({ name: category.name });
    if (!found) throw 'not found';
    return found;
  }
  */
}

module.exports = HashtagController;
