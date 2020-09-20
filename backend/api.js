// create main router
const { Router } = require('express');
const mainRouter = new Router();

// register routes
const authRoutes = require('./user/router');
mainRouter.use('/user', authRoutes);

const mobileAuthRoutes = require('./mobileUser/router');
mainRouter.use('/user', mobileAuthRoutes);

const productRoutes = require('./product/router');
mainRouter.use('/product', productRoutes);

module.exports = mainRouter;
