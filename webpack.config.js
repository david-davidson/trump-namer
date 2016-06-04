var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: path.join(__dirname, '/js/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js(x|)?$/,
        include: path.resolve(__dirname, "js"),
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
