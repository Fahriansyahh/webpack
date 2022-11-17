const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = {
    //untuk menentukan mode production atau development dll
    // tujuan file
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    devtool: false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.html$/i,
                loader: "html-loader",
            }, {
                test: /\.(png|jpg|gif|svg|jpe?g)$/i,
                type: 'asset/resource'
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};