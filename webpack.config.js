const path = require('path');
module.exports={
    entry: path.join(__dirname, './src/lib/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename:'vue-toast-demo.js',
        libraryTarget: 'umd',
        library:'VueToastDemo'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
    ]
}