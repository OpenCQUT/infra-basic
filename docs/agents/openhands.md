# OpenHands

OpenHands 是开源 AI software development agent platform，覆盖本地、云端和 SDK 形态。它适合研究更完整的 agent platform：runtime、sandbox、agent SDK、任务执行和可扩展工具系统。

## 官方入口

- GitHub: https://github.com/OpenHands/openhands
- Website: https://openhands.dev/

## 源码阅读目标

1. agent SDK 如何抽象 agent、tool、event 和 state；
2. runtime 如何隔离执行真实工程任务；
3. 本地与云端执行形态如何共享核心逻辑；
4. UI / server / worker / sandbox 的边界；
5. 多 agent 或大规模 agent 执行如何组织；
6. 与单机 CLI agent 相比，多了哪些平台层组件。

## 关键系统问题

| 问题 | 关注点 |
|---|---|
| Platform architecture | SDK、server、UI、runtime、sandbox |
| Event model | action、observation、state transition |
| Execution isolation | container、workspace、network、permission |
| Scaling | 多 session、多用户、云端 agent |
| Extensibility | 自定义 agent、tools、model provider |

## 建议输出

- OpenHands 模块图；
- agent SDK event loop 笔记；
- platform agent 与 CLI agent 的复杂度对比。
