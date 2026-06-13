# OpenAI Codex

Codex 是 OpenAI 的 coding agent 体系，包含本地终端 CLI、云端后台任务和开发环境集成等形态。本章重点研究 Codex CLI / Codex runtime 的系统设计，而不是命令使用。

## 官方入口

- GitHub: https://github.com/openai/codex
- Codex web docs: https://developers.openai.com/codex/cloud
- GitHub integration docs: https://docs.github.com/en/copilot/concepts/agents/openai-codex

## 源码阅读目标

1. CLI 如何启动 session、读取配置和识别 workspace；
2. system / developer / user instructions 如何进入 model request；
3. tool call 如何被解析、分发和回填上下文；
4. shell、file read、apply patch、browser 等工具如何隔离实现；
5. sandbox / approval policy 如何影响命令执行；
6. context compaction 如何支撑长任务；
7. 最终回答如何总结 diff、测试和残余风险。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Agent loop | 模型输出不是一次性答案，而是多轮 tool call / observation / retry |
| Patch model | 文件修改应能被 review、回滚和最小化 |
| Safety | destructive command、network、workspace boundary、approval |
| Continuity | 长任务、上下文压缩、用户中途插话、状态恢复 |
| Verification | command result、test result、browser result 如何驱动下一步 |

## 建议输出

- 一张 Codex CLI session 生命周期图；
- 一份 tool dispatcher 源码笔记；
- 一份 apply patch / file edit 机制笔记；
- 一份 sandbox / approval policy 设计笔记；
- 一个与 vLLM scheduler 的类比表：agent task scheduling vs serving request scheduling。
