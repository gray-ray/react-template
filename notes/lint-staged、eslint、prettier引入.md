在项目中加入 **ESLint**、**Prettier** 和 **lint-staged** 可以帮助你统一代码风格、提高代码质量，并在提交代码前自动检查和格式化代码。以下是详细的配置步骤。

---

### **1. 安装依赖**

安装 ESLint、Prettier 和 lint-staged：

```bash
npm install --save-dev eslint prettier lint-staged
```

安装 ESLint 插件和配置：

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

安装 Husky（用于 Git 钩子管理）：

```bash
npm install --save-dev husky
```

---

### **2. 初始化 ESLint 配置**

运行以下命令生成 ESLint 配置文件：

```bash
npx eslint --init
```

根据提示选择配置：

1. **How would you like to use ESLint?**  
   选择：`To check syntax, find problems, and enforce code style`
2. **What type of modules does your project use?**  
   选择：`JavaScript modules (import/export)`
3. **Which framework does your project use?**  
   选择：`React`
4. **Does your project use TypeScript?**  
   选择：`Yes`
5. **Where does your code run?**  
   选择：`Browser`
6. **What format do you want your config file to be in?**  
   选择：`JSON`

完成后会生成 `.eslintrc.json` 文件。

---

### **3. 配置 ESLint**

修改 `.eslintrc.json` 文件，添加 Prettier 插件和规则：

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended" // 必须放在最后
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error", // 启用 Prettier 规则
    "react/react-in-jsx-scope": "off", // React 17+ 不需要显式导入 React
    "@typescript-eslint/no-unused-vars": "warn", // 未使用的变量警告
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 规则
    "react-hooks/exhaustive-deps": "warn" // 检查 Hook 依赖
  },
  "settings": {
    "react": {
      "version": "detect" // 自动检测 React 版本
    }
  }
}
```

---

### **4. 配置 Prettier**

在项目根目录下创建 `.prettierrc` 文件：

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

创建 `.prettierignore` 文件，忽略不需要格式化的文件：

```
node_modules/
dist/
build/
```

---

### **5. 配置 lint-staged**

在 `package.json` 中添加 `lint-staged` 配置：

```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix", // 自动修复 ESLint 问题
      "prettier --write", // 格式化代码
      "git add" // 将修复后的文件重新添加到暂存区
    ]
  }
}
```

---

### **6. 配置 Husky**

初始化 Husky：

```bash
npx husky install
npx husky init
```

---

### **7. 运行项目**

1. 修改代码并添加到暂存区：
   ```bash
   git add .
   ```
2. 提交代码时，`lint-staged` 会自动运行 ESLint 和 Prettier：
   ```bash
   git commit -m "feat: add eslint and prettier"
   ```

---

### **8. 完整配置示例**

#### **`package.json`**

```json
{
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack --mode production",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx}",
    "prepare": "husky install"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "git add"]
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^2.0.0",
    "lint-staged": "^13.0.0",
    "husky": "^8.0.0",
    "eslint-plugin-react": "^7.0.0",
    "eslint-plugin-react-hooks": "^4.0.0",
    "eslint-config-prettier": "^8.0.0",
    "eslint-plugin-prettier": "^4.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0"
  }
}
```

#### **`.eslintrc.json`**

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

#### **`.prettierrc`**

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

#### **`.prettierignore`**

```
node_modules/
dist/
build/
```

---

### **9. 总结**

通过以上配置，你可以在项目中集成 ESLint、Prettier 和 lint-staged，实现以下功能：

- **代码检查**：使用 ESLint 检查代码质量和风格。
- **代码格式化**：使用 Prettier 统一代码风格。
- **提交前检查**：使用 lint-staged 和 Husky 在提交代码前自动检查和格式化代码。

这样可以帮助你提高代码质量，减少团队协作中的风格冲突。
