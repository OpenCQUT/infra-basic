# Gemini CLI

Gemini CLI 是 Google 的开源终端 AI agent。官方文档明确描述它使用 ReAct loop，并能结合内置工具和本地或远程 MCP servers 完成复杂开发任务，因此很适合作为标准 agent loop 的阅读对象。

## 官方入口

- GitHub: https://github.com/google-gemini/gemini-cli
- Docs: https://developers.google.com/gemini-code-assist/docs/gemini-cli

## 源码阅读目标

1. ReAct loop 在代码中如何表达；
2. built-in tools 与 MCP tools 如何注册和调用；
3. 模型响应如何被解析成 action；
4. tool result 如何被压回下一轮 prompt；
5. 本地 terminal agent 如何处理权限、输出和错误；
6. Google 生态服务接入与通用 agent runtime 的边界。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| ReAct implementation | reason / act / observe 是否显式建模 |
| MCP integration | tool discovery、schema、result handling |
| Terminal runtime | shell、filesystem、stdout/stderr、interrupt |
| Context | 文件选择、历史压缩、prompt construction |
| Extensibility | 内置工具和外部 MCP 的组合方式 |

## 建议输出

- ReAct loop 源码笔记；
- MCP tool call 生命周期图；
- Gemini CLI、Codex CLI、Claude Code 的 terminal runtime 对比表。
