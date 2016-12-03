const webpack = require('webpack');
module.exports = {
	entry: [
		, "./src/app.js"
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: "babel"
				, query:{presets:['es2015']}
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: "style!css"
			}
			, {
				test: /\.html$/
				, loader: "html"
			}
			,
		  { test: /\.(png|jpg|svg|pdf|jpeg)$/
				, loader: "url-loader?limit<900000"
			}
		]
	}
	, resolve: {
		extensions: [ "", ".js", ]
	}
	, output: {
		path: __dirname + "/dist"
		, filename: "bundle.js"
	}
	, devServer: {
		contentBase: "./"
	}
};
