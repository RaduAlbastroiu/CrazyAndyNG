const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../middleware/paramsValidation');

const userRouter = new Router();

userRouter.post('/login', [], validate, async (req, res) => {
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
});

module.exports = userRouter;
