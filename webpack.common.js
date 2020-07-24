module.exports = {
    entry: {
        vendor: "./src/js/vendor.js",
        main: "./src/js/index.js",
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[hash].[ext]",
                        outputPath : "img"
                    }
                }
            }  
        ]
    },
};