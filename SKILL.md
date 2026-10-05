---
name: sayelf-youtube-workflow
description: Plan, create, publish-check, analyze, and improve YouTube videos through an evidence-bounded 13-role workflow. Use for YouTube only; do not route other platforms here.
metadata:
  version: 0.1.0
  display_name: Sayelf YouTube Workflow
---

# Sayelf YouTube Workflow v0.1

This skill is a YouTube-specialized workflow for ordinary creators. It turns an idea or a post-publication evidence set into a grounded next action while keeping platform knowledge, professional responsibilities, policy checks, and provider tools separate.

## Scope

Handle only YouTube:

- audience and topic intelligence;
- content promise and format choice;
- long-form and Shorts planning;
- title and thumbnail packaging;
- script, retention, and production planning;
- policy and rights preflight;
- publishing package preparation (not silent publication);
- analytics reading, diagnosis, experiments, and the next-video decision.

Do not import rules from TikTok, WeChat Channels, Instagram, Xiaohongshu, or other platforms. Generic image/video generation, ASR, TTS, editing, research, and YouTube API capabilities are provider adapters, not YouTube professional judgment.

## Human entry points

Route the request to one of six simple paths:

1. Create a new video → Creation Engine, long-form default.
2. Create a Short → Creation Engine, Shorts route.
3. Analyze an existing video → Learning Engine.
4. Optimize title and thumbnail → Packaging role, then promise consistency check.
5. Analyze a channel → Analytics Reader, Diagnosis, and Next-video Planner.
6. Plan the next video → Learning Engine, using verified channel evidence when available.

The ordinary experience is `Open → Input → Execute → Result`. Keep JSON, APIs, state-machine language, provider parameters, and logs behind the interface unless the user is explicitly asking for implementation detail.

## Shared Motion Layer

Reserve the GSAP Motion Layer by default. GSAP is a shared capability, not a new Skill, and must not be re-created as a project-local Skill or animation foundation.

- User-facing modules call `window.SayelfMotion`; they do not call `gsap` directly.
- The shared boundary may expose semantic helpers such as `reveal`, `to`, and `timeline`.
- The offline HTML must remain fully usable when GSAP is absent; native CSS transitions or no motion are valid fallbacks.
- A host may inject GSAP or a compatible shared implementation. Do not add a CDN, remote font, or automatic network loader to the offline artifact.
- Respect `prefers-reduced-motion`; motion is progressive enhancement, never a workflow dependency.

## Frozen architecture

Six layers are stable for v0.1:

| Layer | Responsibility |
|---|---|
| L1 Platform Logic | YouTube discovery surfaces, recommendation signals, search, satisfaction, and external factors |
| L2 Professional Workflow | 13 single-responsibility roles |
| L3 Execution Contract | Input → checks → decision → output → evidence → handoff |
| L4 Decision Rules | PASS / WARN / FAIL / BLOCK and routing |
| L5 Data & State | One Video Experience, versions, evidence, unknowns, snapshots |
| L6 Orchestration & Recovery | automatic progression, local return, checkpoints, retry/fallback, rollback |

## The 13 professional roles

### Creation Engine

01 Audience Intelligence → 02 Topic Intelligence → 03 Content Strategy → 04 Format Router → 05 Packaging → 06 Script Architecture → 07 Retention Engineering → 08 Production Planner → 09 Policy Guard → 10 Publish Planner.

### Learning Engine

11 Analytics Reader → 12 Performance Diagnosis → 13 Next-video Planner → return to Audience or Topic when the evidence calls for it.

The next role may recommend a revision, but may not silently overwrite the previous role's professional conclusion. Return the work to the responsible role and create a new version.

## Evidence and state contract

Use one `Video Experience` per video. Keep the identity, audience, topic, promise, format, packaging, script, retention, production, policy, publish snapshot, analytics, diagnosis, experiment, and outcome connected by one stable video identifier.

Every meaningful statement must be labeled:

- `FACT` — directly supplied by the creator or observed in a source/analytics snapshot;
- `INFERENCE` — a reasoned interpretation of facts;
- `HYPOTHESIS` — a testable explanation that is not yet proven;
- `UNKNOWN` — missing or unverified information that must not be invented.

Use `PASS`, `WARN`, `FAIL`, and `BLOCK` for execution decisions. A `WARN` can proceed only when the risk is understood and the next check is recorded. A `BLOCK` stops the flow.

## Orchestration and recovery

The Orchestrator only selects the current role, checks entry conditions, routes results, saves versions, and records evidence. It does not decide whether a topic, title, or script is professionally good.

- `AUTO`: complete normal checks, formatting, low-risk repairs, and local compression.
- `RETURN`: send a failed professional handoff back to its owner (for example, a broken promise returns to Strategy or Packaging).
- `HUMAN`: stop for high policy risk, unclear rights, a strategic fork, missing key facts, or publish authorization.

Save checkpoints at:

- CP1: audience + topic + promise;
- CP2: format + packaging;
- CP3: script + retention;
- CP4: production + policy;
- CP5: immutable publish snapshot.

Provider failure is local: retry the same adapter, then use a compatible fallback, then emit a manual brief. Do not regenerate validated upstream work. Rollback means selecting a prior version with a reason; it is never deletion.

Publication ends at `READY_TO_PUBLISH` until the user explicitly authorizes the external action.

## Agent Ops alignment

Map each local entry operation to `WorkItem → Router → MinimumPlanner → StateEngine` without adding a second runtime. The HTML keeps an append-only local Run Ledger with `RUN_CREATED`, `ROUTED`, `EXECUTE_STARTED`, `DRAFT_SAVED`, `RESULT_VERSIONED`, and `NEEDS_REVIEW` events. Evidence is field-level and local; result versions remain traceable; uncreated cross-role follow-ups remain `NOT_CREATED`.

Do not claim `COMPLETED`, `CONVERGED`, or `PROMOTED` merely because a draft rendered. Keep `NEEDS_REVIEW` until an explicit human review/acceptance path exists. Do not add an executor, approval center, cloud ledger, or child workflow creator in v0.1. Read [workflow/agent-ops.md](workflow/agent-ops.md) for the project mapping.

## Local-first and policy freshness

Run deterministic parsing, state, versioning, evidence labeling, and drafting locally where possible. Keep local files, private analytics, credentials, personal data, and unpublished media inside the local trust boundary. Never place secrets in prompts, logs, public repositories, or release artifacts.

Read [rules/youtube-platform.md](rules/youtube-platform.md) for current platform facts and [rules/policy-guard.md](rules/policy-guard.md) for the policy preflight. Re-check official sources before a high-risk or time-sensitive publish decision; record the source URL, checked date, finding, and decision.

## Required response shape

Return the smallest useful result:

1. What is ready now.
2. The evidence behind it, labeled.
3. One risk or unknown that matters.
4. The next action, or the exact human decision required.

For the full role contracts, read [workflow/creation-engine.md](workflow/creation-engine.md) or [workflow/learning-engine.md](workflow/learning-engine.md) only for the requested path. Use [templates/outputs.md](templates/outputs.md) for output shape.
