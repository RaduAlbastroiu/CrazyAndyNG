const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../middleware/paramsValidation');

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

module.exports = mobileUserRouter;
