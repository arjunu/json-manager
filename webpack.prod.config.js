var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var base = require('./webpack.base.config');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/__build__',
        filename: 'app.js',
        publicPath: '/'
    },

    module: {
        loaders: base.loaders,
        include: path.join(__dirname, 'src')
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {warnings: false},
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        // new HtmlWebpackPlugin({
        //     template: 'index.html',
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeRedundantAttributes: true,
        //         useShortDoctype: true,
        //         removeEmptyAttributes: true,
        //         removeStyleLinkTypeAttributes: true,
        //         keepClosingSlash: true,
        //         minifyJS: true,
        //         minifyCSS: true,
        //         minifyURLs: true
        //     },
        //     inject: true
        // }),
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            {from: 'index.html', to: ''},
            {from: 'main.js', to: ''},
            {from: 'package.json', to: ''},
        ], {
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};