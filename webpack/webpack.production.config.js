const path = require('path');
const webpack = require('webpack');

////////////////////////////////////////////////
// Define Path variables
////////////////////////////////////////////////
//console.log("PATH VARIABLES:");
let outputPath = path.join(__dirname, './../dist');
let loadersInclude = path.resolve(__dirname, './../app/src');
//console.log("__dirname: " + __dirname);
//console.log("outputPath: " + outputPath);
//console.log("loadersInclude: " + loadersInclude);

////////////////////////////////////////////////
// Define WebPack Config
////////////////////////////////////////////////
let webpackConfig = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  entry: {
    'app': [
      './app/src/index.jsx'
    ]
  },
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
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }),
    new webpack.optimize.AggressiveMergingPlugin()
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