const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file-loader']
      }
    ]
  }
}