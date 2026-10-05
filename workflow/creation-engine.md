# Creation Engine v0.1

Creation turns an idea into a publish-ready package without publishing it. Each role has one job and hands off a bounded artifact.

## Shared contract

Every handoff contains: input used, checks performed, output, evidence labels, confidence, unknowns, decision, owner, version, and next handoff. The promise is frozen at CP1; downstream roles may request a revision but may not silently change it.

## Role contracts

| # | Role | Input | Must check | Output | Handoff |
|---|---|---|---|---|---|
| 01 | Audience Intelligence | idea, channel context | who/why/need/payoff/discovery context | Audience Brief | 02 |
| 02 | Topic Intelligence | Audience Brief + idea | topic interest, competition, freshness, fit, evidence | GO / TEST / HOLD / REJECT + Topic Brief | 03 |
| 03 | Content Strategy | Audience + Topic | value, unique angle, promise, payoff | Content Promise | 04 |
| 04 | Format Router | Promise + proof needs | complexity, density, story development, intent | LONG_FORM / SHORTS + reason | 05 |
| 05 | Packaging | Promise + audience | title/thumbnail expectation aligns with opening and payoff | paired packaging variants | 06 |
| 06 | Script Architecture | Promise + Packaging + Format | order, progression, proof, payoff | sectioned script / beat sheet | 07 |
| 07 | Retention Engineering | Script + promise | delayed value, redundancy, pacing, false suspense | retention notes by section | 08 |
| 08 | Production Planner | Script + retention | visual purpose, shot coverage, asset needs | shot/storyboard plan | 09 |
| 09 | Policy Guard | full package + asset rights | guidelines, copyright, monetization, reused/inauthentic, disclosure | policy record + PASS/WARN/BLOCK | 10 |
| 10 | Publish Planner | approved package | title, description, chapters, captions, playlist, disclosure, publish settings | READY_TO_PUBLISH snapshot | user authorization |

## Long-form route

Use a clear promise, a fast but truthful opening, progressive proof/story, meaningful transitions, and a payoff that closes the expectation created by packaging. Plan the next watch only when it serves the viewer rather than padding metadata.

## Shorts route

Shorts are not long-form cutdowns by default. Prioritize immediate context, a visible or audible stop, fast progression, compact payoff, and a reason to rewatch or continue. Keep the same audience/promise/evidence contract, but use a Shorts-specific beat sheet and policy check.

## Packaging consistency test

```text
Title + thumbnail create expectation A
Opening and video deliver B
A ≈ B → PASS
A materially differs from B → FAIL → return to Packaging or Strategy
```

Curiosity is allowed; deception is not. Keep variants paired so later analytics can identify exactly what was tested.

## Provider boundary

The Production Planner may specify `asset requirement`, `visual purpose`, `shot description`, and `voice/caption intent`. It must not depend on a particular image, video, TTS, ASR, or editing provider. Adapters translate this intent into tool-specific parameters and return evidence of what was actually produced.

## Entry and exit conditions

Start with at least one idea and an explicit `UNKNOWN` for anything not supplied. Exit only when CP4 is saved and Policy Guard is not `BLOCK`. Publish Planner outputs a snapshot and waits for the creator’s explicit authorization.
