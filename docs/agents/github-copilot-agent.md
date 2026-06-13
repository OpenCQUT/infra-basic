# GitHub Copilot Cloud Agent

GitHub Copilot cloud agent 是云端后台 coding agent。它和本地终端 agent 最大差异在于：任务通常从 GitHub issue 或 Copilot prompt 启动，在 GitHub Actions-powered environment 中执行，并产出 branch / pull request。

## 官方入口

- About cloud agent: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
- Start sessions: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions
- GitHub blog: https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/

## 架构阅读目标

1. issue / prompt 如何变成 agent session；
2. GitHub Actions-powered environment 如何隔离执行；
3. agent 如何 clone repo、创建 branch、提交 commit 和打开 PR；
4. PR review comment 如何触发后续 session；
5. 云端 agent 的权限、secret、网络和日志边界；
6. 与本地 IDE agent 的交互和职责差异。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Background execution | 用户不在本地等待，agent 在云端推进任务 |
| Branch / PR model | 修改默认以 branch、commit、draft PR 体现 |
| Environment isolation | GitHub Actions runner、repo permission、secret exposure |
| Observability | session log、PR diff、status check、review thread |
| Human review | PR 是核心审批边界 |

## 建议输出

- issue-to-PR 生命周期图；
- cloud agent 与 terminal agent 的权限模型对比；
- 一份云端 agent 安全风险清单。
