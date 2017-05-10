const path = require('path');
// const combineLoaders = require('webpack-combine-loaders');
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
      // {
      //   test: /\.(css)$/,
      //   exclude: /node_modules/,
      //   loaders: combineLoaders([
      //     {loader: 'style-loader'},
      //     {
      //       loader: 'css-loader',
      //       query: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     }
      //   ])
      // }
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