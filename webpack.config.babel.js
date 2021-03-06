import path from 'path'

export default {
    devtool: 'eval',
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: __dirname,
            },
            {
                test: /(\.sss|\.css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            parser: 'sugarss',
                            plugins: [
                                require('autoprefixer'),
                                require('postcss-nested')
                            ]
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            actions: path.resolve(__dirname, 'src/actions'),
            Data: path.resolve(__dirname, 'data/'),
            Tools: path.resolve(__dirname, 'tools/'),
        }
    }
}
