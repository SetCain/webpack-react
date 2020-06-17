const path = require('path')

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // .babelrc
            },
        ],
    },

    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'src')
    },
}
