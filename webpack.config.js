const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

require('./resources/database');

module.exports = {
    mode: 'development',
    entry: {
        database: './database/database.js',
        schema: './database/schema.js'
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    context: resolve(__dirname, './src'),
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Tarkov REST API'
        }),
        new CleanWebpackPlugin()
    ],
    externals: 'this mongoose'
};