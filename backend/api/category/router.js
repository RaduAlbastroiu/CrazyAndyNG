const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');
const { auth, authAdmin } = require('../../middleware/authValidation');

const CategoryController = require('./controller');
const CategoryModel = require('./model');

const categoryRouter = new Router();
const categoryController = new CategoryController(CategoryModel);

categoryRouter.get('/', auth, async (req, res) => {
  try {
    const categories = await categoryController.getAll();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

categoryRouter.post(
  '/',
  authAdmin,
  [check('name', 'Name is empty').notEmpty()],
  validate,
  async (req, res) => {
    try {
      const created = await categoryController.create(req.body);
      return res.status(201).json({ success: 'Created succesfully', created });
    } catch (err) {
      if (err === 'duplicate') {
        return res.status(400).send('Duplicated');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

categoryRouter.put(
  '/:_id',
  authAdmin,
  [check('name', 'Name is empty').notEmpty()],
  validate,
  async (req, res) => {
    try {
      const updated = await categoryController.update(req.params._id, req.body);
      return res.status(200).json({ success: 'Updated succesfully', updated });
    } catch (err) {
      if (err === 'duplicate') {
        return res.status(400).send('Duplicated');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

categoryRouter.delete('/:_id', authAdmin, async (req, res) => {
  try {
    await categoryController.delete(req.params._id);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Category not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = categoryRouter;
