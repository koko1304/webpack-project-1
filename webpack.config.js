const path = require('path');

const config = {
	// Required root of your app
	entry: './src/index.js',
	// Specify where to output your final file and file name
	output: {
		// where do you want to output your file
		// Note: required absolute file path reference
		// path.resolve will guarantee your file path will work on all operation system
		path: path.resolve(__dirname, 'build'),
		// Specify your final file name
		filename: 'bundle.js',
		// Specify where the output files live
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				// Compile only the file with .js extension
				test: /\.js$/,
				// Telling babel not to compile file in node_modules folder
				exclude: /node_modules/,
				use: {
					// Tell webpack to allow babel to work with our code
					loader: 'babel-loader',
					options: {
						// Tell babel we want you to compile es6 es7 es8 code ... to es5 code
						presets: ['babel-preset-env']
					}
				}
			}
		]
	}
};

module.exports = config;