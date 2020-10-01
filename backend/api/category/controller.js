class UserController {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const foundCategory = await this.model.find();
    console.log(foundCategory);
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

  async delete(categoryName) {
    const found = await this.model.findOneAndDelete({ name: categoryName });
    if (!found) throw 'not found';
    return found;
  }
}

module.exports = UserController;
