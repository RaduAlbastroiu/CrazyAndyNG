// create main router
const { Router } = require('express');
const mainRouter = new Router();

// register routes
const authRoutes = require('./api/user/router');
mainRouter.use('/user', authRoutes);

const mobileAuthRoutes = require('./api/mobileUser/router');
mainRouter.use('/user', mobileAuthRoutes);

const productRoutes = require('./api/product/router');
mainRouter.use('/product', productRoutes);

const helpRoutes = require('./api/help/router');
mainRouter.use('/help', helpRoutes);

module.exports = mainRouter;
