const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  target: 'electron-renderer',
})