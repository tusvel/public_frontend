const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin()
	],
}