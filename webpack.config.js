const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/build/",
  },
  devServer: {
    publicPath: "/build/",
    proxy: {
      "/": "http://localhost:3000",
    },
    hot: true,
    port: 8080,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Plantery",
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
  
      {
        test: /.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    mainFields: ["browser", "main", "module"],
    extensions: [".js", ".json", ".jsx"],
  },
};
