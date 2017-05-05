const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'todo.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  stats: {
    colors: true
  }

};