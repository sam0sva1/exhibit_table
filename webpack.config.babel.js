import path from 'path';

export default {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
  resolve: {
      alias: {
          Data: path.resolve(__dirname, 'data/'),
          Tools: path.resolve(__dirname, 'tools/'),
      }
  }
};
