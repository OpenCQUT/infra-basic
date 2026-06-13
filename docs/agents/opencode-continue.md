# OpenCode / Continue

OpenCode 和 Continue 分别代表两个方向：OpenCode 更接近开源 terminal coding agent，Continue 则更强调 IDE / CLI agent 和 source-controlled AI checks。本章把它们放在一起，观察开放 agent runtime 与工程质量控制 agent 的差异。

## 官方入口

- OpenCode website: https://opencode.ai/
- OpenCode GitHub: https://github.com/anomalyco/opencode
- Continue website: https://www.continue.dev/
- Continue GitHub: https://github.com/continuedev/continue
- Continue docs: https://docs.continue.dev/

## 源码阅读目标

1. OpenCode 如何组织 terminal-native agent runtime；
2. OpenCode 如何抽象 model provider、tool 和 session；
3. Continue 如何把 agent 能力放入 VS Code、JetBrains、CLI 和 PR checks；
4. AI checks 如何以 markdown rule / GitHub status check 的形态进入工程流程；
5. 两者如何处理开放模型、企业环境和源码可控性。

## 关键系统问题

| 问题 | OpenCode | Continue |
|---|---|---|
| 主要形态 | terminal / desktop coding agent | IDE / CLI / PR quality checks |
| 核心关注 | open agent runtime、provider flexibility | source-controlled checks、CI feedback |
| 工具边界 | shell、filesystem、model provider | editor context、repo rules、GitHub status |
| 研究价值 | 开源 terminal agent 架构 | agentic code review / quality control |

## 建议输出

- OpenCode runtime 模块笔记；
- Continue AI checks 生命周期图；
- terminal coding agent 与 PR check agent 的边界对比。
