/////////////////////////////////////////////////////////
//  WebPack dev settings
/////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
/////////////////////////////////////////////////////////

const commonPaths = require("./common-paths");
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
// In development, this will be an empty string.
const publicUrl = '';

module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'inline-source-map',
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
    },
    devServer: {
        // All options here: https://webpack.js.org/configuration/dev-server/

        hot: true, // enable HMR on the server
        contentBase: commonPaths.contentBasePath, // match the output path
        publicPath: '/', // match the output `publicPath`
        //host:"0.0.0.0", // Enable to integrate with Docker
        port: 3000,
        historyApiFallback: true,
        // All the stats options here: https://webpack.js.org/configuration/stats/
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    },
    plugins: [

        // Makes some environment variables available in index.html.
        // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
        // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        // In development, this will be an empty string.
        new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl
        }),

        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: commonPaths.contentBasePath + '/index.html',
        }),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        // loaders -> rules in webpack 2
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                include: commonPaths.srcPath          // Use include instead exclude to improve the build performance
            },
            {
                test: /\.scss$/i,
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
                ],
                include: commonPaths.stylesheetsPath  // Use include instead exclude to improve the build performance
            }

        ]
    }
};
