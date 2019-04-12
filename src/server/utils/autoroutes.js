const path = require('path');
const globby = require('globby');
const config = require('../config');

const mapEndpoint = (rules, filename) => {
  const keys = Object.keys(rules);
  const match = keys.find(key => new RegExp(key).test(filename));

  return match ? filename.replace(new RegExp(match), rules[match]) : filename;
};

const autoroutes = (router, rules = {}) => {
  if (config.autoroutes) {
    globby(config.autoroutes).then(filenames => {
      filenames
        .map(filename =>
          path
            .resolve(filename)
            .replace(config.views, '')
            .replace(/\.[^/.]+$/, '')
            .replace(/\\/g, '/')
        )
        .forEach(filename => {
          const endpoint = mapEndpoint(rules, filename);
          const view = filename.substring(1);

          router.get(endpoint, (req, res) => {
            res.render(view);
          });
        });
    });
  }
};

module.exports = autoroutes;
