# Agent Ops 对齐契约 v0.1

本文件把共享底座的运行状态、证据与收敛语义映射到 YouTube 工作台。它是运行契约，不是新的 Skill，也不创建新的执行器。

## 构建决策记录

```text
真实任务：让现有本地 YouTube WebUI 具备可追溯的 Agent Ops Run 状态与证据语义。
最近能力：现有 HTML + localStorage 草稿；sayelf-base Agent Ops 对齐；生态中的 LangGraph checkpoint/HITL 与 Agent Skills 渐进披露仅作比较。
Step 0 判定：Integrate
Execution Verdict：GO
可度量差异：新增 append-only 事件、结果版本和字段级证据引用；不增加运行时依赖、不产生网络请求。
成功证据：Agent Ops 合约测试通过；浏览器提交一次入口后可重建 RUN_CREATED → NEEDS_REVIEW 事件链；语言切换不新增结果版本。
最小内核：本地 Run Ledger + 状态派生 + 结果版本事件 + 项目契约文档。
插件边界：未来执行器、Provider、审批与跨岗位 follow-up；本版本不接入。
本地优先：Run Ledger、草稿、规则与结果全部留在浏览器本地；不允许自动上云。
数据分级：创作者输入为 Internal/Sensitive/Restricted/Unknown；Ledger 只存字段名与证据标签；文档为 Public/Project Internal。
是否公开发布：否；本次只更新本地交付包。
外发计划：N/A；无外部传输。
状态/检查：由事件链派生；入口选择、执行开始、草稿保存、结果版本或失败时追加事件。
观测边界：FACT/INFERENCE/HYPOTHESIS/UNKNOWN 仍由结果模板标记；运行事件只记录发生过的动作，不把建议升格为事实。
演进/验证/回滚：保留旧压缩包；先跑静态合同测试和浏览器回归，再更新 zip；失败可恢复上一版项目目录与压缩包。
WebUI：Required；普通创作者需要 Open → Input → Execute → Result，内部事件隐藏。
最简实现：内联 JavaScript + localStorage append-only ledger + Markdown 契约，无新框架。
明确不做：Agent Ops executor、自动子工作流、云端 Ledger、审批中心、COMPLETED/CONVERGED/PROMOTED 伪完成、LangGraph 集成。
```

## 运行对象

一次入口操作对应一个本地 `Run`：

```text
run_id
mode
status
result_version
events[]
follow_up
next_action
```

原始创作者输入继续保存在现有本地草稿存储中；Run Ledger 只保存字段级证据引用和状态事件，不复制输入正文。

## Agent Ops 映射

| Agent Ops 概念 | 本工作台实现 | 边界 |
|---|---|---|
| WorkItem | 六个普通用户入口 + 当前 `run_id` | 不等于已完成的视频生产任务 |
| Router | `mode` → Creation Engine / Learning Engine 路径 | 只路由，不替代专业判断 |
| MinimumPlanner | 当前入口的字段契约与结果模板 | 只生成最小工作草案 |
| StateEngine | 本地 append-only Run Ledger | 当前状态从事件顺序派生 |
| Evidence | `field:*`、`result:rendered`、`draft:localStorage` | 不保存输入正文 |
| Follow-up | `follow_up: NOT_CREATED` | 未创建的下游工作不得声称已调度 |

## 状态与事件

当前最小路径：

```text
RUN_CREATED
  → ROUTED
  → EXECUTE_STARTED
  → DRAFT_SAVED | DRAFT_SAVE_FAILED
  → RESULT_VERSIONED
  → NEEDS_REVIEW
```

允许的运行状态：

```text
READY / RUNNING / NEEDS_REVIEW / BLOCKED / FAILED / COMPLETED
```

当前版本不会自动写入 `COMPLETED`、`CONVERGED` 或 `PROMOTED`：结果仍需创作者检查，发布、版权、政策与方向决策仍是 Human-in-the-loop。

## 证据、版本与恢复

- 重要状态变化追加事件，不覆盖历史。
- 结果修改生成新的 `result_version`；语言切换不产生新的结果版本。
- 每个结果事件包含字段级证据引用、下一动作和 `NOT_CREATED` follow-up 标记。
- 当前版本没有 Provider 执行器或跨岗位自动恢复；失败时不得伪装为成功，后续扩展必须先增加失败事件、检查点、重跑和重新验证证据。
- 本地 Ledger 最多保留最近 20 次 Run，属于浏览器本地数据，可随项目版本回滚。

## 普通用户视图

用户只看到草案、当前状态、风险标签和下一步；事件 ID、Ledger JSON、Provider 细节和状态机实现不进入默认界面。

## 不在本版本构建

Agent Ops executor、自动创建子工作流、人工审批中心、跨设备同步、云端 Ledger、LangGraph 集成、自动发布和公开发布。
