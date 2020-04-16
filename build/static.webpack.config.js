const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: [path.resolve('src', 'scripts', 'main.js')],
  output: {
    path: path.resolve('site'),
    filename: 'assets/[name].[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[chunkhash:8].css',
    }),
    new ManifestPlugin({
      basePath: 'site/',
    }),
    new CopyWebpackPlugin([
      {
        from: `static/fonts`,
        to: `fonts`,
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: `static/images`,
        to: `fonts`,
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: `static/favicon.ico`,
        to: `favicon.ico`,
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: `static/robots.txt`,
        to: `robots.txt`,
      },
    ]),
    new HtmlWebpackPlugin({
      template: `pug-loader!src/pages/index.pug`,
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
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
};
