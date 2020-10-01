const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const productRouter = new Router();

productRouter.get('/all', async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.post('/', async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.put('/:_id', async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
});

productRouter.delete('/:_id', async (req, res) => {
  try {
    res.status(204);
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Product not found');
    }
    console.log(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = productRouter;
