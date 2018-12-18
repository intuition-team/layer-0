const globby = require('globby');
const config = require('../config');

const autoroutes = (router, override = {}) => {
  if (config.autoroutes) {
    globby(config.autoroutes).then(paths => {
      paths
        .map(path => path.replace(config.views, ''))
        .map(path => path.replace(/\.[^/.]+$/, ''))
        .forEach(path => {
          const endpoint = override[path] || path;
          const view = path.substring(1);

          router.get(endpoint, (req, res) => {
            res.render(view);
          });
        });
    });
  }
};

module.exports = autoroutes;
