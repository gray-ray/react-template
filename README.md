## react pc端页面开发模板

### 系统功能规划

- eslint + prettier lint-staged
- stylelint
- vite 构建拓展
- 时间库 - 常用时间时间方法封装
- 表格功能封装 （拖拽、表头、）
- echarts
- mockjs
- cross-env 环境变量支持
- 表格导出 xlsx
- ts

- 模块拖拽
- gantt
- 国际化

### 部署

### 测试

- docker 部署

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
```

- @babel/core @babel/cli @babel/preset-env之间的关系

出现下面错误 如果在webpack rules中使用ts- loader ，那么tsconfig 中"noEmit": true,需要为false

```plain
ERROR in ./src/main.tsx
Module build failed (from ./node_modules/.pnpm/ts-loader@9.5.2_typescript@5.7.3_webpack@5.98.0/node_modules/ts-loader/index.js):
Error: TypeScript emitted no output for /xxx/src/main.tsx.
```
