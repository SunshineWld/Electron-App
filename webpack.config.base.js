const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: ['source-map-loader', 'tslint-loader']
      }
    ]
  }
}
