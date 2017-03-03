'use strict';
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  target: "electron",
  context: resolve(__dirname, "src"),
  node: {
    __filename: false,
    __dirname: false
  },
  entry: {
    "main.js": "./main.js",
    "index.js": "./index.js"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
