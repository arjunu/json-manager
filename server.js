var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {colors: true}
}).listen(8090, "0.0.0.0", function (err) {
    if (err)
        console.log(err);
    console.log('Listening at localhost:8090');
});