---
title: Batch resolvers
---

Batch resolvers group many field resolutions into a single call so servers avoid
N+1 database or service requests while preserving GraphQL shape.

## Practices implemented

- [Batched execution](/practices/batched-execution)

## Implementer guidance

### Server implementer

- Implement request-scoped batching for high-fanout fields.
- Preserve input/output ordering guarantees.
- Return per-item null/error results instead of failing whole batches when
  possible.
- Keep request-scoped caches isolated by auth context.

### Schema designer

- Model fields so they can be naturally loaded in sets (stable identifiers,
  explicit keys, predictable parent relationships).
- Avoid schema shapes that force one-off resolver calls for each child entity.
- Coordinate with server implementers on fields that require dedicated batch
  loaders.

## Configuration (suggested defaults)

| Parameter       | Default      | Notes                                   |
| --------------- | ------------ | --------------------------------------- |
| `batchSchedule` | `microtask`  | Queue batching within the same tick.    |
| `cacheScope`    | `perRequest` | Avoid cross-request caching by default. |

## Cautions

- Cross-request caches can leak data if not keyed by auth context.
- Batching can increase latency if overused on the critical path.
- Backends may still need query-level guards to prevent oversized result sets.

## Problems addressed

- [N+1 queries](/problems/n-plus-1)
