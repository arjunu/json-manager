var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var base = require('./webpack.base.config');

module.exports = {
    target: "electron",
    devtool: 'source-map',
    entry: [
        'whatwg-fetch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};