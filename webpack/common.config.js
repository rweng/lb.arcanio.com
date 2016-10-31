const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const helpers = require('./helpers');

module.exports = {
    entry: {
        app: './src/index.ts',
        vendor: './src/vendor.js'
    },

    resolve: {
        extensions: ['', '.js', '.json', '.ts'],

        // Make sure root is src
        root: helpers.root('src'),

        // remove other default values
        modulesDirectories: ['node_modules']
    },

    module: {

        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader?forkChecker=true'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url?limit=150000&name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            }
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'APP_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        // see https://github.com/AngularClass/angular2-webpack-starter/issues/993
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new ForkCheckerPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
