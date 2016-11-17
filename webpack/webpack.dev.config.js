let path = require('path');
let webpack = require('webpack');

////////////////////////////////////////////////
// Define Path variables
////////////////////////////////////////////////
const outputPath = path.join(__dirname, './../dist');
const loadersInclude = path.resolve(__dirname, './../app/src');
//console.log("PATH VARIABLES:");
//console.log("__dirname: " + __dirname);
//console.log("outputPath: " + outputPath);
//console.log("loadersInclude: " + loadersInclude);

////////////////////////////////////////////////
// Define WebPack Config
////////////////////////////////////////////////
let webpackConfig = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map', 
  entry: {
    'app': [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server', //doesn’t reload the browser upon syntax errors, 'webpack/hot/dev-server' does!
        './app/src/index.jsx'
    ]
  },
  output: {
    path: outputPath,
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
        loaders: ['babel'], // 'babel-loader' is also a valid name to reference
        exclude: [/node_modules/, /styles/],
        include: loadersInclude
      },
      { 
        test: /\.scss$/i,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
        
    ]
  }
};

//console.log(webpackConfig);
module.exports = webpackConfig;