# SWE-agent

SWE-agent 是面向 GitHub issue 修复和 SWE-bench 的研究型 coding agent。它适合用来理解最小可工作的 issue-to-patch agent loop，以及 benchmark 如何约束 agent 设计。

## 官方入口

- Docs: https://swe-agent.com/latest/
- GitHub organization: https://github.com/SWE-agent
- mini-swe-agent: https://github.com/SWE-agent/mini-swe-agent

## 源码阅读目标

1. GitHub issue 如何被转成 agent task；
2. agent 可用工具集如何设计；
3. action / observation loop 如何保持简单；
4. patch 如何生成、测试和提交；
5. SWE-bench evaluation 如何影响 agent 行为；
6. mini-swe-agent 为什么能作为最小教学样本。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Minimal loop | 少量代码表达完整 agent 过程 |
| Issue-to-patch | 从自然语言 bug report 到代码 diff |
| Benchmark orientation | SWE-bench 目标函数如何塑造设计 |
| Tool design | shell、edit、search 的最小集合 |
| Generalization | 研究型 agent 与产品型 agent 的差异 |

## 建议输出

- mini-swe-agent 逐行源码笔记；
- SWE-agent issue-to-patch 状态机；
- SWE-bench 对 agent runtime 的约束分析。
