const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'BASE_URL': JSON.stringify(''),
        }),
    ],
});