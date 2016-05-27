const webpack = require('webpack');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const PATHS = {
    react: path.join(__dirname, 'node_modules/react/dist/react.min.js'),
    app: path.join(__dirname, 'src'),
    // build: path.join(__dirname, '../assets/mapjourney/dist'),
    build: path.join(__dirname, './dist')
};

module.exports = {
    entry: {
        jsx: './src/index.jsx',
        // html: './index.html'
    },
    output: {
        path: PATHS.build,
        filename: 'app.bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: ['node_modules'],
        alias: {
            leaflet_css: __dirname + '/node_modules/leaflet/dist/leaflet.css',
            normalize_css: __dirname + '/node_modules/normalize.css/normalize.css',
            main_css: __dirname + '/src/style/main.css'
        }
    },
    module: {
        preLoaders: [

            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // {
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   loader: 'jshint-loader'

            // }
        ],
        loaders: [

            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets=es2015'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules!sass'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png$/, loader: "url-loader?limit=100000"},
            {test: /\.jpg$/, loader: "file-loader"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets=es2015']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new NpmInstallPlugin({
            save: true // --save
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new WebpackShellPlugin({
            onBuildStart:['echo "Webpack Start"'],
            onBuildEnd:['cp ./dist/app.bundle.js ../assets/dist/app.bundle.js']
        })
    ],
    devServer: {
        colors: true,
        contentBase: __dirname,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8081,
        progress: true,
        stats: {
            cached: false
        }
    }
}