# Decision Rules v0.1

## Decision vocabulary

| Decision | Meaning | Default route |
|---|---|---|
| PASS | Required checks are met; proceed | next role |
| WARN | A bounded risk or missing non-critical detail exists | proceed with recorded follow-up, or human review if material |
| FAIL | The role’s output cannot satisfy its contract | RETURN to role owner |
| BLOCK | Safety, rights, policy, authorization, or critical evidence prevents progress | STOP |

## Evidence vocabulary

| Label | Use |
|---|---|
| FACT | observed, supplied, or cited directly |
| INFERENCE | reasoned reading of facts |
| HYPOTHESIS | proposed explanation or experiment |
| UNKNOWN | not available or not verified |

Never turn `UNKNOWN` into a plausible-looking fact just to advance a stage.

## Creation route

```text
01 Audience
  → 02 Topic
  → 03 Strategy / Promise
  → 04 Format
  → 05 Packaging
  → 06 Script
  → 07 Retention
  → 08 Production
  → 09 Policy
  → 10 Publish Package
  → READY_TO_PUBLISH
  → explicit user authorization
```

`TEST` is a valid topic outcome when evidence is incomplete but a low-cost validation can answer the question. `HOLD` means do not spend production effort yet. `REJECT` means the topic is not a fit under current evidence or constraints.

## Return rules

| Finding | Return to |
|---|---|
| Audience is vague or invented | 01 Audience |
| Demand / competition evidence is missing | 02 Topic |
| Promise cannot be delivered | 03 Strategy |
| Title + thumbnail create a different expectation from the video | 05 Packaging |
| Script structure does not serve the promise | 06 Script |
| Redundancy, delayed payoff, or unsupported retention tactic | 06 Script / 07 Retention |
| Shot plan cannot express the script | 08 Production |
| Rights, disclosure, safety, or monetization risk | 09 Policy; BLOCK when critical |
| Publish metadata is incomplete | 10 Publish Planner |

## Automation levels

- `AUTO`: deterministic checks, formatting, low-risk clarity edits, and routing after PASS.
- `RETURN`: create a new revision and send only the affected contract upstream.
- `HUMAN`: request a decision for strategic forks, material unknowns, rights ownership, high-risk policy, or external publication.

## Checkpoints and rollback

| Checkpoint | Minimum contents | Recovery |
|---|---|---|
| CP1 | Audience + Topic + Promise | revise 01–03 only |
| CP2 | Format + Packaging | revise 04–05 only |
| CP3 | Script + Retention | revise 06–07 only |
| CP4 | Production + Policy | revise 08–09 only |
| CP5 | Publish snapshot | post-publish changes create a new snapshot |

On provider failure: retry → compatible fallback → manual brief. On agent/role failure: preserve prior checkpoint and retry the local role. On rollback: retain old and new versions, record the reason, and never erase the evidence chain.

## Learning route

```text
11 Analytics Reader
  → enough data?
      no: COLLECT / UNKNOWN
      yes: 12 Diagnosis
  → 13 Next-video Planner
  → KEEP / CHANGE / TEST / NEXT VIDEO
```

Use one primary experiment variable where possible. Do not claim causality from a single noisy snapshot. Low-confidence diagnosis produces a minimal test, not a confident rewrite of the whole channel.

## State vocabulary

```text
DRAFT → READY → RUNNING → WARN / FAILED / BLOCKED
READY_TO_PUBLISH → user authorization → PUBLISHED
PUBLISHED → MEASURING → DIAGNOSED → CLOSED
```

The state is a trace of work, not a professional judgment. The Orchestrator routes based on role outputs and evidence; it does not replace those roles.
