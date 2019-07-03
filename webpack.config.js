const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts/',
              publicPath: '../static/fonts',
            },
          },
        ],
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'store.html',
      template: 'store.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'cheсkout.html',
      template: 'cheсkout.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts',
      },
      {
        from: './src/img',
        to: './img',
      },
    ]),
  ],
  devServer: {
    contentBase: './src/public',
    port: 7700,
  },
};
