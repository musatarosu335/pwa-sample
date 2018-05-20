const path = require('path');
// const MODE = 'development';
// const enableSourceMap = (MODE === 'development');

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
];
