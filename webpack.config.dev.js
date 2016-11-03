const path = require('path');
const webpack = require('webpack');

console.log("Executing webpack.config.js...");


////////////////////////////////////////////////
// Define Path variables
////////////////////////////////////////////////
console.log("PATH VARIABLES:");
var outputPath = path.join(__dirname, './dist');
var loadersInclude = path.resolve(__dirname, './src');
console.log("__dirname: " + __dirname);
console.log("outputPath: " + outputPath);
console.log("loadersInclude: " + loadersInclude);


////////////////////////////////////////////////
// Define WebPack Config
////////////////////////////////////////////////
var webpackConfig = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-eval-source-map', 
  entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server', //doesn’t reload the browser upon syntax errors, 'webpack/hot/dev-server' does!
        './src/index.js'
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // recommended by webpack
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'], // 'babel-loader' is also a valid name to reference
        exclude: [/node_modules/, /styles/],
        include: loadersInclude
      }
    ]
  }
};

//console.log(webpackConfig);
console.log("Executed webpack.config.js...");
console.log(" ");

module.exports = webpackConfig;