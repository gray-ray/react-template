出现以下报错

```plain
refused to execute script from 'http://10.43.181.107:3000/page1/main.0803d83ff0677e3596ac.bundle.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
Refused to execute script from 'http://10.43.181.107:3000/page1/vendors-node_modules_pnpm_css-loader_7_1_2_webpack_5_98_0_node_modules_css-loader_dist_runtim-84297b.7ee7f7470080d152f385.bundle.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
```

解决方法

1.  webpack.config.js publicPath: '/', // 根据部署路径调整

```typescript
 output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // 根据部署路径调整
    clean: true,
  },
```

2. page2页面中添加 Outlet

```typescript

import { Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <div style={{ background: 'green' }}>
      page2
      {/* 子路由的内容会渲染在这里 */}
      <Outlet />
    </div>
  );
};

```
