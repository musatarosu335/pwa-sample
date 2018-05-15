const path = require('path');
// const MODE = 'development';
// const enableSourceMap = (MODE === 'development');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicDir = path.join(__dirname, '/public');
module.exports = [
  {
    // mode: 'development',
    entry: [
      'babel-polyfill',
      './src/index.jsx',
    ],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', { modules: false }],
                  'react',
                ],
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir,
    },
    // devtool: '#inline-source-map',
  },
  {
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [{ loader: 'css-loader', options: { url: false } }, 'sass-loader'],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
