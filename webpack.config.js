/**
 * Created by blake on 4/17/16.
 */
var rucksack = require('rucksack-css')
var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
        html: './index.html',
        other: ['./other.js'],
        vendor: ['ramda', 'moment'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        //publicPath: "./assets/",
        filename: '[name].bundle.js',
        library: "Foo"
    },
    externals: {
        //外部引用类库
        "$": "$"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            //{
            //    test: /\.scss$/,
            //    include: /style/,
            //    loaders: ['style-loader',
            //        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            //        'postcss-loader',
            //        'sass-loader']
            //},
            {
                test: /\.css$/,
                include: /style/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=assets/[name][hash:8].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [
        rucksack({
            autoprefixer: true
        })
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

        new webpack.ProvidePlugin({
            is: "is_js",
            //moment: 'moment'
        })
        //    我需要自己写一个插件,可以暴露出组件到window下
        ,
        new webpack.DefinePlugin({
            __DEV__: process.env.DEBUG || 'false'
        })
    ],
    devServer: {
        contentBase: './src',
        hot: true
    },
    //devtool: 'source-map'
}