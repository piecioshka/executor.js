module.exports = {
    resolve: {
        extensions: ['.es6.js', '.js', '']
    },
    entry: './lib/scripts/main',
    output: {
        filename: 'executor.js',
        path: './dist'
    },
    module: {
        noParse: [
            /ace-builds/
        ],
        preLoaders: [
            {
                test: /\.es6\.js/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.json/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.es6\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            }
        ]
    }
};
