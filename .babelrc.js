

module.exports = {
  presets: [
    "@babel/preset-env", // 支持 ES6+ 语法
    ["@babel/preset-react", { "runtime": "automatic" }],// 启用新的 JSX 转换
    // "@babel/preset-typescript"// 支持tsx 编译
  ]
}