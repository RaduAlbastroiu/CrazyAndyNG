const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');
const { auth, authAdmin } = require('../../middleware/authValidation');

const ProductController = require('./controller');
const ProductModel = require('./model');

const { BlobServiceClient, BlockBlobClient } = require('@azure/storage-blob');

const fileUpload = require('express-fileupload');

const productRouter = new Router();
const productController = new ProductController(ProductModel);

// A helper function used to read a readable stream into a string
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (data) => {
      chunks.push(data.toString());
    });
    readableStream.on('end', () => {
      resolve(chunks.join(''));
    });
    readableStream.on('error', reject);
  });
}

productRouter.get('/', auth, async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page, 10) || 1,
      size: parseInt(req.query.size, 10) || 20,
      filter: req.query.filter || {},
    };
    if (req.query.filter) {
      options.filter = JSON.parse(options.filter);
    }
    const found = await productController.find(options);
    return res.status(200).json({ success: 'Query successful', found });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.post(
  '/',
  authAdmin,
  [
    check('name', 'Name field is empty').notEmpty(),
    check('brand', 'Brand name field is empty').notEmpty(),
    check('price', 'Price field is empty').notEmpty(),
    check('category', 'Should be a valid mongo id')
      .optional()
      .trim()
      .escape()
      .isMongoId(),
  ],
  validate,
  async (req, res) => {
    try {
      const created = await productController.create(req.body, req.user);
      return res.status(201).json({ success: 'Create successfully', created });
    } catch (err) {
      if (err === 'duplicate') {
        return res.status(400).send('Duplicated');
      }
      if (err === 'invalid hashtags') {
        return res.status(404).send('Hashtag not found');
      }
      if (err === 'invalid category') {
        return res.status(404).send('Category not found');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

productRouter.put('/:_id', authAdmin, async (req, res) => {
  try {
    const updated = await productController.update(req.params._id, req.body);
    return res.status(200).json({ success: 'Updated successfully', updated });
  } catch (err) {
    if (err === 'forbidden') {
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    }
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    if (err === 'duplicate') {
      return res.status(400).send('Duplicated');
    }
    if (err === 'invalid hashtags') {
      return res.status(404).send('Hashtag not found');
    }
    if (err === 'invalid category') {
      return res.status(404).send('Category not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.delete('/:_id', authAdmin, async (req, res) => {
  try {
    await productController.delete(req.params._id);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'forbidden') {
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    }
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

/*
// Product Images Area
*/

productRouter.use(fileUpload());

productRouter.get('/:_id/image', auth, async (req, res) => {
  try {
    const found = await productController.getImages(req.params._id);
    return res.status(200).json({ success: 'Query successful', found });
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.put('/:_id/image', authAdmin, async (req, res) => {
  try {
    const updated = await productController.addImage(req.params._id, req.files);
    return res.status(200).json({ success: 'Updated successfully', updated });
  } catch (err) {
    if (err === 'forbidden') {
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    }
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    if (err === 'duplicate') {
      return res.status(400).send('Duplicated');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.delete('/:_id/image/:imgName', authAdmin, async (req, res) => {
  try {
    await productController.deleteImage(req.params._id, req.params.imgName);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    if (err === 'Image not found') {
      return res.status(404).send('Image not found');
    }
    if (err === 'forbidden') {
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = productRouter;
