# infra-basic

`infra-basic` 是一条面向 **LLM 推理基础设施** 的学习路线。它从 PyTorch / Transformers 推理开始，逐步进入 KV Cache、serving、benchmark、vLLM、SGLang、论文阅读和开源贡献。

本仓库不教学 Linux / Python / Git 零基础。默认学习者已经能完成基本命令行操作、Python 脚本编写、虚拟环境管理和 Git 提交。

## 学习目标

完成本路线后，学习者应该能够：

1. 用 PyTorch 和 Transformers 跑通小模型推理；
2. 解释 autoregressive decoding、prefill、decode、sampling、KV Cache、batching；
3. 写一个极简 LLM HTTP serving demo，并完成基础压测；
4. 理解 vLLM 的 API server、engine、scheduler、KV cache manager、model runner、attention backend；
5. 理解 SGLang 的 runtime、RadixAttention、structured output、prefix cache、offline engine；
6. 读懂 LLM serving 领域的基础、经典和较新的论文；
7. 以文档、测试、benchmark、bug reproduction、小功能为入口参与 vLLM / SGLang 开源贡献。

## 推荐阅读顺序

```text
README.md
└── docs/00-roadmap.md
    ├── projects/README.md
    ├── docs/01-paper-syllabus.md
    ├── docs/06-bibliography.md
    ├── docs/02-vllm-plan.md
    ├── docs/03-sglang-plan.md
    ├── docs/04-troubleshooting.md
    └── docs/05-open-source-playbook.md
```

## 仓库结构

```text
infra-basic/
├── README.md
├── docs/
│   ├── 00-roadmap.md
│   ├── 01-paper-syllabus.md
│   ├── 02-vllm-plan.md
│   ├── 03-sglang-plan.md
│   ├── 04-troubleshooting.md
│   ├── 05-open-source-playbook.md
│   └── 06-bibliography.md
└── projects/
    └── README.md
```

## 学习原则

```text
先跑通 → 再复现 → 再 benchmark → 再读源码 → 再改代码 → 再贡献 PR
```

不要一开始直接啃 CUDA kernel、分布式部署或大规模生产架构。先把单请求生成、batch、prefill/decode、KV cache、continuous batching、prefix cache 这些主路径建立起来。

## 最小硬件建议

| 环境 | 可以做什么 |
|---|---|
| 无 GPU | tokenizer、toy decoding、论文、源码阅读、API demo |
| 8GB-16GB GPU | 0.5B-1.5B 模型基础推理、toy server、轻量 vLLM/SGLang 实验 |
| 24GB+ GPU | 更完整的 benchmark、prefix cache、long context、quantization 实验 |
| 多 GPU | tensor parallel、pipeline parallel、PD disaggregation、分布式 serving |

## 核心评价指标

学习过程中持续记录这些指标，而不是只看“能不能跑”：

- TTFT: Time To First Token
- ITL / TPOT: Inter-Token Latency / Time Per Output Token
- E2E latency
- requests/s
- output tokens/s
- total tokens/s
- GPU memory usage
- GPU utilization
- 模型、commit、启动参数、benchmark workload
