# TensorRT-LLM

TensorRT-LLM 是 NVIDIA 的开源 LLM / Visual Gen inference 优化库。它适合放在 vLLM / SGLang 之后学习，用来理解 NVIDIA GPU 上更硬件优化、更生产化的推理栈。

## 官方入口

- GitHub: https://github.com/NVIDIA/TensorRT-LLM
- Docs: https://nvidia.github.io/TensorRT-LLM/
- NVIDIA Developer: https://developer.nvidia.com/tensorrt-llm

## 学习重点

| 模块 | 重点问题 |
|---|---|
| LLM API | offline inference、online serving、模型定义和 runtime API |
| `trtllm-serve` | OpenAI-compatible serving、启动参数、runtime 配置 |
| Engine build | 模型如何被转换 / 编译为高性能 engine |
| Custom kernels | attention、GEMM、MoE、quantization kernel |
| Runtime optimization | inflight batching、paged attention、speculative decoding、PD disaggregation |
| NVIDIA ecosystem | Triton Server、Dynamo、NCCL、multi-node deployment |

## 源码阅读目标

1. Python API 到底层 runtime 的调用链；
2. engine build 阶段和 serving runtime 阶段的边界；
3. TensorRT-LLM 如何处理模型并行和 quantization；
4. attention / GEMM / MoE kernel 如何被选择；
5. `trtllm-serve` 与 vLLM/SGLang server 的差异；
6. TensorRT-LLM Backend 如何接入 Triton Inference Server。

## 与 vLLM / SGLang 对比

| 维度 | vLLM / SGLang | TensorRT-LLM |
|---|---|---|
| 入门体验 | Python-first，较容易跑通 | 更贴近 NVIDIA production stack |
| 优化方式 | runtime scheduling + backend kernels | engine build + custom kernels + runtime |
| 硬件绑定 | 多后端趋势，但 CUDA path 最主流 | NVIDIA GPU 优先 |
| 学习价值 | serving runtime 主路径 | GPU 优化和生产部署 |

## 建议输出

- TensorRT-LLM request path 图；
- engine build vs runtime serving 对照表；
- TensorRT-LLM、vLLM、SGLang 同 workload benchmark 模板。
