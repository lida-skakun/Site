var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './js/index.jsx'
    ],
        module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ "babel" ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path:'.',
        publicPath: '/',
        filename: 'bundle.js'
    }
};
