const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader", 
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: true,
                        }
                    }, 
                    "sass-loader"
                ]
            }
        ]
    }
})