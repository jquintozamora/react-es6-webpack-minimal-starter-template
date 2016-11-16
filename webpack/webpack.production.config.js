const path = require('path');
const webpack = require('webpack');

console.log("Executing webpack.production.config.js...");

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
  devtool: 'source-map', 
  entry: [
        './app/src/index.jsx'
  ],
  output: {
    path: outputPath,
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel'], // 'babel-loader' is also a valid name to reference
        exclude: [/node_modules/, /styles/],
        include: loadersInclude
      }
    ]
  }
};

//console.log(webpackConfig);
console.log("Executed webpack.production.config.js...");
console.log(" ");

module.exports = webpackConfig;