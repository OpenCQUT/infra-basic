# Cline / Roo Code

Cline 和 Roo Code 代表 IDE 内自治 coding agent。它们与 terminal agent 的差异在于：更深地嵌入编辑器、以 diff review 和 mode system 组织工作，并广泛接入 MCP。

## 官方入口

- Cline GitHub: https://github.com/cline/cline
- Cline website: https://cline.bot/
- Roo Code GitHub: https://github.com/RooCodeInc/Roo-Code
- Roo Code docs repo: https://github.com/RooCodeInc/Roo-Code-Docs

## 源码阅读目标

1. IDE extension 如何和 agent runtime 通信；
2. Plan / Act 或 Code / Architect / Ask / Debug mode 如何影响系统 prompt 和工具权限；
3. 编辑器 diff review、checkpoint、undo 如何实现；
4. MCP server 如何扩展 agent 能力；
5. 多 provider / 多模型配置如何进入 runtime；
6. 上下文压缩和大型项目文件选择策略。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| IDE integration | VS Code / JetBrains extension boundary |
| Mode system | 不同模式对应不同 prompt、tools、approval |
| Human review | every edit as diff、checkpoint、revert |
| MCP | 外部工具和数据源接入 |
| Context | 文件树、打开文件、selection、terminal output |

## 建议输出

- Cline / Roo extension 架构图；
- mode system 与 tool permission 对照表；
- IDE agent 与 terminal agent 的 human-in-the-loop 对比。
