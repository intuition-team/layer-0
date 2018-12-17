const path = require('path');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

dotenv.load();

module.exports = {
  mode: 'development',
  devtool: 'eval',
  context: path.resolve(__dirname, '..'),
  entry: path.resolve('src', 'scripts', 'main.js'),
  output: {
    path: path.resolve('static'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  stats: {
    colors: true,
    hash: false,
    assets: false,
    chunks: false,
    modules: false,
    children: false,
  },
};
