const aboutHtml = require('../../resources/about');
const privacyHtml = require('../../resources/privacyPolicy');
const faqHtml = require('../../resources/faq');
const termsHtml = require('../../resources/termsAndConditions');

class HelpController {
  about = async () => {
    return {
      page: 'About',
      htmlContent: aboutHtml,
    };
  };

  faq = async () => {
    return {
      page: 'FAQ',
      htmlContent: faqHtml,
    };
  };

  privacyPolicy = async () => {
    return {
      page: 'Privacy Policy',
      htmlContent: privacyHtml,
    };
  };

  termsAndConditions = async () => {
    return {
      page: 'Terms & Conditions',
      htmlContent: termsHtml,
    };
  };
}

module.exports = HelpController;
