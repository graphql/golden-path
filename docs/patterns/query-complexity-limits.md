---
title: Query complexity limits
---

Complexity limits cap the estimated cost of a query before execution to prevent
expensive operations from overwhelming systems.

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability and security tooling

## Recommended implementation

See: https://ibm.github.io/graphql-specs/cost-spec.html

## Implementation notes

- Count fields, nested selections, and list multipliers deterministically.
- Treat unknown arguments conservatively by using default page sizes.
- Surface calculated complexity in error metadata for debugging.

## Cautions

- Keep rules stable across releases to avoid breaking clients.
- Avoid leaking precise limits or data in error responses.
- Ensure the model matches your pagination conventions.

## Problems addressed

- [Execution cost spikes](/problems/execution-cost)
- [Excessive query complexity](/problems/query-complexity)
- [DoS via runtime execution](/problems/runtime-dos)
