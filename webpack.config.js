const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/build/',
    publicPath: 'build/',
    filename: 'bundle.js',
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader',
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]!autoprefixer-loader!sass!',
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=26000&mimetype=image/svg+xml',
      },
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
