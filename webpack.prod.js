const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    
    output: {
        filename: "[name].bundle.[contentHash].js",
        path: path.resolve(__dirname, "build")
    },

    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin(), new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/favicon.ico",
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
                use: "babel-loader"
            }, 
            {
                test: /\.s[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ]
            }
        ]
    }
})
