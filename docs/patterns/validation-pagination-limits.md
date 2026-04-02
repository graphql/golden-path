---
title: Validation pagination limits
---

Enforce page-size and pagination-window bounds during GraphQL validation,
including argument values supplied through variables.

## Practices implemented

- [Pagination limits](/practices/pagination-limits)

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter             | Default  | Notes                                 |
| --------------------- | -------- | ------------------------------------- |
| `defaultPageSize`     | `20`     | Used when limit arg is omitted.       |
| `maxPageSize`         | `100`    | Reject over-limit per-field requests. |
| `maxPaginationWindow` | `1000`   | Reject oversized windows.             |
| `enforcement`         | `reject` | Return stable validation errors.      |

## Implementation notes

- Evaluate argument values after variable coercion.
- Apply rule consistently to all list-returning fields.
- Include machine-readable error metadata for tooling.

## Cautions

- Requires schema conventions for identifying pagination args.
- Custom directives may need explicit rule integration.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Response size](/problems/response-size)
