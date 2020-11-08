const categoryModel = require('../category/model');
const hashtagModel = require('../hashtag/model');
const {
  downloadBlob,
  uploadBlob,
  deleteBlob,
} = require('../../helpers/azureBlobUtils');
const { v4 } = require('uuid');
const uuid = v4;

async function converToQuery(filter) {
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
  if (filter.hashtags) {
    newFilter.hashtags = { $all: filter.hashtags };
  }
  if (filter.hashtagNames) {
    let hashtags = [];
    for (const hashtag of filter.hashtagNames) {
      const hashtagDb = await hashtagModel.findOne({ name: hashtag });
      if (hashtagDb) {
        hashtags.push(hashtagDb._id);
      }
    }
    if (hashtags.length) {
      newFilter.hashtags = { $all: hashtags };
    }
  }
  if (filter.name) {
    newFilter.name = { $regex: `.*${filter.name}.*`, $options: 'i' };
  }
  if (filter.categoryName) {
    const category = await categoryModel.findOne({ name: filter.categoryName });
    if (category) {
      newFilter.category = category._id;
    }
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
    const query = await converToQuery(args.filter);
    let foundProducts = this.model.find(query).skip(skip).limit(args.size);
    foundProducts = foundProducts.populate('category');
    foundProducts = foundProducts.populate('hashtags');
    const res = await Promise.all([foundProducts]);

    return res[0];
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
    let found = await this.model.findOne({ _id });
    if (found) {
      found.images.forEach((imgName) => {
        deleteBlob(imgName);
      });
    }

    found = await this.model.findOneAndDelete({ _id });
    if (!found) throw 'not found';
    return found;
  }

  async downloadImages(product) {
    let images = [];

    product.images.forEach(async (imageName) => {
      const downloaded = await downloadBlob(imageName);
      images.push(downloaded);
    });

    return images;
  }

  async getImage(_id, _imgId) {
    const dbProduct = await this.model.findOne({ _id });
    if (!dbProduct) throw 'not found';

    let index = dbProduct.images.findIndex((imgName) => {
      return imgName === _imgId;
    });
    if (index < 0) {
      throw 'not found';
    }

    return await downloadBlob(_imgId);
  }

  async addImage(_id, file) {
    const oldProduct = await this.model.findOne({ _id });
    if (!oldProduct) throw 'not found';

    let fileName = 'image' + uuid() + '.jpg';

    await uploadBlob(fileName, file.file);
    oldProduct.images.push(fileName);

    const newProduct = await oldProduct.save();
    return newProduct;
  }

  async deleteImage(_id, imgName) {
    const oldProduct = await this.model.findOne({ _id });
    if (!oldProduct) throw 'not found';

    const indexToRemove = oldProduct.images.indexOf(imgName);
    if (indexToRemove >= 0) {
      await deleteBlob(imgName);
      oldProduct.images.splice(indexToRemove, 1);
      await oldProduct.save();
    } else {
      throw 'Image not found';
    }
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

/*
{
  image0: {
    name: 'IMG_6990.jpeg',
    data: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 48 00 48 00 00 ff e1 07 88 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 0a 01 0f 00 02 00 00 00 06 00 00 ... 1469392 more bytes>,
    size: 1469442,
    encoding: '7bit',
    tempFilePath: '',
    truncated: false,
    mimetype: 'image/jpeg',
    md5: '93c35556a6c2e1f268a2d91d0f97717a',
    mv: [Function: mv]
  }
}
*/
