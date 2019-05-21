const chokidar = require('chokidar');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../../build/dev.webpack.config');
const config = require('../config');

const watch = app => {
  const compiler = webpack(webpackConfig);
  const watcher = chokidar.watch(config.watch);
  const livereload = webpackConfig.plugins.find(plugin => 'server' in plugin);

  if (!livereload) {
    throw new Error('LiveReloadPlugin has not been found');
  }

  // Build and watch scripts and styles with Webpack Dev Middleware.
  // It reloads a page with help of LiveReloadPlugin.
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      ...config.webpack,
    })
  );

  // Also watch views and use LiveReload plugin's server
  // to reload a page.
  watcher.on('ready', () => {
    watcher.on('all', (event, filename) => {
      if (livereload.server) {
        livereload.server.notifyClients([filename]);
      }
    });
  });
};

module.exports = watch;
