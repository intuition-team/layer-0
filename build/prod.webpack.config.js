const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.load();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: [path.resolve('src', 'scripts', 'main.js')],
  output: {
    path: path.resolve('static', 'assets'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
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
    new webpack.ProgressPlugin({
      profile: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[id].[chunkhash:8].css',
    }),
    new ManifestPlugin({
      basePath: '/assets/',
      publicPath: '/assets/',
    }),
  ],
  stats: {
    colors: true,
  },
};
