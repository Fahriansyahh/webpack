const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = merge(config, {
    //untuk menentukan mode production atau development dll
    mode: 'development',
    // tujuan file
    output: {
        //folder
        path: path.resolve(__dirname, 'webpack'),
        //file
        filename: '[name].js',
        clean: true,
        assetModuleFilename: "img/[name][ext]"


    }, optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),
        ], minimize: true,
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.css"
    })], devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        liveReload: true

    },
});