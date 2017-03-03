'use strict';
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    index: './index.js'
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
