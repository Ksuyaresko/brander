'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var path = require('path');
var joinPath = require('path.join');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const BowerWebpackPlugin = require("bower-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    devtool: 'source-map',
    context: __dirname,

    entry: {
        app: './frontend/app',
        new: './frontend/new',
        /*
        style: [
            path.join(__dirname, 'frontend', 'styles', 'imports')
        ],
        */

    },

    output: {
        path:     __dirname + '/public/',
        publicPath: '/',  //   /js/app.js
        filename: "[name].js"
    },


    watch: NODE_ENV == 'development',
    /*
    watchOptions: {
        aggregateTimeout: 100
    },
    

    plugins: [
        new webpack.NoErrorsPlugin()
    ],
     */

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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader"),
            },
            {
                test: /\.(ttf|eot|otf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            /*
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=1024&name=images/[name].[ext]'
            },*/
            {
                test: /\.twig$/, 
                loader: "twig",
                include: [
                    __dirname + '/frontend/MainPage',
                    __dirname + '/frontend/NewPage',
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
    postcss: function () {
        return {
            defaults: [autoprefixer, precss],
            cleaner:  [autoprefixer({ browsers: ['IE 10', 'IE 11', 'firefox 20', 'ios_saf 8.4', 'android 4.3'] })]
        };
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, '/frontend/images'),
        attrs: ['img:src', 'link:href']
    },

    plugins: [

        new ExtractTextPlugin('style.css', {
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
            port: 8080,
            server: { baseDir: ['public'] }
        }),
        new webpack.ProvidePlugin({
        "window.jQuery": "jquery",
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'view', 'layout.twig'),
            //inject: 'body',
            hash: true,
            filename: 'index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'view', 'layout.twig'),
            //inject: 'body',
            hash: true,
            filename: 'new.html',
            chunks: ['new']
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
