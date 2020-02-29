const {resolve} = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

require('./resources/database');

module.exports = {
    mode: 'development',
    entry: {
        index: './index'
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    context: resolve(__dirname, './src'),
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Tarkov REST API'
        }),
        new CleanWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(false),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};