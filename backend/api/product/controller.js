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

  async update(_id, product) {
    const oldProduct = await this.model.findOne({ _id });
    if (oldProduct) {
      oldProduct.name = product.name || oldProduct.name;
      oldProduct.barcode = product.barcode || oldProduct.barcode;
      oldProduct.brand = product.brand || oldProduct.brand;
      oldProduct.price = product.price || oldProduct.price;
      oldProduct.origin = product.origin || oldProduct.origin;
      oldProduct.size = product.size || oldProduct.size;
      oldProduct.colour = product.colour || oldProduct.colour;
      oldProduct.remarks = product.remarks || oldProduct.remarks;
      oldProduct.isValid = product.isValid || oldProduct.isValid;
      oldProduct.productionDate =
        product.productionDate || oldProduct.productionDate;
      oldProduct.category = product.category || oldProduct.category;
      oldProduct.hashtags = product.hashtags || oldProduct.hashtags;
      oldProduct.images = product.images || oldProduct.images;

      const newProduct = await oldProduct.save();
      return newProduct;
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
