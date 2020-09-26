const aboutHtml = require('../../resources/about');

class HelpController {
  about = async () => {
    return {
      page: 'About',
      htmlContent: aboutHtml,
    };
  };
}

module.exports = HelpController;
