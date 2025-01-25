const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  target: ['web', 'es2020'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
            {
              loader: 'html-loader',
              options: {
                sources: {
                  list: [
                    { tag: 'img', attribute: 'src', type: 'src' },
                    { tag: 'div', attribute: 'style', type: 'src' }, // Для inline background-image
                  ],
                },
              },
            },
          ],

      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][hash][ext]',
        },
      },
      {
        test: /\.(mp3|wav|ogg)$/, // Поддерживаемые форматы
        use: [
            {
              loader: 'file-loader',
              options: {
                name: 'audio/[name].[hash].[ext]', // Указывает папку и формат имени файла
                outputPath: 'assets/audio', // Указывает папку для аудиофайлов
              },
            },
          ],
       },    
         {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]',
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
            targets: "defaults",
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 9000,
  },
};
