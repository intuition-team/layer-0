const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.load();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: [path.resolve('src', 'scripts', 'main.js')],
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
    new webpack.ProgressPlugin({
      profile: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  stats: {
    colors: true,
  },
};
