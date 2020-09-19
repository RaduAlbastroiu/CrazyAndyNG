// create main router
const { Router } = require('express');
const mainRouter = new Router();

// register routes
const authRoutes = require('./auth/router');
mainRouter.use('/auth', authRoutes);

module.exports = mainRouter;
