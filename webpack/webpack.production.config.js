const path = require('path');
const webpack = require('webpack');

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
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },

    }),
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
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        include: path.resolve(__dirname, './../app/stylesheets')
      }
    ]
  }
};