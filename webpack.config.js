const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const isDev = process.env.NODE_ENV === "development";

new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify(process.env.NODE_ENV)
});

module.exports = {
  entry: {
    main: "./src/js/main.js",
    paper: "./src/js/paper.js",
    about: "./src/js/about.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].[chunkhash].js"
  },

  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader"
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]",
          {
            loader: "image-webpack-loader",
            options: {}
          }
        ]
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./fonts/[name].[ext]"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/main.html",
      filename: "main.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/paper.html",
      filename: "paper.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/about.html",
      filename: "about.html"
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new WebpackMd5Hash()
  ]
};
