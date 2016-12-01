'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var path = require('path');
var joinPath = require('path.join');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginSCSS = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const lost = require('lost');
var color = require("postcss-color");
var rucksack = require('rucksack-css');
var colorFunction     = require("postcss-color-function");
const BowerWebpackPlugin = require("bower-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cleanUrls = require("clean-urls");




module.exports = {
    devtool: 'source-map',
    context: __dirname,

    entry: {
        main: './frontend/main'
    },

    output: {
        path:     __dirname + '/public/',
        publicPath: '/',  //   /js/app.js
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js']
    },
/*
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates:    ['*-loader', '*'],
        extensions:         ['', '.js']
    },
*/
    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            /*
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
            },
             */
            {
                test: /\.scss$/,
                include:  path.resolve( __dirname, 'frontend', 'styles'),
                loader: ExtractTextPluginSCSS.extract("style-loader", "css-loader!postcss-loader!sass-loader"),
            },
            {
                test: /\.css$/,
                include:  path.resolve( __dirname, 'frontend', 'styles', 'imports'),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader"),
            },
            {
                test: /\.(ttf|eot|otf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.twig$/, 
                loader: "twig",
                include: [
                    __dirname + '/frontend/MainPage',
                    __dirname + '/frontend/',
                    __dirname + '/view',
                    ],
            },
            { test: /\.json$/, 
                loader: "json-loader" }
            
        ]
    },
    node: {
        fs: "empty" // avoids error messages 
    },
    
    postcss: function (webpack) {
        return {
            defaults: [autoprefixer, precss, lost],
            cleaner:  [autoprefixer({ browsers: ['IE 10', 'IE 11', 'firefox 20', 'ios_saf 8.4', 'android 4.3'] })],
        };
    },
    
    
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, '/frontend/images'),
        attrs: ['img:src', 'link:href']
    },

    plugins: [

        new ExtractTextPluginSCSS('style.css', {
            allChunks: true
        }),

        new ExtractTextPlugin('main.css', {
            allChunks: true
        }),

        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            includes: /.*/,
            excludes: /.*\.less$/
        }),

        new CopyWebpackPlugin([
            { from: 'frontend/images', to: '../public/images' }
        ]),

        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'],
            },
            middleware: function(req,res,next) {
                if (req.url === '/') {
                    req.url = '/index.html';
                } else if (req.url === '/new') {
                    req.url = '/new.html';
                } else if (req.url === '/brander') {
                    req.url = '/brander.html';
                }
                return next();
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            minChunks: 2
        }),

        new webpack.ProvidePlugin({
        "window.jQuery": "jquery",
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'view', 'layout.twig'),
            //inject: 'body',
            hash: true,
            filename: 'index.html',
            chunks: ['common', 'main']
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'view', 'layout.twig'),
            //inject: 'body',
            hash: true,
            filename: 'brander.html',
            chunks: ['common', 'main']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'view', 'layout.twig'),
            //inject: 'body',
            hash: true,
            filename: 'new.html',
            chunks: ['common', 'main']
        }),

],
/*
   sassLoader: {
      includePaths: [path.resolve(__dirname, "./public")],
       sourceMap: true
    }
*/

};


if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}
