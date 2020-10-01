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

  async delete(category) {
    const found = await this.model.findOneAndDelete({ name: category.name });
    if (!found) throw 'not found';
    return found;
  }
}

module.exports = CategoryController;
