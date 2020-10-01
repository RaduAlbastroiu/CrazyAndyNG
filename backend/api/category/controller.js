class CategoryController {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const foundCategory = await this.model.find();
    return foundCategory;
  }

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

  async delete(_id) {
    const found = await this.model.findOneAndDelete({ _id });
    if (!found) throw 'not found';
    return found;
  }
}

module.exports = CategoryController;
