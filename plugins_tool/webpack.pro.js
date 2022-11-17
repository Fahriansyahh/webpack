const path = require('path');
const { merge } = require('webpack-merge');
const config = require("./webpack.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = merge(config, {
    //untuk menentukan mode production atau development dll
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
    }
    )],
    mode: 'production',
    // tujuan file
    output: {
        //folder
        path: path.resolve(__dirname, 'webpack'),
        //file
        filename: 'script.[contenthash].js',
        clean: true,
        assetModuleFilename: "img/name.[hash][ext]"
    },

});