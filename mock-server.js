const express = require('express');
const Mock = require('mockjs');

const app = express();

// express 处理跨域请求问题
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 处理 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// 模拟 API 路由
app.get('/api/user', (req, res) => {
  res.json(
    Mock.mock({
      code: 200,
      message: '成功',
      data: {
        'id|10000-99999': 1,
        username: '@cname',
        avatar: '@image("100x100", "#50B347", "#FFF", "Mock.js")',
        permissions: ['menu.page1', 'page.btn1'],
      },
    })
  );
});

// 监听端口
app.listen(3001, () => {
  console.log('Mock Server is running at http://localhost:3001');
});
