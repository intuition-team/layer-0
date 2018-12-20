const url = require('url');

const helpers = () => (req, res, next) => {
  const isLinkActive = href => url.parse(href).path === req.url;

  Object.assign(res.locals, {
    req,
    isLinkActive,
  });

  next();
};

module.exports = helpers;
