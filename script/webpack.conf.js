const webpack = require('webpack');
const path = require('path');

const pkg = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.name}`, // 如果设置了，将包导出为库。 output.library 就是库的名字。
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;