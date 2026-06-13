---
layout: doc
aside: false
sidebar: false
prev: false
next: false
---

<section class="home-shell home-landing">
<div class="home-hero">
<div class="hero-copy">
<h1>LLM Infra Basic</h1>
<p class="hero-subtitle">系统学习 LLM 推理基础设施：从 CUDA 与推理系统原理，到 vLLM、SGLang、DeepSeek Infra、Agent runtime 和开源贡献。</p>
<div class="hero-actions">
<a class="primary-action" href="/00-roadmap">开始学习</a>
<a class="secondary-action" href="/systems/overview">查看系统概览</a>
</div>
<nav class="hero-links" aria-label="快速入口">
<a href="/libraries/landscape">开源库源码阅读</a>
<a href="/agents/landscape">Agent 源码阅读</a>
<a href="/projects">实践项目</a>
</nav>
</div>
<aside class="learning-map" aria-label="学习路线">
<div class="map-heading">
<span>学习路线</span>
<strong>5 大阶段</strong>
</div>
<a class="map-row" href="/00-roadmap">
<span class="step">01</span>
<strong>Foundations</strong>
<span>CUDA 基础、并行计算、硬件架构与性能模型</span>
<em>0 / 6</em>
</a>
<a class="map-row" href="/systems/overview">
<span class="step">02</span>
<strong>Inference System</strong>
<span>推理系统原理、KV Cache、调度与内存管理</span>
<em>0 / 8</em>
</a>
<a class="map-row" href="/libraries/landscape">
<span class="step">03</span>
<strong>Open Source Reading</strong>
<span>vLLM、SGLang、DeepSeek Infra 等源码阅读</span>
<em>0 / 12</em>
</a>
<a class="map-row" href="/agents/landscape">
<span class="step">04</span>
<strong>Agent Internals</strong>
<span>Agent runtime、工具调用、记忆与执行循环</span>
<em>0 / 7</em>
</a>
<a class="map-row" href="/projects">
<span class="step">05</span>
<strong>Projects & Practice</strong>
<span>动手实践、性能优化与开源贡献</span>
<em>0 / 10</em>
</a>
</aside>
</div>
<div class="metric-strip" aria-label="核心主题">
<a href="/systems/benchmark-profiling">
<strong>TTFT</strong>
<span>首 token 延迟</span>
</a>
<a href="/systems/benchmark-profiling">
<strong>TPOT</strong>
<span>每 token 生成时间</span>
</a>
<a href="/systems/kv-cache">
<strong>KV Cache</strong>
<span>显存与复用</span>
</a>
<a href="/systems/scheduler-batching">
<strong>Scheduler</strong>
<span>调度与 batching</span>
</a>
<a href="/libraries/kernel-libraries">
<strong>Kernel</strong>
<span>attention / GEMM</span>
</a>
<a href="/libraries/deepseek-stack">
<strong>MoE</strong>
<span>expert parallel</span>
</a>
</div>
<div class="section-grid">
<section class="home-panel systems-panel">
<div>
<h2>Systems</h2>
<p>先建立推理系统概念，再去读具体框架源码。</p>
</div>
<ul>
<li><a href="/systems/overview">推理系统概览</a></li>
<li><a href="/systems/prefill-decode">Prefill / Decode</a></li>
<li><a href="/systems/kv-cache">KV Cache System</a></li>
<li><a href="/systems/scheduler-batching">Scheduler & Batching</a></li>
<li><a href="/systems/serving-api-streaming">Serving API & Streaming</a></li>
<li><a href="/systems/distributed-inference">Distributed Inference</a></li>
</ul>
</section>
<section class="home-panel libraries-panel">
<div>
<h2>Libraries</h2>
<p>把热门开源库当作系统案例阅读，而不是只学启动命令。</p>
</div>
<ul>
<li><a href="/02-vllm-plan">vLLM</a></li>
<li><a href="/03-sglang-plan">SGLang</a></li>
<li><a href="/libraries/deepseek-stack">DeepSeek Infra</a></li>
<li><a href="/libraries/tensorrt-llm">TensorRT-LLM</a></li>
<li><a href="/libraries/tgi-lmdeploy">TGI / LMDeploy</a></li>
<li><a href="/libraries/kernel-libraries">Kernel Libraries</a></li>
</ul>
</section>
<section class="home-panel agents-panel">
<div>
<h2>Agents</h2>
<p>研究 coding agent 的 runtime，而不是 CLI 使用手册。</p>
</div>
<ul>
<li><a href="/10-agent-codex">Agent / Codex Internals</a></li>
<li><a href="/agents/openai-codex">OpenAI Codex</a></li>
<li><a href="/agents/claude-code">Claude Code</a></li>
<li><a href="/agents/gemini-cli">Gemini CLI</a></li>
<li><a href="/agents/openhands">OpenHands</a></li>
<li><a href="/agents/swe-agent">SWE-agent</a></li>
</ul>
</section>
<section class="home-panel practice-panel">
<div>
<h2>Practice</h2>
<p>用实验、benchmark、源码笔记和 PR 形成学习闭环。</p>
</div>
<ul>
<li><a href="/08-one-month-plan">一月计划</a></li>
<li><a href="/projects">实践项目</a></li>
<li><a href="/systems/benchmark-profiling">Benchmark & Profiling</a></li>
<li><a href="/05-open-source-playbook">开源贡献路径</a></li>
<li><a href="/01-paper-syllabus">论文阅读路径</a></li>
<li><a href="/04-troubleshooting">Troubleshooting</a></li>
</ul>
</section>
</div>
<section class="route-band">
<h2>推荐主线</h2>
<div class="route-flow">
<span>PyTorch CUDA</span>
<span>Operator / Kernel</span>
<span>Prefill / Decode</span>
<span>KV Cache</span>
<span>Scheduler</span>
<span>vLLM / SGLang</span>
<span>DeepSeek Infra</span>
<span>Agent Internals</span>
<span>First PR</span>
</div>
</section>
</section>
