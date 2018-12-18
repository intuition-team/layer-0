const globby = require('globby');
const config = require('../config');

const mapEndpoint = (rules, path) => {
  const keys = Object.keys(rules);
  const match = keys.find(key => new RegExp(key).test(path));

  return match ? path.replace(new RegExp(match), rules[match]) : path;
};

const autoroutes = (router, rules = {}) => {
  if (config.autoroutes) {
    globby(config.autoroutes).then(paths => {
      paths
        .map(path => path.replace(config.views, ''))
        .map(path => path.replace(/\.[^/.]+$/, ''))
        .forEach(path => {
          const endpoint = mapEndpoint(rules, path);
          const view = path.substring(1);

          router.get(endpoint, (req, res) => {
            res.render(view);
          });
        });
    });
  }
};

module.exports = autoroutes;
