const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = {
    //untuk menentukan mode production atau development dll
    // tujuan file
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        main: {
            import: './src/main.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
        lodashh: "./src/lodash.js"
    }, optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }, {
                test: /\.html$/i,
                loader: "html-loader",
            }, {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource'
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    devtool: false
};