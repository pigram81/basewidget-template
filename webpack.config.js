const path = require('path');

module.exports = {
    entry: {
        basewidget: './src/widgets/basewidget/basewidget.js',
        basewidget_styling: './src/widgets/basewidget/basewidget_styling.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            }
        ]
    },
    mode: 'production'
};