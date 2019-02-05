const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "out.js",
		library: "out",
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{ loader: "ts-loader" }
				]
			},
		]
	},
	watchOptions: {
		ignored: /node_modules/
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*.*'], { exclude: [ '.gitkeep'] }),
	],
}