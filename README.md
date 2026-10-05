# sayelf-youtube-workflow v0.1

一个只服务 YouTube 的专业创作、发布前检查与复盘 Skill。它把复杂的专业协作藏在后台，普通创作者只需要从六个入口中选择一个。

## 六个入口

- 创作新视频
- 创作 Shorts
- 分析已有视频
- 优化标题封面
- 分析频道
- 规划下一条视频

打开 `sayelf-youtube-workflow.html` 即可离线体验，右上角可在中文与 English 之间切换。顶部品牌区使用 `assets/sayelf-logo.png` 作为 SAYELF Logo。页面不依赖外部脚本、账号或 API；本地输入只保存在当前浏览器设备上。它输出的是可验证的工作草案，不会自动发布到 YouTube。

界面优化保持同一条低认知负担路径：入口栏固定在桌面端左侧，输入和结果在右侧顺序展开；移动端自动改为单列。按钮、输入框和语言切换均提供清晰的键盘焦点反馈。

## 共享动效能力

项目默认预留 GSAP Motion Layer。GSAP 是共享能力，不是新的 Skill；页面通过 `window.SayelfMotion` 调用 `reveal`、`to` 或 `timeline` 等语义方法，不直接绑定 GSAP 实现。当前离线 HTML 不加载 GSAP，宿主在确实需要动效时再注入共享运行时，并始终尊重减少动态效果设置。

## Build Decision Record

```text
Idea / real task:
为 YouTube 创作者提供从创意到发布准备、再到数据复盘与下一条视频决策的独立工作流。

Closest existing projects or capabilities:
YouTube Studio / YouTube Help；TubeAssistant 等全流程自动化项目；n8n 的 YouTube 内容自动化模板。

Step 0 decision:
Differentiate

Measurable improvement or differentiator:
零运行时依赖的本地 HTML；六个普通创作者入口；13 个单一职责工位；证据标签、状态判定、局部恢复、回滚与发布授权边界写入同一工作流。

Success measure and required evidence:
十个指定文件存在；Skill frontmatter 可被校验；六个入口均能完成输入到结果；关键规则、13 工位、两个 Engine、PASS/WARN/FAIL/BLOCK、证据分类和发布边界均可追溯。

Minimum Core:
SKILL.md、规则层、Creation/Learning Engine、输出模板、离线 HTML 入口。

Plugin boundaries:
Research、Image、Video、TTS、ASR、Editing、YouTube API、Analytics 均为可替换 Adapter；不进入 YouTube 专业判断层。

Local-first boundary:
规则、解析、草案、状态、版本和本地 UI 默认本地执行。

Data classification and local trust boundary:
Public 官方规则链接可公开；创作者的本地素材、频道数据、未发布内容、个人信息和凭据为 Internal/Sensitive/Restricted，留在本地。

GitHub/public release decision:
Authorized for this v0.1 upload by the user — only the reviewed project source and public-facing documentation are transferred; local creator data, credentials, and generated browser state are excluded.

External transfer plan:
Public GitHub repository only；不调用外部 API，不上传创作者数据。

State, change signals, and next-check rule:
状态由当前工位、验证结果、数据完整度和政策更新时间驱动；重要政策或发布动作立即复核，稳定草案只在输入变化或用户请求时复核。

Observation / inference / hypothesis / fact boundary:
所有事实、推断、假设、未知分开标记，未知不能被填空式编造。

Evolution, validation, canary, version, and rollback plan:
规则记录 checked date/source；改动使用 v0.1.x；先静态校验和本地 UI 试跑，再小范围使用；保留旧文档与输出版本，可按版本回滚。

WebUI decision:
Required — 普通创作者需要低认知负担的输入、执行和结果界面。

Default WebUI path:
Open → Input → Execute → Result

Simplest reliable implementation:
Markdown contracts + one self-contained HTML/CSS/JS file，零外部依赖；以共享 Motion Layer 作为可选宿主能力边界。

Explicitly not building:
自动上传、YouTube OAuth、实时爬取、万能爆款评分器、跨平台规则合并、视频生成器、剪辑器、ASR/TTS 引擎、云端数据库、新的 GSAP Skill 或重复的动效底座。
```

## 目录

```text
sayelf-youtube-workflow-v0.1/
├─ SKILL.md
├─ README.md
├─ AGENTS.md
├─ rules/
│  ├─ youtube-platform.md
│  ├─ decision-rules.md
│  └─ policy-guard.md
├─ workflow/
│  ├─ agent-ops.md
│  ├─ creation-engine.md
│  └─ learning-engine.md
├─ templates/
│  └─ outputs.md
├─ tests/
│  └─ agent-ops-contract.mjs
├─ assets/
│  └─ sayelf-logo.png
└─ sayelf-youtube-workflow.html
```

## 使用方式

1. 双击 HTML 或在浏览器中打开。
2. 选择一个入口，输入主题、素材或数据。
3. 点击“生成工作草案”。
4. 查看结果、风险和下一步。

专业实现者可直接加载 `SKILL.md`。按请求读取对应的 `workflow/` 文档，避免把全部细节暴露给普通用户。

## v0.1 验证边界

已覆盖：离线入口、中英文切换、六条用户路径、最小创作草案、可单独下载的长视频/Shorts 分镜 Prompt、包装候选、数据诊断草案、政策提醒、证据标签、无自动发布。

Agent Ops 对齐：每次入口操作在浏览器本地追加 Run Ledger 事件，保留状态、证据引用、结果版本和 `NOT_CREATED` follow-up；语言切换不会伪造新的结果版本。当前不声称 `COMPLETED`、`CONVERGED` 或 `PROMOTED`。

未覆盖：真实 YouTube API 数据、账号授权、视频文件解析、真实缩略图生成、实时政策同步。发布前应以官方规则页面和创作者自己的 YouTube Studio 信息做最终确认。
