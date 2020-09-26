const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const MobileUserController = require('./controller');
const MobileUserModel = require('./model');

const mobileUserRouter = new Router();
const mobileUserController = new MobileUserController(MobileUserModel);

mobileUserRouter.post(
  '/mobile',
  [check('deviceId', 'Empty device id').not().isEmpty()],
  validate,
  async (req, res) => {
    try {
      const user = await mobileUserController.getUser(req.body.deviceId);
      if (user) {
        return res.status(200).json({ user });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

mobileUserRouter.put(
  '/mobile/:_id',
  [check('name', 'Please provide name').not().isEmpty()],
  validate,
  async (req, res) => {
    try {
      const updated = await mobileUserController.update(
        req.params._id,
        req.body
      );
      return res.status(200).json({ success: 'Update succesfully', updated });
    } catch (err) {
      if (err === 'not found')
        return res.status(404).send({ err: 'User not found' });

      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = mobileUserRouter;
