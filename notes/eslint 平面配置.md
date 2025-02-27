从 **ESLint 9.x** 开始，ESLint 引入了 **Flat Config** 系统（即 `eslint.config.js`），取代了传统的 `.eslintrc` 配置文件。在新的 Flat Config 系统中，`env` 配置项不再被支持，取而代之的是 `languageOptions.globals`。

以下是解决该问题的步骤，以及如何将传统的 `.eslintrc` 配置迁移到新的 Flat Config 系统。

---

### **1. 问题原因**

在 ESLint 9.x 中，`env` 配置项已被弃用。如果你使用的是传统的 `.eslintrc` 配置文件（如 `.eslintrc.js` 或 `.eslintrc.json`），并且其中包含 `env` 配置项，ESLint 会抛出以下错误：

```
A config object is using the "env" key, which is not supported in flat config system.
```

---

### **2. 解决方案**

#### **方法 1：迁移到 Flat Config 系统**

将传统的 `.eslintrc` 配置文件迁移到新的 `eslint.config.js` 文件。

1. **创建 `eslint.config.js` 文件**  
   在项目根目录下创建 `eslint.config.js` 文件。

2. **迁移 `env` 配置**  
   将 `env` 配置替换为 `languageOptions.globals`。例如：

   **传统配置（.eslintrc.js）**：

   ```javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: ["eslint:recommended", "plugin:react/recommended"],
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
     },
     rules: {
       // 规则配置
     },
   };
   ```

   **Flat Config（eslint.config.js）**：

   ```javascript
   import js from "@eslint/js";
   import globals from "globals";

   export default [
     {
       files: ["**/*.js", "**/*.jsx"],
       languageOptions: {
         globals: {
           ...globals.browser, // 浏览器环境全局变量
           ...globals.es2021, // ES2021 全局变量
         },
         ecmaVersion: "latest",
         sourceType: "module",
       },
       rules: {
         // 规则配置
       },
     },
   ];
   ```

3. **安装依赖**  
   如果你使用了 `globals` 包，需要先安装它：

   ```bash
   npm install --save-dev globals
   ```

4. **删除旧的 `.eslintrc` 文件**  
   删除 `.eslintrc.js` 或 `.eslintrc.json` 文件，确保只使用 `eslint.config.js`。

---

#### **方法 2：继续使用传统配置（不推荐）**

如果你暂时不想迁移到 Flat Config 系统，可以降级 ESLint 到 8.x 版本，继续使用传统的 `.eslintrc` 配置文件。

1. **降级 ESLint**  
   运行以下命令降级 ESLint：

   ```bash
   npm install eslint@8.x --save-dev
   ```

2. **继续使用 `.eslintrc` 文件**  
   确保你的 `.eslintrc.js` 或 `.eslintrc.json` 文件存在并正确配置。

---

### **3. 迁移指南**

ESLint 官方提供了详细的迁移指南，帮助你从传统配置迁移到 Flat Config 系统。以下是关键点：

#### **1. 替换 `env`**

将 `env` 替换为 `languageOptions.globals`，并使用 `globals` 包提供的全局变量。

例如：

```javascript
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser, // 浏览器环境全局变量
        ...globals.node, // Node.js 环境全局变量
      },
    },
  },
];
```

#### **2. 替换 `parserOptions`**

将 `parserOptions` 迁移到 `languageOptions` 中。

例如：

```javascript
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
```

#### **3. 替换 `extends`**

将 `extends` 替换为直接导入配置。

例如：

```javascript
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      // 规则配置
    },
  },
];
```

#### **4. 替换 `plugins`**

将 `plugins` 替换为 `plugins` 对象。

例如：

```javascript
import react from "eslint-plugin-react";

export default [
  {
    plugins: {
      react,
    },
  },
];
```

---

### **4. 完整示例**

#### **传统配置（.eslintrc.js）**

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
  },
};
```

#### **Flat Config（eslint.config.js）**

```javascript
import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      react,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
    },
  },
];
```

---

### **5. 总结**

- ESLint 9.x 引入了 Flat Config 系统，不再支持传统的 `env` 配置项。
- 使用 `languageOptions.globals` 替换 `env`，并迁移到 `eslint.config.js`。
- 如果需要继续使用传统配置，可以降级 ESLint 到 8.x 版本。

通过以上步骤，你可以顺利迁移到 ESLint 9.x 的 Flat Config 系统，并解决 `env` 配置项不被支持的问题。
