const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');
const ProductController = require('./controller');
const ProductModel = require('./model');

const productRouter = new Router();
const productController = new ProductController(ProductModel);

productRouter.get('/', async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page, 10) || 1,
      size: parseInt(req.query.size, 10) || 20,
      filter: req.query.filter || {},
    };
    if(req.query.filter) {
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
      const created = await productController.create(req.body);
      return res.status(201).json({ success: 'Create successfully', created });
    } catch (err) {
      if (err === 'duplicate') {
        return res.status(400).send('Duplicated');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

productRouter.put('/:_id', async (req, res) => {
  try {
    const updated = await productController.update(req.params._id, req.body);
    return res.status(200).json({ success: 'Updated successfully', updated });
  } catch (err) {
    if (err === 'duplicate') {
      return res.status(400).send('Duplicated');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.delete('/:_id', async (req, res) => {
  try {
    await productController.delete(req.params._id);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = productRouter;
