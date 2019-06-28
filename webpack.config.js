const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";

  const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
      main: "./js/main.js"
    },
    output: {
      filename: "[name].js"
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "./fonts/",
                publicPath: "../fonts/"
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "../images/"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        { from: "./images", to: "../dist/images" },
        { from: "./*.@(png|xml|ico|webmanifest)", to: "../dist" }
      ]),
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: `./css/style${devMode ? "" : ".[hash]"}.css`
      })
    ]
  };

  // production
  if (!devMode) {
    Object.assign(config, {
      optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
      }
    });
  }

  return config;
};
