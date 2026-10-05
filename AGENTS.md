# Project rules — sayelf-youtube-workflow

## Purpose

This folder is an independent YouTube-only Skill. Keep its platform logic and professional decisions separate from other platform workflows.

## Non-negotiable boundaries

- Preserve the 13-role split. A role may request a return, not silently take over another role.
- Keep Creation Engine and Learning Engine separate.
- Distinguish `FACT`, `INFERENCE`, `HYPOTHESIS`, and `UNKNOWN` in every evidence-bearing output.
- Use `PASS`, `WARN`, `FAIL`, and `BLOCK` as execution decisions; a policy `BLOCK` always wins over growth advice.
- Treat `READY_TO_PUBLISH → user authorization → publish` as a hard boundary. This v0.1 has no upload capability.
- Providers are adapters. Do not hard-code an image, video, voice, research, analytics, or API vendor into core judgment.
- GSAP Motion Layer is a shared capability, not a new Skill. Call the shared `window.SayelfMotion` boundary; do not add a project-local GSAP Skill, duplicate an animation foundation, or call a vendor CDN from the offline HTML.
- Align runtime changes with `workflow/agent-ops.md`: append events, link material transitions to local evidence, version results, preserve failure lineage, and keep uncreated follow-ups as `NOT_CREATED`. Do not claim `COMPLETED`, `CONVERGED`, or `PROMOTED` without the required human evidence.
- Preserve versions and reasons. Rollback selects a prior version; it does not delete history.

## Editing rules

- Prefer the smallest local change that improves a verifiable behavior.
- Keep the HTML dependency-free and usable offline.
- Keep the Chinese/English toggle complete across chrome, forms, result cards, status labels, and exported storyboard prompts.
- Do not add secrets, private creator data, tracking, remote fonts, CDN scripts, or automatic network calls.
- Update the relevant contract when changing a role, decision, policy source, state, or user-facing path.
- Before release, inspect the full output directory for credentials, personal data, local paths, and unintended network references.

## Verification

Check that the required files exist, `SKILL.md` frontmatter is valid, the HTML contains all six entry points, and each entry produces a result without a network connection. Policy links must remain official YouTube/Google Help URLs and carry a checked date.

Run `node tests/agent-ops-contract.mjs` for the local Agent Ops contract check before packaging.
