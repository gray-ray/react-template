在 Husky v7 版本及以上，`husky add` 命令已经被废弃，取而代之的是使用新的配置方法来添加钩子。

### 解决方法：

你可以使用 Husky 的新方式来配置 Git 钩子，具体步骤如下：

### **1. 安装 Husky**

确保你已经安装了 Husky：

```bash
npm install husky --save-dev
```

### **2. 启用 Git 钩子**

初始化 Husky：

```bash
npx husky install
```

或者，如果你使用的是 `yarn`：

```bash
yarn husky install
```

这将会在项目中创建 `.husky` 目录，并初始化钩子配置。

### **3. 添加 commit-msg 钩子**

Husky v7 不再使用 `husky add` 来添加钩子，而是通过修改 `.husky` 目录下的文件来设置钩子。你可以手动创建 `commit-msg` 钩子：

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

但如果你看到“DEPRECATED”警告，可以直接通过以下方式手动创建钩子文件：

#### **手动创建 `commit-msg` 钩子**

1. 在 `.husky` 目录下创建 `commit-msg` 文件（如果文件不存在）。
2. 编辑该文件并添加以下内容：

```bash
#!/bin/sh
. "$(dirname "$0")/husky.sh"

npx --no -- commitlint --edit "$1"
```

### **4. 确保钩子脚本是可执行的**

确保钩子脚本具有可执行权限：

```bash
chmod +x .husky/commit-msg
```

### **总结**

在 Husky v7 及以上版本中，`husky add` 被废弃。你需要手动创建和配置钩子脚本，并确保脚本具有执行权限。
