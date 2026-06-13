# Claude Code

Claude Code 是 Anthropic 的 agentic coding tool，定位是终端内理解代码库、执行开发任务和处理 git workflow 的 coding agent。本章关注它体现的 agent 产品架构和长任务协作模式。

## 官方入口

- GitHub: https://github.com/anthropics/claude-code
- Docs: https://code.claude.com/docs/en/overview
- Agent Skills: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview

## 源码 / 架构阅读目标

1. 终端 agent 如何维护项目上下文；
2. repository instruction / memory 文件如何影响行为；
3. 长任务中如何拆分计划、执行、验证和 git 操作；
4. tool permission 与 human approval 的交互模型；
5. Skills / MCP 这类扩展机制如何改变 agent 能力边界；
6. 与 Codex CLI 在工具抽象、上下文管理和安全边界上的差异。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Long-horizon coding | 多步任务、跨文件修改、测试失败重试 |
| Project memory | repo instructions、历史上下文、可复用技能 |
| Tool integration | shell、filesystem、git、MCP、skills |
| Reviewability | diff、commit、PR、用户确认 |
| Product boundary | terminal agent 与 IDE / cloud agent 的职责差异 |

## 建议输出

- Claude Code 与 Codex 的 agent loop 对比；
- Skills / MCP 对 agent runtime 的影响分析；
- 一份 “long-horizon coding task” 状态机草图；
- 一份安全边界和人类确认点清单。
