const { Router } = require('express');
const { check } = require('express-validator');

const validate = require('../../middleware/paramsValidation');
const { auth } = require('../../middleware/authValidation');

const FavoritesController = require('./controller');
const FavoritesModel = require('./model');

const favoritesRouter = new Router();
const favoritesController = new FavoritesController(FavoritesModel);

favoritesRouter.get('/', auth, async (req, res) => {
  try {
    const options = {
      filter: req.query.filter || {},
    };
    if (req.query.filter) {
      options.filter = JSON.parse(options.filter);
    }
    const found = await favoritesController.find(options);
    return res.status(200).json({ success: 'Query successful', found });
  } catch (err) {
    if (err === 'not found')
      return res.status(404).send({ err: 'favorites not found' });
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

favoritesRouter.put('/:_ownerId', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      const isOwner = await favoritesController.isOwnedBy(
        req.user.deviceId,
        req.params._ownerId
      );
      if (!isOwner) throw 'forbidden';
    }
    const updated = await favoritesController.update(
      req.params._ownerId,
      req.body
    );
    return res.status(200).json({ success: 'Updated successfully', updated });
  } catch (err) {
    if (err === 'forbidden')
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

favoritesRouter.delete('/:_ownerId', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      const isOwner = await favoritesController.isOwnedBy(
        req.user.deviceId,
        req.params._ownerId
      );
      if (!isOwner) throw 'forbidden';
    }
    await favoritesController.delete(req.params._ownerId);
    return res.sendStatus(204);
  } catch (err) {
    if (err === 'forbidden')
      return res
        .status(403)
        .send({ err: 'You are not allowed to modify this resource' });
    if (err === 'not found')
      return res.status(404).send({ err: 'Favorites not found' });
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = favoritesRouter;
