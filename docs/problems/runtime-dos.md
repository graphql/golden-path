---
title: DoS via runtime execution
---

Even valid queries can cause excessive runtime work through expensive resolvers
or large result sets.

## Symptoms

- High resolver time
- Excessive memory usage
- Backend saturation

## Why it matters

Runtime-based DoS is costly to recover from and difficult to diagnose.

## Practices that address this

- [Pagination limits](/practices/pagination-limits)

## Patterns that address this

- [Validation pagination limits](/patterns/validation-pagination-limits)
- [Resolver pagination limits](/patterns/resolver-pagination-limits)
- [Execution timeouts](/patterns/execution-timeouts)
- [Query complexity limits](/patterns/query-complexity-limits)
