var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.config.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    debug: true,
    devtool: 'source-map', 

    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    devServer: {
        contentBase: "./dist",
        port: 8080,
        historyApiFallback: true,

        // see https://github.com/webpack/docs/wiki/node.js-api (and https://webpack.github.io/docs/cli.html#profiling)
        stats: {
            context: false,
            hash: false,
            version: false,
            assets: true,
            chunks: false,
            reasons: false,
            timings: true,
            modules: false,
            cached: false,
            errorDetails: true,
            children: false
        }
    }
});
