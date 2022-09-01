const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  mode: "development",
  // mode: "production",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    // historyApiFallback: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      //   {
      //     test: /\.html$/,
      //     use: [{ loader: 'html-loader' }],
      //   },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|woff(2)?|ttf|eot)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    // new MiniCssExtractPlugin(),
  ],
};
