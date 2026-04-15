---
title: Under-fetching
---

Under-fetching happens when insufficient data is requested, and thus additional
round-trips are needed to satisfy all required data - often visualized as a
request waterfall.

## Symptoms

- Request amplification - repeated follow-up queries to fill in missing data
- Increased latency as the network roundtrips in the waterfall take significant
  time (for client-server), or the serialization/deserialization costs add up
  (for server-storage).
- Progressive (and slow) rendering - data requirements for the next layer are
  only discovered after the previous layer has been fetched
- Increased backend load from handling significantly more requests

## Why it matters

Under-fetching makes the backend do more work than necessary, increasing hosting
costs. Request waterfalls can severely increase latency, giving users a bad
experience.

## Practices that address this

- [Query componentization](/practices/query-componentization)

## Patterns that address this

- [Fragment colocation](/patterns/fragment-colocation)
