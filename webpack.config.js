const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const entryFiles = ['script'];
// const entry = {};

// entryFiles.forEach((value, index) => {
//   entry[value] = path.resolve(__dirname, `src/js/${value}.js`);
// });

module.exports = {
  mode: 'development',
  entry: {
    script: path.resolve(__dirname, `src/js/script.js`),
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    // publicPath: '/public/',
    filename: '[name].js',
  },
  // resolve: {
  //   alias: {
  //     '@modules': path.resolve(__dirname, 'src/js/modules'),
  //   },
  // },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       exclude: /node_modules/,
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
