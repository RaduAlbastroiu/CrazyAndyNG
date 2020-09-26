const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');

const productRouter = new Router();

module.exports = productRouter;
