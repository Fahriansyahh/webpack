const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
//!pengunaan minimizeer
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = merge(config, {
    //untuk menentukan mode production atau development dll
    mode: 'production',
    // tujuan file
    output: {
        //folder
        path: path.resolve(__dirname, 'webpack'),
        //file
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: "img/[name]-[hash][ext]"
    }, optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(), new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            // Your options for `sharp`
                            // https://sharp.pixelplumbing.com/api-output
                        },
                    },
                },
            }),
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.[contenthash].css"
    })],
});