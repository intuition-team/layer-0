const url = require('url');
const assetHelpers = require('./asset');

const helpers = () => (req, res, next) => {
  const isLinkActive = href => url.parse(href).path === req.url;

  Object.assign(res.locals, {
    req,
    isLinkActive,
    ...assetHelpers,
  });

  next();
};

module.exports = helpers;
