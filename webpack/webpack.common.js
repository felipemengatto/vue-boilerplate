const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');

const APLICATION_NAME = 'example';
const pathFolderApplication = path.resolve(__dirname, '../src');
const pathNodeModules = path.resolve(__dirname, '../node_modules');
const pathDistProduction = path.resolve(__dirname, '../dist');

module.exports = merge(baseWebpackConfig, {
    entry: path.resolve('ModuleApp.js'),
    output: {
        path: pathDistProduction,
        filename: `${APLICATION_NAME}.min.js`
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: `${APLICATION_NAME}.dependencies.min`,
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${APLICATION_NAME}.min.css`
        }),
    ],
    resolve: {
        modules: [
            pathNodeModules
        ],
        alias: {
            '@': path.resolve(pathFolderApplication),
            '@components': path.resolve(pathFolderApplication, 'components'),
            '@containers': path.resolve(pathFolderApplication, 'containers'),
            '@pages': path.resolve(pathFolderApplication, 'pages'),
            '@services': path.resolve(pathFolderApplication, 'services'),
            '@store': path.resolve(pathFolderApplication, 'store'),
            '@storeModules': path.resolve(pathFolderApplication, 'store/modules'),
        }
    }
});