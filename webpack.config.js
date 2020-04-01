const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
                template: './app/index.html'
            }
        )
    ]
};
