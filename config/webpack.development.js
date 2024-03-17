/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(CommonConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
        files: ['public', '_src'],
        snippetOptions: {
          rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
              return snippet + match;
            }
          }
        },
        open: false
      },
      {
        reload: false,
        injectCss: true,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
