const path = require('path');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

dotenv.load();

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, '..'),
  entry: [path.resolve('src', 'scripts', 'main.js')],
  output: {
    path: path.resolve('static', 'assets'),
    filename: '[name].js',
    publicPath: '/assets/',
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
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  plugins: [
    new ErrorOverlayPlugin(),
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
