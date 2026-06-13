# Aider

Aider 是老牌终端 AI pair-programming agent。它的价值在于 git-aware edit、repo map、自动 lint/test 和多模型支持，适合作为“简洁但工程化”的代码编辑 agent 阅读对象。

## 官方入口

- GitHub: https://github.com/aider-ai/aider
- Docs: https://aider.chat/docs/

## 源码阅读目标

1. repo map 如何帮助模型理解大型代码库；
2. chat mode / architect mode / code mode 如何影响 edit loop；
3. 文件选择和上下文注入策略；
4. git diff、commit、dirty worktree 的处理；
5. lint / test 失败如何反馈给模型；
6. 多模型 provider 抽象如何设计。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Repo map | 如何压缩代码库结构给模型 |
| Edit loop | 模型生成修改、应用、检查、再修改 |
| Git awareness | diff、commit、branch、dirty state |
| Test feedback | lint/test result 进入下一轮 |
| Model abstraction | OpenAI、Anthropic、本地模型等 provider 差异 |

## 建议输出

- repo map 机制笔记；
- edit format / patch apply 笔记；
- Aider 与 Codex CLI 的文件修改模型对比。
