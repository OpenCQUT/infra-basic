import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LLM Infra Basic',
  description: 'CUDA-first LLM inference infrastructure learning path',
  lang: 'zh-CN',
  base: process.env.VITEPRESS_BASE ?? '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: { text: 'LLM Infra' },
    nav: [
      { text: '路线', link: '/00-roadmap' },
      { text: '推理系统', link: '/systems/overview' },
      {
        text: '开源库',
        items: [
          { text: 'Library Landscape', link: '/libraries/landscape' },
          { text: 'vLLM', link: '/02-vllm-plan' },
          { text: 'SGLang', link: '/03-sglang-plan' },
          { text: 'DeepSeek Infra', link: '/libraries/deepseek-stack' },
          { text: 'Kernel Libraries', link: '/libraries/kernel-libraries' }
        ]
      },
      { text: 'Agent', link: '/agents/landscape' },
      { text: '项目', link: '/projects' },
      { text: 'GitHub', link: 'https://github.com/OpenCQUT/infra-basic' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebar: [
      {
        text: 'Start Here',
        collapsed: false,
        items: [
          { text: 'Home', link: '/' },
          { text: 'Roadmap', link: '/00-roadmap' },
          { text: 'One Month Plan', link: '/08-one-month-plan' },
          { text: 'Troubleshooting', link: '/04-troubleshooting' }
        ]
      },
      {
        text: 'Inference System',
        collapsed: false,
        items: [
          { text: 'System Overview', link: '/systems/overview' },
          { text: 'Prefill / Decode', link: '/systems/prefill-decode' },
          { text: 'KV Cache System', link: '/systems/kv-cache' },
          { text: 'Scheduler & Batching', link: '/systems/scheduler-batching' },
          { text: 'Serving API & Streaming', link: '/systems/serving-api-streaming' },
          { text: 'Benchmark & Profiling', link: '/systems/benchmark-profiling' },
          { text: 'Distributed Inference', link: '/systems/distributed-inference' },
          { text: 'Production Serving', link: '/systems/production-serving' },
          { text: 'Operator / Kernel', link: '/07-operator-kernels' },
          { text: 'CUDA GPU Programming', link: '/09-cuda-gpu-programming' }
        ]
      },
      {
        text: 'Open Source Libraries',
        collapsed: false,
        items: [
          { text: 'Open Source Library Landscape', link: '/libraries/landscape' },
          {
            text: 'Serving Engines',
            collapsed: false,
            items: [
              { text: 'vLLM Study Plan', link: '/02-vllm-plan' },
              { text: 'SGLang Study Plan', link: '/03-sglang-plan' },
              { text: 'TensorRT-LLM', link: '/libraries/tensorrt-llm' },
              { text: 'TGI / LMDeploy', link: '/libraries/tgi-lmdeploy' },
              { text: 'llama.cpp / ggml', link: '/libraries/llama-cpp-ggml' }
            ]
          },
          {
            text: 'DeepSeek / Kernels',
            collapsed: false,
            items: [
              { text: 'DeepSeek Infra Stack', link: '/libraries/deepseek-stack' },
              { text: 'Kernel Libraries', link: '/libraries/kernel-libraries' },
              { text: 'Dynamo / Triton Server', link: '/libraries/dynamo-triton' }
            ]
          }
        ]
      },
      {
        text: 'Agent Internals',
        collapsed: true,
        items: [
          { text: 'Agent / Codex Internals', link: '/10-agent-codex' },
          { text: 'Popular Agent Landscape', link: '/agents/landscape' },
          {
            text: 'Terminal / IDE Agents',
            collapsed: true,
            items: [
              { text: 'OpenAI Codex', link: '/agents/openai-codex' },
              { text: 'Claude Code', link: '/agents/claude-code' },
              { text: 'Gemini CLI', link: '/agents/gemini-cli' },
              { text: 'Aider', link: '/agents/aider' },
              { text: 'Cline / Roo Code', link: '/agents/cline-roo' },
              { text: 'OpenCode / Continue', link: '/agents/opencode-continue' }
            ]
          },
          {
            text: 'Cloud / Research Agents',
            collapsed: true,
            items: [
              { text: 'GitHub Copilot Agent', link: '/agents/github-copilot-agent' },
              { text: 'OpenHands', link: '/agents/openhands' },
              { text: 'SWE-agent', link: '/agents/swe-agent' }
            ]
          },
          { text: 'Open Source Playbook', link: '/05-open-source-playbook' }
        ]
      },
      {
        text: 'Papers & Resources',
        collapsed: true,
        items: [
          { text: 'Paper Syllabus', link: '/01-paper-syllabus' },
          { text: 'Bibliography', link: '/06-bibliography' }
        ]
      },
      {
        text: 'Projects',
        collapsed: true,
        items: [
          { text: 'Projects', link: '/projects' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenCQUT/infra-basic' }
    ]
  }
})
