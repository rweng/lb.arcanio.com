var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var OfflinePlugin = require('offline-plugin');
var commonConfig = require('./common.config.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),

    // disabled, see https://github.com/webpack/webpack/issues/2644
    // new webpack.optimize.DedupePlugin(),

    new OfflinePlugin({
      ServiceWorker: {
        navigateFallbackURL: '/'
      },

      // disable appcache since 
      // 1. it is deprecated and 
      // 2. we would change cache control of the manifest files to no-cache.  
      AppCache: false
    })
  ]
});
