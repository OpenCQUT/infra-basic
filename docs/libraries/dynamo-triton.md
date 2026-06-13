# Dynamo / Triton Inference Server

Dynamo 和 Triton Inference Server 处在更高一层：它们关注的不只是单个 engine 如何生成 token，而是多节点、多 engine、多 workload 的生产编排。

## 官方入口

- NVIDIA Dynamo GitHub: https://github.com/ai-dynamo/dynamo
- NVIDIA Dynamo Developer: https://developer.nvidia.com/dynamo
- TensorRT-LLM Backend: https://github.com/triton-inference-server/tensorrtllm_backend
- Triton Inference Server: https://github.com/triton-inference-server/server

## Dynamo 学习重点

| 模块 | 重点问题 |
|---|---|
| Orchestration layer | 如何协调 vLLM、SGLang、TensorRT-LLM 等 backend |
| Disaggregated serving | prefill / decode 分离、资源独立扩缩 |
| Routing | 请求如何分配到不同 worker / GPU / node |
| KV cache | multi-tier KV cache、cache transfer、reuse |
| Scaling | 多节点 GPU fleet、autoscaling、traffic bottleneck |

## Triton / TensorRT-LLM Backend 学习重点

| 模块 | 重点问题 |
|---|---|
| Backend interface | Triton backend 如何接入 TensorRT-LLM |
| Inflight batching | 多请求如何在 backend 中合并执行 |
| Paged attention | serving backend 如何暴露 KV cache 管理 |
| Production integration | metrics、model repository、deployment lifecycle |

## 与 serving engine 的关系

```text
Client requests
→ Router / scheduler / orchestration layer
→ vLLM / SGLang / TensorRT-LLM workers
→ attention / GEMM / communication kernels
→ streamed tokens
```

Dynamo 不替代 vLLM、SGLang 或 TensorRT-LLM；它更像是把多个 engine worker 组织成数据中心级推理系统的上层 runtime。

## 建议输出

- Dynamo multi-node request path；
- PD disaggregation 时序图；
- Triton TensorRT-LLM backend 调用链笔记；
- single-engine serving 与 orchestration serving 的边界表。
