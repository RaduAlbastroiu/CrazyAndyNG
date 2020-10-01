const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const HashtagController = require('./controller');
const HashtagModel = require('./model');

const hashtagRouter = new Router();
const hashtagController = new HashtagController(HashtagModel);

hashtagRouter.get('/', async (req, res) => {
  try {
    const hashtags = await hashtagController.find(req.params);
    res.status(200).json(hashtags);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

/*
hashtagRouter.post(
  '/',
  [check('name', 'Name is empty').notEmpty()],
  validate,
  async (req, res) => {
    try {
      const created = await hashtagController.create(req.body);
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

hashtagRouter.delete(
  '/',
  [check('name', 'Name is empty').notEmpty()],
  validate,
  async (req, res) => {
    try {
      await hashtagController.delete(req.body);
      return res.sendStatus(204);
    } catch (err) {
      if (err === 'not found') {
        return res.status(404).send('Category not found');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);
*/

module.exports = hashtagRouter;
