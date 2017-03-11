'use strict';
const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target: "electron",
  context: resolve(__dirname, "src"),
  node: {
    __filename: false,
    __dirname: false
  },
  entry: [
    "./main.js",
    "./index.js",
    "./index.scss",
    "./index.html"
  ],
  output: {
    path: resolve(__dirname, "app"),
    filename: "index.js",
    publicPath: "http://localhost:8080/assets/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
          /main\.js/
        ],
        loader: "babel-loader"
      },
      {
        test: /main\.js/,
        use: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file-loader"
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ]
}
