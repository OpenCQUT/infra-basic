# Prefill / Decode

Prefill 和 decode 是 LLM 推理系统最重要的两个阶段。大多数 latency、throughput、KV cache 和调度问题都要先从这两个阶段解释。

## 两个阶段

| 阶段 | 输入 | 输出 | 主要瓶颈 |
|---|---|---|---|
| Prefill | prompt tokens | 第一次 forward、KV cache | prompt 长度、attention 计算、显存带宽 |
| Decode | 上一步生成 token + KV cache | 下一个 token | KV cache 读取、batch size、sampling、memory bandwidth |

## 关键指标

| 指标 | 含义 |
|---|---|
| TTFT | Time To First Token，主要受 queue、prefill、调度影响 |
| TPOT / ITL | Time Per Output Token / Inter-Token Latency，主要受 decode loop 影响 |
| E2E latency | 从请求发出到全部 token 完成 |
| output tokens/s | decode throughput |
| total tokens/s | prefill + decode 综合吞吐 |

## 常见系统设计

- long prompt workload 会拉高 TTFT；
- long output workload 会放大 TPOT / ITL；
- chunked prefill 用较小 token chunk 避免长 prompt 长时间阻塞 decode；
- PD disaggregation 把 prefill 和 decode 放到不同资源池；
- prefix cache / radix cache 主要改善重复前缀场景的 prefill 成本。

## 通过标准

能解释为什么短 prompt 长输出、长 prompt 短输出、长 prompt 长输出的瓶颈不同。
