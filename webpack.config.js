var path = require('path');

module.exports = {
    mode: 'development',

    entry: ['react-hot-loader/patch', './src/index.js'] ,

    output: {
        path: path.join(__dirname + '/public/'),
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        host: 'localhost',
        port: 4000,
        static: path.join(__dirname + '/public/'),
    },

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["react-hot-loader/babel"]
                    }
                }
            }
        ]
    },

    plugins: [
    ]
};