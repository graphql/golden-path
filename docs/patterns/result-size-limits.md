---
title: Result size limits
---

Limits the size of responses to avoid large payloads or expensive computation.

## Practices implemented

- [Pagination limits](/practices/pagination-limits)

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter          | Default     | Notes                                |
| ------------------ | ----------- | ------------------------------------ |
| `maxNodes`         | `5000`      | Cap total nodes per response.        |
| `maxResponseBytes` | `1_000_000` | Cap serialized response size.        |
| `enforcement`      | `reject`    | Reject responses that exceed limits. |

## Implementation notes

- Count nodes and bytes during execution.
- Prefer per-field list limits via pagination defaults.
- Return stable errors when limits are hit.

## Cautions

- Limits can surprise users if defaults are too low.
- Counting bytes may require buffering.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
- [Response size](/problems/response-size)
