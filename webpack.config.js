const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './app/app.js',
    output: {filename: 'my-first-webpack.bundle.js', path: path.resolve(__dirname, 'dist')},
    module: {rules: [{test: /\.(html)$/, use: 'html-loader'}]},
    plugins: [new HtmlWebpackPlugin({template: './app/index.html'})]
};
