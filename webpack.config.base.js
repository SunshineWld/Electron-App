module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
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
        use: [{
          loader: "tslint-loader",
          options: {
            configFile: "./tslint.json",
            tsConfigFile: "./tsconfig.json"
          }
        }]
      },
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: 'source-map-loader'
      }
    ]
  }
}
