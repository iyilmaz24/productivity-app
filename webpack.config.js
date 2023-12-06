const path = require('path');
const HtmlPlugIn = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlPlugIn({
      title: 'TaskBrew',
      filename: 'index.html',
      inject: 'head',
      template: './src/template.html',
      favicon: 'src/resources/svg/coffee-pot-svgrepo-com.svg',
    }),
  ],
};