# llama.cpp / ggml

llama.cpp 和 ggml 是本地推理与边缘推理方向最重要的开源项目之一。它们不以高并发 datacenter serving 为第一目标，而是强调低依赖、portable backend、量化格式和广泛硬件支持。

## 官方入口

- llama.cpp: https://github.com/ggml-org/llama.cpp
- ggml: https://github.com/ggml-org/ggml

## 学习重点

| 模块 | 重点问题 |
|---|---|
| GGUF | 模型权重格式、metadata、quantized tensor |
| Quantization | Q4 / Q5 / Q8 等量化格式如何影响显存和速度 |
| ggml tensor library | 轻量 tensor / graph runtime 如何实现 |
| Backend abstraction | CPU、CUDA、Metal、Vulkan、OpenCL 等后端如何接入 |
| KV cache | 单机本地 runtime 如何管理上下文和 cache |
| Server mode | 本地 HTTP server 与 production serving engine 的差异 |

## 与 datacenter serving 的差异

| 维度 | llama.cpp / ggml | vLLM / SGLang / TensorRT-LLM |
|---|---|---|
| 目标 | 本地、边缘、低依赖、广泛硬件 | GPU datacenter、高并发 serving |
| 模型格式 | GGUF 量化格式 | Hugging Face checkpoint / engine |
| 调度 | 单机本地推理为主 | continuous batching、scheduler、multi-request |
| 优化重点 | quantization、portable backend | KV cache、batching、attention backend、multi-GPU |

## 源码阅读目标

1. GGUF loader 如何读取模型权重；
2. ggml computation graph 如何表达 Transformer forward；
3. quantized matmul 如何实现；
4. CUDA / Metal / Vulkan backend 如何分发 op；
5. KV cache 和 context window 如何组织；
6. llama.cpp server 与 OpenAI-compatible API 的边界。

## 建议输出

- GGUF 文件结构笔记；
- ggml graph execution 笔记；
- llama.cpp 与 vLLM 的 runtime 对比表。
