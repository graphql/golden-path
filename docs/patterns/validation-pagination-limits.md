---
title: Validation pagination limits
---

Enforce page-size is specified during GraphQL validation.

## Practices implemented

- [Pagination limits](/practices/pagination-limits)

## Applies to

- GraphQL servers
- Gateways and proxies

## Implementation notes

- Ensure the `first` or `last` argument is specified.
- If the argument is provided statically, ensure it's within sensible bounds.
- If the argument is provided as a variable, ensure the variable is non-null
  (required), that the default if specified is sensible, and defer to
  [resolver pagination limits](./resolver-pagination-limits.md) for validating
  the runtime value.
- Apply rule consistently to all list-returning and connection fields.
- Include machine-readable error metadata for tooling.

## Cautions

- Requires schema conventions for identifying pagination args.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Response size](/problems/response-size)
