const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');
const { auth, authAdmin } = require('../../middleware/authValidation');

const HashtagController = require('./controller');
const HashtagModel = require('./model');

const hashtagRouter = new Router();
const hashtagController = new HashtagController(HashtagModel);

hashtagRouter.get('/', auth, async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page, 10) || 1,
      size: parseInt(req.query.size, 10) || 20,
      filter: req.query.filter || {},
    };
    if (req.query.filter) {
      options.filter = JSON.parse(options.filter);
    }
    const hashtags = await hashtagController.find(options);
    res.status(200).json(hashtags);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

hashtagRouter.post(
  '/',
  authAdmin,
  [
    check('name', 'Name is empty').notEmpty(),
    check('category', 'Category is empty').notEmpty(),
    check('category', 'Category is not an _id').isMongoId(),
  ],
  validate,
  async (req, res) => {
    try {
      const created = await hashtagController.create(req.body);
      return res.status(201).json({ success: 'Created succesfully', created });
    } catch (err) {
      if (err === 'not found') {
        return res.status(404).send('Category not found');
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

hashtagRouter.put('/:_id', authAdmin, async (req, res) => {
  try {
    const updated = await hashtagController.update(req.params._id, req.body);
    return res.status(200).json({ success: 'Updated successfully', updated });
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Hashtag not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

hashtagRouter.delete('/:_id', authAdmin, async (req, res) => {
  try {
    await hashtagController.delete(req.params._id);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'not found') {
      return res.status(404).send('Hashtag not found');
    }
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = hashtagRouter;
