**错误信息：`Uncaught ReferenceError: React is not defined`** 表示在你的代码中使用了 JSX 语法（如 `<div>`），但没有正确导入 `React`。在 React 17 之前，所有使用 JSX 的文件都必须显式导入 `React`，因为 JSX 语法会被编译为 `React.createElement` 调用。

---

### **1. 问题原因**
在 React 17 之前，JSX 语法依赖于 `React.createElement`，因此需要在每个使用 JSX 的文件中导入 `React`：
```tsx
import React from 'react'; // 必须导入 React
```

如果你使用的是 React 17 或更高版本，可以通过配置 **新的 JSX 转换** 来避免显式导入 `React`。

---

### **2. 解决方法**

#### **方法 1：显式导入 React**
在每个使用 JSX 的文件中显式导入 `React`：
```tsx
import React from 'react'; // 显式导入 React

const Index = () => {
  return <div style={{ background: 'green' }}> page2 </div>;
};

export default Index;
```

#### **方法 2：启用新的 JSX 转换（React 17+）**
如果你使用的是 React 17 或更高版本，可以通过配置 Babel 和 TypeScript 来启用新的 JSX 转换，从而避免显式导入 `React`。

##### **步骤 1：更新 Babel 配置**
在 `.babelrc` 或 `babel.config.js` 中启用新的 JSX 转换：
```json
{
  "presets": [
    ["@babel/preset-react", { "runtime": "automatic" }] // 启用新的 JSX 转换
  ]
}
```

##### **步骤 2：更新 TypeScript 配置**
在 `tsconfig.json` 中启用新的 JSX 转换：
```json
{
  "compilerOptions": {
    "jsx": "react-jsx" // 启用新的 JSX 转换
  }
}
```

##### **步骤 3：确保 React 版本 >= 17**
确保你的 `react` 和 `react-dom` 版本是 17 或更高：
```bash
npm install react@latest react-dom@latest
```

##### **步骤 4：移除显式导入**
在启用新的 JSX 转换后，可以移除文件中的 `import React from 'react';`：
```tsx
const Index = () => {
  return <div style={{ background: 'green' }}> page2 </div>;
};

export default Index;
```

---

### **3. 示例代码**

#### **`page2.tsx`**
```tsx
const Index = () => {
  return <div style={{ background: 'green' }}> page2 </div>;
};

export default Index;
```

#### **`App.tsx`**
```tsx
import React from 'react'; // 如果未启用新的 JSX 转换，需要显式导入 React
import Index from './page2';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Index />
    </div>
  );
};

export default App;
```

---

### **4. 检查依赖版本**
确保你的 `react` 和 `react-dom` 版本是 17 或更高：
```bash
npm list react react-dom
```

如果版本低于 17，升级到最新版本：
```bash
npm install react@latest react-dom@latest
```

---

### **5. 总结**
- 如果你使用的是 **React 16 或更低版本**，必须在每个使用 JSX 的文件中显式导入 `React`。
- 如果你使用的是 **React 17 或更高版本**，可以通过配置 Babel 和 TypeScript 启用新的 JSX 转换，从而避免显式导入 `React`。

通过以上方法，你应该能够解决 **`Uncaught ReferenceError: React is not defined`** 的问题。