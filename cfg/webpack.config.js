const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'zxsvm',
            template: 'cfg/index.hbs'
        })
    ],
    entry: path.resolve(__dirname, "../index.js"),
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
};