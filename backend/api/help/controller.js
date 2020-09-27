const aboutHtml = require('../../resources/about');
const privacyHtml = require('../../resources/privacyPolicy');
const faqHtml = require('../../resources/faq');
const termsHtml = require('../../resources/termsAndConditions');

class HelpController {
  getAbout = async () => {
    return {
      page: 'About',
      htmlContent: aboutHtml,
    };
  };

  getFaq = async () => {
    return {
      page: 'FAQ',
      htmlContent: faqHtml,
    };
  };

  getPrivacyPolicy = async () => {
    return {
      page: 'Privacy Policy',
      htmlContent: privacyHtml,
    };
  };

  getTermsAndConditions = async () => {
    return {
      page: 'Terms & Conditions',
      htmlContent: termsHtml,
    };
  };
}

module.exports = HelpController;
