let path = require('path');
let webpack = require('webpack');


console.log("Executing webpack.config.js...");


////////////////////////////////////////////////
// Define Path variables
////////////////////////////////////////////////
const outputPath = path.join(__dirname, './../dist');
const loadersInclude = path.resolve(__dirname, './../app/src');
console.log("PATH VARIABLES:");
console.log("__dirname: " + __dirname);
console.log("outputPath: " + outputPath);
console.log("loadersInclude: " + loadersInclude);

////////////////////////////////////////////////
// Define WebPack Config
////////////////////////////////////////////////
let webpackConfig = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-eval-source-map', 
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
console.log("Executed webpack.config.js...");
console.log(" ");

module.exports = webpackConfig;