const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true,
          }
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
          }
        }, {
          loader: "sass-loader"
        }
      ]
    }]
  }
};
