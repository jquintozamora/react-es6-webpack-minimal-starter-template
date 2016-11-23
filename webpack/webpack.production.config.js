const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

////////////////////////////////////////////////
// Define WebPack Config
////////////////////////////////////////////////
module.exports = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  entry: {
    'app': [
      './app/src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
      },
      'DEBUG': false,                                 // Doesn´t have effect on my example
      '__DEVTOOLS__': false                           // Doesn´t have effect on my example
    }),
    new ExtractTextPlugin('../dist/main.css', {
      allChunks: true
    }),

    // Plugings for optimizing size and performance.
    // Here you have all the available by now: 
    //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
    //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
    new webpack.optimize.DedupePlugin(),
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',                           // User loader instead loader for compatiblity with next WebPack 2
        include: path.resolve(__dirname, './../app/src')  // Use include instead exclude to improve build performance
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract("style", "css!sass"),
        include: path.resolve(__dirname, '../app/stylesheets'),
      }
    ]
  }
};