///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 Development Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  WebPack 2 Migrating guide: https://webpack.js.org/guides/migrating/
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {

  // Best way to learn all webpack options: https://github.com/webpack/webpack/blob/v1.13.3/lib/WebpackOptionsApply.js

  // Use target = web to optimize the bundle for web sites
  target: 'web',

  // Use devtool to enhance the debugging process. 
  //    More info: https://webpack.js.org/configuration/devtool/ 
  //               and https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'inline-source-map',
  entry: {
    'bundle': [
      // activate HMR for React
      'react-hot-loader/patch',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint   
      'webpack-dev-server/client?http://localhost:3000',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      // Our app main entry            
      './app/src/index.jsx'
    ]
  },
  output: {
    path: resolve(__dirname, './../dist'),
    filename: '[name].js',
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },

  devServer: {
    // All options here: https://webpack.js.org/configuration/dev-server/

    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, '../dist'),
    // match the output `publicPath`
    publicPath: '/',

    port: 3000,

    historyApiFallback: true,

    // All the stats options here: https://webpack.js.org/configuration/stats/
    stats: {
      colors: true, // color is life
      chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
      'errors-only': true
    }
  },

  context: resolve(__dirname, '../'),

  plugins: [
    // See full list: https://github.com/webpack/docs/wiki/list-of-plugins

    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ],
  module: {
    // loaders -> rules in webpack 2
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',                                   // Use loader instead loaders to be compatible with the next version, webpack 2
        include: resolve(__dirname, './../app/src')          // Use include instead exclude to improve the build performance
      },
      {
        test: /\.scss$/i,
        include: resolve(__dirname, './../app/stylesheets'),  // Use include instead exclude to improve the build performance
        use: [
          {
            loader: 'style-loader'
          },
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
            }
          }
        ]
      }
    ]
  }
};
