const path = require('path');
const { merge } = require('webpack-merge');
const config = require("./webpack.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(config, {
    //untuk menentukan mode production atau development dll
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
    }
    )],
    mode: 'development',
    // tujuan file
    output: {
        //folder
        path: path.resolve(__dirname, 'webpack'),
        //file
        filename: 'script.js',
        clean: true,
        assetModuleFilename: "img/[name][ext]"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        liveReload: true,
    },
});