# TGI / LMDeploy

TGI 和 LMDeploy 都是值得与 vLLM / SGLang 对比的 serving framework。TGI 来自 Hugging Face，强调生产化 text generation inference；LMDeploy 来自 InternLM/MMDeploy 生态，强调压缩、部署和 serving 一体化。

## 官方入口

- TGI GitHub: https://github.com/huggingface/text-generation-inference
- TGI Docs: https://huggingface.co/docs/text-generation-inference/en/index
- LMDeploy GitHub: https://github.com/InternLM/lmdeploy
- LMDeploy Docs: https://lmdeploy.readthedocs.io/

## TGI 学习重点

| 模块 | 重点问题 |
|---|---|
| Rust / Python / gRPC server | server 进程如何组织请求和模型 worker |
| Router | request batching、streaming、queue、metrics |
| Model server | backend 如何执行 generation |
| Production API | Hugging Face Inference API / Endpoint 生产经验 |
| Quantization / kernels | 支持哪些模型、dtype、attention backend |

## LMDeploy 学习重点

| 模块 | 重点问题 |
|---|---|
| TurboMind | blocked KV cache、persistent batching、CUDA kernel |
| PyTorch engine | 与 TurboMind 的职责边界 |
| Quantization | AWQ、4-bit inference、模型压缩路径 |
| OpenAI server | serving API 和 vLLM/SGLang 的接口对比 |
| VLM support | 多模态 batch inference 的实现边界 |

## 横向对比

| 维度 | TGI | LMDeploy |
|---|---|---|
| 生态 | Hugging Face production stack | InternLM / OpenMMLab deployment stack |
| 架构语言 | Rust + Python + gRPC | Python + TurboMind/CUDA |
| 重点 | text generation serving | compression + deployment + serving |
| 适合研究 | production server architecture | blocked KV cache、quantization、TurboMind |

## 建议输出

- TGI router / worker 调用链笔记；
- LMDeploy TurboMind runtime 笔记；
- vLLM / SGLang / TGI / LMDeploy benchmark 变量表。
