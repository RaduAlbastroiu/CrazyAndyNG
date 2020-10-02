class ProductController {
  constructor(model) {
    this.model = model;
  }

  async find(filter) {
    const skip = (filter.page - 1) * filter.size;

    let foundProducts = await this.model.find().skip(skip).limit(filter.size);
    foundProducts = foundProducts.populate('hashtags', 'name');

    return foundProducts;
  }

  async create(product) {
    if (product.barcode) {
      const duplicate = await this.model.findOne({
        barcode: product.barcode,
      });
      if (duplicate) throw 'duplicate';
    }

    const newProduct = new this.model(product);
    return await newProduct.save();
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

module.exports = ProductController;
