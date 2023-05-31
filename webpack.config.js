/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;


function setupDevtool() {
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        // регулярное выражения с форматами каких файлов будет работать лоадер (перерабатывает  файлы одного типа  в другие)
        // все файлы этих форматов будут обрабатьваться ts-loader
        // необходим tsconfig для ts-loader
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      // вариант с единым файлом CSS на выходе, не МОДУЛИ! тогда нужен MiniCssExtractPlugin
      // {
      //   test: /\.css$/,
      //   use: [
      //     IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
      //     {
      //         loader: "css-loader",
      //     },
      //   ],
      // },
      // вариант с CSS модулями, то есть импорт стилей непосредственно в компонент шде они используются, и затем стили записываются в файл index.js на выходе, а не файл css
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // режим локальных селекторов
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              // onlyLocals: true,
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      },
      // все что ниже не требуют загрузок каких то плагинов отдельно
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'sounds/[hash][ext][query]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
            filename: path.join('images/icons', '[name].[contenthash][ext]'),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[hash][ext][query]'
        }
      },
    ]
  },
  plugins: IS_DEV ? [
    new FileManagerPlugin({
      events: {
        onStart: {
        delete: ['dist'],
      },
      },
    }),
    new HtmlWebpackPlugin( {template: path.resolve(__dirname, 'index.html')} ),
    // new MiniCssExtractPlugin({
    //   filename: 'main.[contenthash].css',
    // })
  ] : [
      new FileManagerPlugin({
        events: {
          onStart: {
          delete: ['dist'],
        },
        },
      }),
      new HtmlWebpackPlugin( {title: 'Форма оплаты', template: path.resolve(__dirname, 'index.html')} ),
      // new MiniCssExtractPlugin({
      //   filename: 'main.[contenthash].css',
      // }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { progressive: true, quality: 75 }],
              ["optipng", { progressive: true, optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  devServer: {
    // contentBase: './dist',
    historyApiFallback: true,
    port: 3000,
    open: true,
    // будет работать только в режиме dev: релоад страницы когда происходят изменения
    hot: IS_DEV,
  },
  devtool: setupDevtool(),
}

// если не используем модули css а хотим чтобы формировался единый сss файл в папке dist надо использовать npm install --save-dev mini-css-extract-plugin
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
    // настрйока плагина, файл в конце будет иметь имя с хэшом
//     plugins: [new MiniCssExtractPlugin({
        // filename: 'main.[contenthash].css',
// })],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//                             modules: {
//                                 mode: "local",
//                                 localIdentName: "[name]__[local]--[hash:base64:5]",
//                             },
//                         },
//                     },
//                 ],
//             },
//         ]
//     },
// };


