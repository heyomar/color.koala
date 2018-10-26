const path = require('path');

module.exports = {
  entry: './scripts/app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
};