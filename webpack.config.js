const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './main.ts',
    output: {
        filename: 'simpleapp.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html'
        })
    ]
};
