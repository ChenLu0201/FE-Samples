const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles.css');

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
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader?minimize&modules&importLoaders=2&localIdentName=[name]__[local]', 'sass-loader']),
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, extractCSS],
  stats: {
    colors: true
  }

};