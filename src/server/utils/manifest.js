const config = require('../config');

// eslint-disable-next-line
module.exports = config.isProduction ? require(config.manifest) : null;
