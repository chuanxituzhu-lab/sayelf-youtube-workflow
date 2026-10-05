# YouTube Platform Logic v0.1

> Platform facts are not performance guarantees. This file is a policy-aware decision input, not an “algorithm hack”. Checked 2026-09-14.

## What the platform says

YouTube describes recommendations as personalized. Signals include watch history, search history, subscriptions, likes, dislikes, “Not interested”, “Don’t recommend channel”, and satisfaction surveys. Different surfaces use different signals; Home is primarily personalized, Up Next uses the current video as a main signal, and Shorts Feed is personalized.

YouTube’s creator performance FAQ describes the practical chain as viewer choice, continued watching, satisfaction, and relevance to that viewer. Search is not simply a list of the most-viewed videos: it considers how well the title, description, and video content match a query and what videos drive engagement for that search.

External conditions also matter: topic interest, competition, and changes in viewer behavior or seasonality can change impressions even when a creator’s production quality is stable.

## Working model

```text
Viewer context
  → Topic / promise
  → Title + thumbnail (appeal)
  → Opening delivery
  → Engagement and progression
  → Value / story / payoff
  → Satisfaction and next watch
```

Use this as a chain of hypotheses to inspect, not as a fixed formula. Never diagnose “low views = bad video” without checking distribution, audience match, packaging, opening, delivery, and data sufficiency.

## Surface-specific questions

| Surface | First question | Evidence to prefer |
|---|---|---|
| Home | Would this audience choose it in a personalized feed? | audience context, packaging, similar-viewer performance |
| Suggested / Up Next | Does it make sense after the current video? | adjacent topic, viewer continuation, session context |
| Search | Does the video answer the query clearly and credibly? | query wording, title/description/content match, search engagement |
| Shorts Feed | Does the first moment earn attention and deliver a compact payoff? | early retention, rewatch/continuation signals, format fit |
| Subscriptions | Does it serve an existing viewer expectation? | returning viewers, recent channel promise, series continuity |

## Decision consequences

- Do not reduce YouTube to CTR, watch time, or tags in isolation.
- Keep Title + Thumbnail + Opening as one promise chain.
- Topic research must record topic interest, competition, freshness, and channel fit as evidence or unknowns.
- Shorts and long-form share audience reasoning but have different execution paths.
- Analytics reading comes before diagnosis; diagnosis comes before the next-video recommendation.
- Verified channel evidence outranks generic creator folklore. Official policy outranks growth advice.

## Official sources

- [How YouTube recommendations work](https://support.google.com/youtube/answer/16089387?hl=en)
- [YouTube performance FAQ & Troubleshooting](https://support.google.com/youtube/answer/141805?hl=en)
- [Understand external factors for YouTube’s recommendation system](https://support.google.com/youtube/answer/16558238?hl=en)

When using a current claim in a publish decision, store the URL and checked date with the decision. If a source changes, create a new policy/platform pack version instead of overwriting an old conclusion.
