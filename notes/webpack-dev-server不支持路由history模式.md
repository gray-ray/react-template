## **🚀 可能的问题**

### **1️⃣ `webpack-dev-server` 可能未正确配置 `historyApiFallback`**

你的 `react-router-dom` 7.x 使用的是 `createBrowserRouter`，它默认是 **history 模式**（不是 hash 模式），但 `webpack-dev-server` **默认不支持直接刷新 `http://localhost:3000/page2`**，会返回 `404`，因为它不认识这个路径。

✅ **解决方法**：
在 `webpack.config.js` 中添加：

```js
module.exports = {
  devServer: {
    historyApiFallback: true, // 允许 history 路由模式
  },
};
```

📌 这样 `webpack-dev-server` 就会把所有未匹配的路径 **重定向到 `index.html`**，让 `react-router` 处理它们。
