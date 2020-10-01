const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const dotEnvPlugin = require('./webpackDotenvPlugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(web.js|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    dotEnvPlugin(),
    new HtmlWebPackPlugin({
      title: 'zxsvm',
      template: 'cfg/index.hbs',
    }),
  ],
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: `${__dirname}/../public`,
    filename: 'i.js',
  },
}
