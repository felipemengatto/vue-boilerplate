var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, './dist'),
		chunkFilename: '[name].js',
		filename: 'build.js'
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'build.dependencies',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		noParse: [/moment.js/],
		rules: [
			{
			    test: /\.(scss|css)$/,
			    use: [
			        MiniCssExtractPlugin.loader,
			        {
			            loader: 'css-loader',
			            options: {
			                minimize: {
			                    safe: true
			                }
			            }
			        },
			        {
			            loader: 'sass-loader',
			            options: {}
			        }
			    ]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
	            options: {
	                presets: ['es2017', 'stage-3', 'env'],
	                plugins: ['transform-runtime']
	            },
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
    watchOptions: {
        poll: true
    },
    performance: {
        hints: false
    },
    devtool: 'source-map'
};
