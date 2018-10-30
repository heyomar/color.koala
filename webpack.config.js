const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './scripts/app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      randomColor: 'randomcolor',
    }),
    new webpack.ProvidePlugin({
      convert: 'color-convert',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
