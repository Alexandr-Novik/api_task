const path = require('path');

module.exports = {
  entry: './js/builded/app.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'app.min.js'
  }
};