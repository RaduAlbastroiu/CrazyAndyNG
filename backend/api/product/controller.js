const categoryModel = require('../category/model');
const CategoryModel = require('../category/model');
const hashtagModel = require('../hashtag/model');
const HashtagModel = require('../hashtag/model');

function converToQuery(filter) {
  const newFilter = {};
  if (filter._id) {
    newFilter._id = filter._id;
  }
  if (filter.barcode) {
    newFilter.barcode = filter.barcode;
  }
  if (filter.brand) {
    newFilter.brand = filter.brand;
  }
  if (filter.origin) {
    newFilter.origin = filter.origin;
  }

  return newFilter;
}

class ProductController {
  constructor(model) {
    this.model = model;
  }

  async isOwnedBy(deviceId, productId) {
    const product = await this.model.findOne({ _id: productId });
    if (!product) throw 'not found';
    if (product.owner === deviceId) return true;
    return false;
  }

  async find(args) {
    const skip = (args.page - 1) * args.size;
    const query = converToQuery(args.filter);
    let foundProducts = await this.model
      .find(query)
      .skip(skip)
      .limit(args.size);

    return foundProducts;
  }

  async create(product, user) {
    product.owner = user.role === 'user' ? user.deviceId : user.email;
    if (product.barcode) {
      const duplicate = await this.model.findOne({
        barcode: product.barcode,
      });

      if (duplicate) throw 'duplicate';
    }

    if (await this.isDuplicate(product)) throw 'duplicate';

    if (!(await this.isValidHashtags(product))) throw 'invalid hashtags';

    if (!(await this.isValidCategory(product))) throw 'invalid category';

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

      if (await this.isDuplicate(product)) throw 'duplicate';

      if (!(await this.isValidHashtags(product))) throw 'invalid hashtags';

      if (!(await this.isValidCategory(product))) throw 'invalid category';

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

  async isDuplicate(product) {
    const duplicates = await this.model.find({
      name: product.name,
      brand: product.brand,
      price: product.price,
    });

    let isDuplicate = false;
    duplicates.forEach((duplicate) => {
      let same = true;
      if (
        product.hashtags &&
        duplicate.hashtags &&
        product.hashtags.toString() !== duplicate.hashtags.toString()
      ) {
        same = false;
      }

      if (
        product.origin &&
        duplicate.origin &&
        product.origin !== duplicate.origin
      ) {
        same = false;
      }

      if (product.size && duplicate.size && product.size !== duplicate.size) {
        same = false;
      }

      if (
        product.colour &&
        duplicate.colour &&
        product.colour !== duplicate.colour
      ) {
        same = false;
      }

      if (same === true) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  async isValidHashtags(product) {
    if (product.hashtags) {
      await product.hashtags.forEach(async (tag) => {
        const dbTag = await hashtagModel.findOne({ _id: tag });
        if (!dbTag) {
          return false;
        }
      });
    }
    return true;
  }

  async isValidCategory(product) {
    if (product.category) {
      const dbCategory = await categoryModel.findOne({ _id: product.category });
      if (!dbCategory) {
        return false;
      }
    }
    return true;
  }
}

module.exports = ProductController;
