const CategoryModel = require('../category/model');
const HashtagModel = require('../hashtag/model');

function converToQuery(filter) {
  const newFilter = {};
  if(filter._id) {
    newFilter._id = filter._id;
  }
  if(filter.barcode) {
    newFilter.barcode = filter.barcode;
  }
  if(filter.brand) {
    newFilter.brand = filter.brand;
  }
  if(filter.origin) {
    newFilter.origin = filter.origin;
  }

  return newFilter;
}

class ProductController {
  constructor(model) {
    this.model = model;
  }

  async find(args) {
    const skip = (args.page - 1) * args.size;
    const query = converToQuery(args.filter);
    console.log(query);
    let foundProducts = await this.model
      .find(query)
      .skip(skip)
      .limit(args.size);

    return foundProducts;
  }

  async create(product) {
    if (product.barcode) {
      const duplicate = await this.model.findOne({
        barcode: product.barcode,
      });

      if (duplicate) throw 'duplicate';
    }

    if (await this.isDuplicate(product)) throw 'duplicate';

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
      if(product.hashtags && duplicate.hashtags && product.hashtags.toString() !== duplicate.hashtags.toString()) {
        same = false;
      } 
      
      if(product.origin && duplicate.origin && product.origin !== duplicate.origin) {
        same = false;
      }
      
      if(product.size && duplicate.size && product.size !== duplicate.size) {
        same = false;
      }

      if(product.colour && duplicate.colour && product.colour !== duplicate.colour) {
        same = false;
      }

      if(same === true) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }
}

module.exports = ProductController;
