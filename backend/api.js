// create main router
const { Router } = require('express');
const mainRouter = new Router();

// register routes
const authRoutes = require('./api/user/router');
mainRouter.use('/user', authRoutes);

const categoryRoutes = require('./api/category/router');
mainRouter.use('/category', categoryRoutes);

const hashtagRoutes = require('./api/hashtag/router');
mainRouter.use('/hashtag', hashtagRoutes);

const productRoutes = require('./api/product/router');
mainRouter.use('/product', productRoutes);

const feedbackRoutes = require('./api/feedback/router');
mainRouter.use('/feedback', feedbackRoutes);

const helpRoutes = require('./api/help/router');
mainRouter.use('/help', helpRoutes);

const favoritesRoutes = require('./api/favorites/router');
mainRouter.use('/favorites', favoritesRoutes);

module.exports = mainRouter;
