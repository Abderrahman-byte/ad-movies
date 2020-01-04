const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        jquery: "./src/js/vendor.js",
        main: "./src/js/index.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: "./index.html"
    })],

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
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath : "img"
                    }
                }
            }  
        ]
    }
};