const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextplugin = require("extract-text-webpack-plugin");

const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:['./js/app.js'],
    output: {
      filename: './bundle.js',
      library: 'myApp'
    },
  
    module:{
      rules: [
        {
          test: /\.css$/,

          use: ExtractTextplugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
              'postcss-loader',
            ],
          }),
        },

        {
          test: /\.css$/,
          use: ["postcss-loader"],
        },
 
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
             'file-loader',
              {
                  loader: 'image-webpack-loader',
                  options: {
                      bypassOnDebug: true,
                      mozjpeg: {
                          progressive: true,
                          quality: 65
                      },
                      optipng: {
  
                          enabled: false,
                          optimizationLevel: 5
                      }
                  },
              },  
          ],
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
               presets: ['es2015'],
               plugins: ['transform-async-to-generator', 'transform-regenerator', "transform-runtime"]
        }
      }

      ],
    },

    plugins:[
     new ExtractTextplugin({
      filename: './css/bundle.css',
      disable: false,
      allChunks: true,
    }),

/*       new UglifyJsPlugin( {
        test: /\.js$/,
        uglifyOptions:{
          ecma: 5,
           compress:{
            ecma: 5,
          } 
        }

      } ), */
    ],

    watch: true,

    devServer: {
      hot: true,
    }

  };