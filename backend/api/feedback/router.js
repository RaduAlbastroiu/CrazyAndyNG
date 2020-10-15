const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const FeedbackController = require('./controller');
const FeedbackModel = require('./model');

const feedbackRouter = new Router();
const feedbackController = new FeedbackController(FeedbackModel);

feedbackRouter.get('/', async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page, 10) || 1,
      size: parseInt(req.query.size, 10) || 10,
      filter: req.query.filter || {},
    };
    if (req.query.filter) {
      options.filter = JSON.parse(options.filter);
    }
    const found = await feedbackController.find(options);
    return res.status(200).json({ success: 'Query successful', found });
  } catch (err) {
    if (err === 'not found')
      return res.status(404).send({ err: 'feedback not found' });
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

feedbackRouter.post(
  '/',
  [
    check('comment', 'Comment cannot be longer than 500 characters').isLength({
      max: 500,
    }),
    check('stars', 'Stars must be between 1 and 5')
      .isNumeric()
      .custom((value) => {
        return parseInt(value) > 0 && parseInt(value) < 6;
      }),
    check('product', 'Invalid product').isMongoId(),
  ],
  validate,
  async (req, res) => {
    try {
      const created = await feedbackController.create(req.body, req.user);
      return res.status(201).json({ success: 'Created successfully', created });
    } catch (err) {
      console.error(err);
      if (err && err.name === 'ValidationError')
        return res.status(400).send(err.message);
      return res.status(500).send('Internal Server Error');
    }
  }
);

feedbackRouter.put(
  '/:_id',
  [
    check('comment', 'Comment cannot be longer than 500 characters').isLength({
      max: 500,
    }),
    check('stars', 'Stars must be between 1 and 5').custom((value) => {
      if (value) {
        return parseInt(value) > 0 && parseInt(value) < 6;
      }
      return true;
    }),
  ],
  validate,
  async (req, res) => {
    try {
      const updated = await feedbackController.update(req.params._id, req.body);
      return res.status(200).json({ success: 'Updated successfully', updated });
    } catch (err) {
      if (err === 'invalid dates')
        return res
          .status(400)
          .send({ err: 'Invalid date, please recheck date inputs!' });
      if (err === 'forbidden')
        return res
          .status(403)
          .send({ err: 'You are not allowed to modify this resource' });
      if (err === 'not found')
        return res.status(404).send({ err: 'feedback not found' });
      if (err && err.name === 'ValidationError')
        return res.status(400).send(err.message);
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

feedbackRouter.delete('/:_id', async (req, res) => {
  try {
    await feedbackController.delete(req.params._id);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'forbidden')
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    if (err === 'not found')
      return res.status(404).send({ err: 'feedback not found' });
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = feedbackRouter;
