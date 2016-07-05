const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';
const NODEMODULES = path.resolve(__dirname, 'node_modules');

const config = {
   entry: path.resolve(__dirname, 'src/main.js'),
	
   output: {
      path:'./',
      filename: path.resolve(__dirname, 'src/index.js'),
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: NODEMODULES,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;