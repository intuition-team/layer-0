const url = require('url');
const manifest = require('./utils/manifest');

const assetPath = path => (manifest ? manifest[path] : path);

const helpers = () => (req, res, next) => {
  const isLinkActive = href => url.parse(href).path === req.url;

  Object.assign(res.locals, {
    req,
    assetPath,
    isLinkActive,
  });

  next();
};

module.exports = helpers;
