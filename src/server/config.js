const path = require('path');
const dotenv = require('dotenv');

dotenv.load();

module.exports = {
  // Current environment.
  isDevelopment: process.env.NODE_ENV !== 'production',
  isProduction: process.env.NODE_ENV === 'production',

  // Basic server settings.
  port: process.env.PORT || 1234,
  host: process.env.HOST || 'localhost',

  // Views directory.
  views: path.resolve(__dirname, '../pages'),

  // Public directory with static files.
  static: path.resolve(__dirname, '../../static'),

  // Automatic routes generation globs.
  autoroutes: [
    path.resolve(__dirname, '../pages', '**/*.pug'),
    '!**/{layouts,partials}/**/*.pug',
  ],
};
