---
title: Resolver pagination limits
---

Apply default pagination values and enforce page bounds at resolver/data-access
boundaries.

## Practices implemented

- [Pagination limits](/practices/pagination-limits)

## Applies to

- GraphQL servers
- Gateways with resolver plugins

## Configuration (suggested defaults)

| Parameter         | Default | Notes                                |
| ----------------- | ------- | ------------------------------------ |
| `defaultPageSize` | `20`    | Applied if absent in resolver args.  |
| `maxPageSize`     | `100`   | Upper bound for page-size arguments. |
| `enforcement`     | `clamp` | One of: `clamp`, `reject`, `warn`.   |

Each field should be able to override these limits to use values that make sense
for it.

## Implementation notes

- Enforce before database/downstream calls.
- Centralize in shared resolver wrappers or data-access layer.
- Emit warnings/metrics when clamping occurs.
- `clamp`: coerce out-of-bounds values to configured limits.
- `reject`: return an explicit client error when values exceed limits.
- `warn`: allow request but emit warnings/metrics for visibility. Suitable
  whilst transitioning to golden path, but not recommended for new users.

## Cautions

- Silent clamping can surprise clients - they may assume that no more data
  exists; document behavior clearly and use
  [cursor connections](./cursor-connections.md) to indicate `hasNextPage: true`
  as appropriate.
- Inconsistent wrappers across services can cause drift.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Response size](/problems/response-size)
