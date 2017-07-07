///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 STATS Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
// REMEMBER UPLOAD YOUR stats.json to http://webpack.github.io/analyse/
// IMPORTANT. If you use console.log in this file, the stats.json will not work...
// TODO. Include fileDateTime in stats.json as well.
//
///////////////////////////////////////////////////////////////////////////////////////////////////

var Visualizer = require('webpack-visualizer-plugin');

////////////////////////////////////////////////
// File name for Visualizer
////////////////////////////////////////////////
var currentDateTime = new Date();
var currentDate = currentDateTime.toLocaleDateString('en-GB').replace(/\//g, "-");
var currentTime = currentDateTime.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, "-");
var fileDateTime = currentDate + "-" + currentTime;
var statisticsFileName = '../webpack/stats/statistics-' + fileDateTime + '.html';

const prodConfig = require('./webpack.production.config');
prodConfig.plugins = prodConfig.plugins.concat(
    new Visualizer({
        filename: statisticsFileName
    }));
module.exports = prodConfig;