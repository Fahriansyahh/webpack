const path = require('path');

//!config lewat script
// mode watch atau auto build
//     "build": "webpack --watch"
//! membuat folder data dan membuat file index.js
//"build":"webpack -o /data --output-filename index.js"

module.exports = {
    //untuk menentukan mode production atau development dll
    mode: 'development',
    // tujuan file
    entry: './src/index.js',
    output: {
        //folder
        path: path.resolve(__dirname, 'webpack'),
        //file
        filename: 'script.js',
    },
    watch: true,
    devtool: false
};