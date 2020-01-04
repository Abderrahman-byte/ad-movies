const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry :{
        jquery: "./src/js/vendor.js",
        polyfill: "babel-polyfill",
        main: "./src/js/index.js"
    },
    output: {
        filename: "[name].bundle.[contentHash].js",
        path: path.resolve(__dirname, "build")
    },

    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin(), new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
            }
        })]
    },

    plugins: [ 
        new miniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },      
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"]
                  }
                }
            }, 
            {
                test: /\.s[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|jpg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options:{ 
                        name: "[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            } 
        ]
    }
};