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
                loaders: [ "babel" ],
            },
            {
                test: /\.(jpg|png)$/,
  loader: 'url?limit=25000',
 
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
