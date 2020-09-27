const aboutHtml = require('../../resources/about');
const privacyHtml = require('../../resources/privacyPolicy');
const faqHtml = require('../../resources/faq');
const termsHtml = require('../../resources/termsAndConditions');

class HelpController {
  getAbout = async () => {
    return {
      page: 'About',
      htmlContent: aboutHtml.replace(/\n/g, ''),
    };
  };

  getFaq = async () => {
    return {
      page: 'FAQ',
      htmlContent: faqHtml.replace(/\n/g, ''),
    };
  };

  getPrivacyPolicy = async () => {
    return {
      page: 'Privacy Policy',
      htmlContent: privacyHtml.replace(/\n/g, ''),
    };
  };

  getTermsAndConditions = async () => {
    return {
      page: 'Terms & Conditions',
      htmlContent: termsHtml.replace(/\n/g, ''),
    };
  };
}

module.exports = HelpController;
