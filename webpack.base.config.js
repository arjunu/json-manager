module.exports = {
    loaders: [
        {
            test: /\.(ttf|eot|otf|svg|png|gif|woff2|jpeg(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        },
        {
            test: [/global.css/, /flaticon.css/],
            loader: 'style!css-loader'
        },
        {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ["react-hot-loader/babel"]
            }
        }
    ]
};