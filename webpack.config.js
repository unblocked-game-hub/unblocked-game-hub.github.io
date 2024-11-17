const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Điểm vào của ứng dụng
  output: {
    filename: "bundle.js", // Tên file bundle
    path: path.resolve(__dirname, "dist"), // Thư mục đầu ra
    clean: true, // Dọn dẹp thư mục đầu ra trước khi build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Xử lý file .js và .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Sử dụng Babel để biên dịch
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Xử lý file CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Các định dạng file được hỗ trợ
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // File HTML mẫu
      filename: "index.html", // Tên file HTML đầu ra
    }),
  ],
  mode: "production", // Chế độ build
};
