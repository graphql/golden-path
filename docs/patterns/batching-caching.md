---
title: Batching and caching (DataLoader)
---

Collects per-field requests, batches them, and caches results within a request.

## Practices implemented

This is not the recommended pattern for
[Batched execution](/practices/batched-execution) because it requires developers
to know about it, opt in, and use it consistently in order to reliably and
effectively solve the N+1 problem. It's a solid solution and can work well, but
the golden path focuses on ensuring problems are either solved out of the box or
the user is directly confronted with them rather than requiring them to discover
the solutions for themself.

## Applies to

- GraphQL servers
- Execution engines and runtimes

## Implementation notes

- Create a loader per request, per resource type.
- Ensure loaders are used in every resolver that can trigger N+1.

## Cautions

- Inconsistent usage causes fragmented batches and degraded performance.
- Cross-request caches can leak data if not keyed by auth context.

## Problems addressed

- [N+1 queries](/problems/n-plus-1)
