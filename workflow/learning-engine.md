# Learning Engine v0.1

Learning starts after a video or channel has evidence. It reads first, diagnoses second, and changes one meaningful thing at a time.

## 11 — Analytics Reader

Input may include a YouTube Studio export, a manually copied snapshot, or a creator description. Record only what is present:

```text
Video / channel identity
Time window
Views and impressions
Click-through rate when available
Average view duration / retention when available
Traffic sources
Returning / new viewers when available
Likes, comments, shares, satisfaction signals when available
```

Output an evidence report with `FACT` values, source/time window, missing fields as `UNKNOWN`, and no causal explanation. If data is too sparse or the comparison window is mismatched, decide `COLLECT` instead of diagnosing.

## 12 — Performance Diagnosis

Use an iceberg sequence:

```text
surface result
  → distribution / impressions
  → appeal / click
  → opening and retention
  → satisfaction / continuation
  → traffic source and audience context
  → topic, competition, promise, packaging, delivery
  → root-cause hypothesis
  → smallest useful action
```

Examples of bounded reasoning:

| Observation (FACT) | Possible inference | Testable hypothesis |
|---|---|---|
| impressions are low | distribution or topic context may be limiting | a narrower audience/topic fit test may raise qualified impressions |
| impressions present, clicks weak | packaging may not earn appeal | paired title/thumbnail revision may improve qualified clicks |
| early drop after click | opening may not deliver expectation | move proof/payoff earlier and compare early retention |
| middle drop with stable opening | pacing, redundancy, or progression may be weak | compress one repeated section and compare the same segment |
| retention strong, reach limited | topic ceiling or competition may constrain scale | test a related broader angle without changing the channel promise |

Do not state a cause unless the evidence supports it. A single metric never proves a causal story.

## 13 — Next-video Planner

Return only four decisions:

```text
KEEP   what is supported by evidence
CHANGE the single largest supported problem
TEST   one measurable variable
NEXT VIDEO a concrete idea that can answer the test
```

Every recommendation carries confidence and the evidence it depends on. When confidence is low, choose a minimal test or collect more data. Do not rewrite the entire channel from one underperforming upload.

## Versioned learning loop

```text
Published snapshot
  → measuring snapshot
  → evidence report
  → diagnosis vN
  → experiment vN
  → outcome
  → channel knowledge update
```

Keep the packaging, script, retention, production, policy, and publish snapshots that were actually used. Human overrides are evidence too: record the recommendation, the user choice, the reason, and the observed outcome.

## State and next check

- `PUBLISHED`: wait for an adequate observation window or a meaningful creator request.
- `MEASURING`: check when the chosen metric window changes, not by fixed high-frequency polling.
- `DIAGNOSED`: revisit when a new snapshot, comparison, policy change, or experiment result arrives.
- `UNKNOWN`: collect the smallest missing field that can change the decision.
