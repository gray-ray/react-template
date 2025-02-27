module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修复 bug
        "docs", // 文档更新
        "style", // 代码样式调整（不影响代码逻辑）
        "refactor", // 代码重构
        "perf", // 性能优化
        "test", // 测试相关
        "chore", // 构建或工具链更新
        "revert", // 回滚提交
      ],
    ],
    "subject-case": [0], // 允许提交信息使用任意大小写
  },
};
