---
title: Resolver pagination limits
---

Apply default pagination values and enforce page/window bounds at
resolver/data-access boundaries.

## Practices implemented

- [Pagination limits](/practices/pagination-limits)

## Applies to

- GraphQL servers
- Gateways with resolver plugins

## Configuration (suggested defaults)

| Parameter             | Default | Notes                                     |
| --------------------- | ------- | ----------------------------------------- |
| `defaultPageSize`     | `20`    | Applied if absent in resolver args.       |
| `maxPageSize`         | `100`   | Upper bound for page-size arguments.      |
| `maxPaginationWindow` | `1000`  | Upper bound for overall window arguments. |
| `enforcement`         | `clamp` | One of: `clamp`, `reject`, `warn`.        |

## Implementation notes

- Enforce before database/downstream calls.
- Centralize in shared resolver wrappers or data-access layer.
- Emit warnings/metrics when clamping occurs.
- `clamp`: coerce out-of-bounds values to configured limits.
- `reject`: return an explicit client error when values exceed limits.
- `warn`: allow request but emit warnings/metrics for visibility.

## Cautions

- Silent clamping can surprise clients; document behavior clearly.
- Inconsistent wrappers across services can cause drift.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Response size](/problems/response-size)
