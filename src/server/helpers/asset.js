const manifest = require('../internals/manifest');

const assetPath = path => (manifest ? manifest[path] : path);

module.exports = {
  assetPath,
};
