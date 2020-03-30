const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		
	},
	devServer: {
		port: 8085
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader'],
				
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader'],
				
			},
			
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './about.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'services.html',
			template: './services.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'comments.html',
			template: './comments.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'contacts.html',
			template: './contacts.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'describe.html',
			template: './describe.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'partners.html',
			template: './partners.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'gallery.html',
			template: './gallery.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'posts.html',
			template: './posts.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'basket.html',
			template: './basket.html'
		}),
		new HtmlWebpackPlugin({
			filename: '404.html',
			template: './404.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'catalog.html',
			template: './catalog.html'
		}),
		new CleanWebpackPlugin()
	]
};