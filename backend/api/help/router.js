const { Router } = require('express');
const HelpController = require('./controller');

const helpUserRouter = new Router();
const helpUserController = new HelpController();

helpUserRouter.get('/about', async (req, res) => {
  try {
    const about = await helpUserController.getAbout();
    if (about) {
      return res.status(200).json(about);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

helpUserRouter.get('/faq', async (req, res) => {
  try {
    const faq = await helpUserController.getFaq();
    if (faq) {
      return res.status(200).json(faq);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

helpUserRouter.get('/privacy', async (req, res) => {
  try {
    const privacy = await helpUserController.getPrivacyPolicy();
    if (privacy) {
      return res.status(200).json(privacy);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

helpUserRouter.get('/terms', async (req, res) => {
  try {
    const terms = await helpUserController.getTermsAndConditions();
    if (terms) {
      return res.status(200).json(terms);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = helpUserRouter;
