const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../middleware/paramsValidation');

const UserController = require('./controller');
const UserModel = require('./model');

const userRouter = new Router();
const userController = new UserController(UserModel);

userRouter.post(
  '/login',
  [
    check('email', 'Empty email field').not().isEmpty(),
    check('email', 'Please provide valid email').isEmail(),
    check('password', 'Empty password field').not().isEmpty(),
  ],
  validate,
  async (req, res) => {
    try {
    } catch (err) {
      if (err === 'password mismatch' || err === 'not found') {
        return res
          .status(403)
          .json({ err: 'Invalid email and password combination' });
      }
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = userRouter;
