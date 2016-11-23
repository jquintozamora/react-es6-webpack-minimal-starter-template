///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack Development Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  More webpack examples: https://github.com/webpack/webpack/tree/master/examples
//
///////////////////////////////////////////////////////////////////////////////////////////////////

let path = require('path');
let webpack = require('webpack');

module.exports = {
  
  // Best way to learn all webpack options: https://github.com/webpack/webpack/blob/v1.13.3/lib/WebpackOptionsApply.js
  
  // Use target = web to optimize the bundle for web sites
  target: 'web',  

  // Use devtool to enhance the debugging process. 
  //    More info: https://webpack.js.org/configuration/devtool/ 
  //               and https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'cheap-module-eval-source-map',    

  defineDebug: true,
  debug: true,
  entry: {
    'app': [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server', //doesn’t reload the browser upon syntax errors, 'webpack/hot/dev-server' does!
        './app/src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // See full list: https://github.com/webpack/docs/wiki/list-of-plugins

    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
      * When there are errors while compiling this plugin skips the emitting phase (and recording phase), 
      * so there are no assets emitted that include errors. The emitted flag in the stats is false for all assets. 
      * If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin. 
      * If you want webpack to "fail" when using the CLI, please check out the bail option
      */
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',                                   // Use loader instead loaders to be compatible with the next version, webpack 2
        include: path.resolve(__dirname, './../app/src')          // Use include instead exclude to improve the build performance
      },
      { 
        test: /\.scss$/i,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        include: path.resolve(__dirname, './../app/stylesheets')  // Use include instead exclude to improve the build performance
      }
        
    ]
  }
};
