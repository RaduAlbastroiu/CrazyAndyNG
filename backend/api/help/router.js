const { Router } = require('express');
const HelpController = require('./controller');

const helpUserRouter = new Router();
const helpUserController = new HelpController();

helpUserRouter.get('/about', async (req, res) => {
  try {
    const about = await helpUserController.getAbout();
    if (about) {
      return res.status(200).json({ about });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = helpUserRouter;
