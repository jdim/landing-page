module.exports = {
  plugins: [
    require("postcss-nested"),
    require("css-mqpacker")(),
    require("autoprefixer")
  ]
};
