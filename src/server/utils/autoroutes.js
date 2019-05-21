const path = require('path');
const globby = require('globby');
const config = require('../config');

const mapRelativeFilename = filename =>
  path
    .resolve(filename)
    .replace(config.views, '')
    .replace(/\.[^/.]+$/, '')
    .replace(/\\/g, '/');

const mapRoute = rules => filename => {
  const keys = Object.keys(rules);
  const match = keys.find(key => new RegExp(key).test(filename));
  const view = filename.substring(1);
  const endpoint = match
    ? filename.replace(new RegExp(match), rules[match])
    : filename;

  return { view, endpoint };
};

const createRoute = router => ({ view, endpoint }) => {
  router.get(`${endpoint}$`, (req, res) => {
    res.render(view);
  });
};

const autoroutes = (router, rules = {}) => {
  if (config.autoroutes) {
    globby(config.autoroutes).then(filenames => {
      filenames
        .map(mapRelativeFilename)
        .map(mapRoute(rules))
        .forEach(createRoute(router));
    });
  }
};

module.exports = autoroutes;
