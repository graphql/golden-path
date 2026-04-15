---
title: Over-fetching
---

Over-fetching happens when data is requested than is actually needed. This can
occur between the client and the GraphQL schema, and/or between the schema and
the backend datastores.

## Symptoms

- Large responses with many unused fields
- Large serialization/deserialization/compression/decompression costs
- Higher latency
- High memory and CPU usage
- Increased backend load
- Cache bloat

## Why it matters

Over-fetching makes the backend do more work than necessary, increasing hosting
costs and response latency.

## Practices that address this

- [Query componentization](/practices/query-componentization)

## Patterns that address this

- [Fragment colocation](/patterns/fragment-colocation)
