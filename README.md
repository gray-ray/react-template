## react web页面开发模板

### 项目启动

```bash
# dev mock
npm run start:dev
```

### 项目开发相关

```bash
#
npm install --save-dev webpack webpack-cli webpack-dev-server
# css
pnpm add -D postcss-loader postcss postcss-preset-env style-loader css-loader  sass-loader less-loader  sass less
# html
pnpm  add -D html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin

pnpm add  -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

pnpm add -D typescript ts-loader

pnpm add react react-dom react-router-dom
pnpm add -D @babel/preset-react @types/react @types/react-dom


pnpm add -D eslint prettier lint-staged husky

pnpm add -D  eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

pnpm add -D  @commitlint/cli @commitlint/config-conventional


pnpm add dotenv

pnpm add -D cross-env dotenv-webpack


### webpack 初始化

### typescript 添加

- react 支持

### react 添加

### eslint 、prettier、husky、lint-staged 、 vscode 配置文件 添加

- 代码提交检查
- 保存文件自动格式化代码

### 环境变量功能添加

pnpm add -D @types/node

pnpm add -D cross-env dotenv dotenv-webpack

### react-router
- 路由配置文件处理 （路由 、权限、 菜单类型）
### api请求封装、mockjs

- 防抖请求（url相同、 url相同传参也相同）
- 文件切片上传 下载  todo
- mockjs

### 登陆（单点、非单点） 权限 （按钮、路由、菜单）

### web worker

### in18 国际化

### 数据埋点

### docker 部署
```
