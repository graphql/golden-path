---
title: Batched execution
sidebar_position: 10
---

Resolve related GraphQL field work in batches by default, so list-heavy queries
do not degrade into per-item backend calls.

## Applies to

- GraphQL servers
- Execution engines and runtimes
- Gateways that execute resolvers

## Why this should be default

N+1 is one of the most common sources of GraphQL performance failure. Batched
execution makes the safe behavior the easiest behavior.

## Solves

- [N+1 queries](/problems/n-plus-1)

## Implementing patterns

- [Batch resolvers](/patterns/batch-resolvers)
- TODO: Planning (e.g. Grafast)

[Batching and caching (DataLoader)](/patterns/batching-caching), when used
consistently, can also be used to solve this problem. However, it is not
included as part of the golden path because it requires users to opt-in to its
usage in each position rather than making it the default experience, and if not
used consistently can result in small batch sizes and related poor performance.
