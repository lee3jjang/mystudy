const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[fullhash].js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: ["ts-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
