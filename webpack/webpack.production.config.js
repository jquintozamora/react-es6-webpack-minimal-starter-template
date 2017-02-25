///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 PROD Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  WebPack 2 Migrating guide: https://webpack.js.org/guides/migrating/
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  target: 'web',
  entry: {
    'bundle': [
      './app/src/index.jsx'
    ]
  },
  context: resolve(__dirname, '../'),
  output: {
    path: resolve(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
      },
      'DEBUG': false,                                 // Doesn´t have effect on my example
      '__DEVTOOLS__': false                           // Doesn´t have effect on my example
    }),
    new ExtractTextPlugin({
      filename: '../dist/main.css',
      allChunks: true
    }),

    // Plugings for optimizing size and performance.
    // Here you have all the available by now: 
    //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
    //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        global_defs: {
          __REACT_HOT_LOADER__: undefined // eslint-disable-line no-undefined
        }
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },

    }),
    // Included by default in webpack 2
    // new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    // loaders -> rules in webpack 2
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',                           // User loader instead loader for compatiblity with next WebPack 2
        include: resolve(__dirname, './../app/src')  // Use include instead exclude to improve build performance
      },
      {
        test: /\.scss$/i,
        include: resolve(__dirname, '../app/stylesheets'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              },
            }
          ]
        })
      }
    ]
  }
};