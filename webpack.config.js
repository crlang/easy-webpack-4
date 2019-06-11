require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apis = require('./src/js/api');
// test you proxy url
const CrossDomainURL = apis.CrossDomainURL;

// setting webpack config
const config = {
  target: "web",
  devtool: "#source-map", // output mode
  entry: {// multiple entry
    index: ["babel-polyfill","./src/index.js"],
    utils: "./src/js/utils.js"
  },
  output: {// output config
    filename: './js/[name].js',
    chunkFilename: './js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  stats: {
    entrypoints: false,
    children: false
  },
  module: {
    rules: [{// loader js
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{// loader sass and css
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ],
    }, {
      test: /\.(jpg|png|ico|jpeg|gif)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "../images/",
          outputPath: "images/"
        }
      }]
    }, {
      test: /\.(eot|svg|ttf|woff)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "../fonts/",
          outputPath: "fonts/"
        }
      }]
    }]
  },
  devServer: {// location:8088 test
    port: 8088,
    overlay: {
      error: true
    },
    proxy: {// agent cross-domain interface
      "/api": {
        target: CrossDomainURL,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    hot: true,// hot loading
    clientLogLevel: "none", // cancel console client log
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      hash: true,
      inject: true,
      favicon: './favicon.ico',
      title: 'easy-webpack-4'
    }),
  ]
};

module.exports = config;