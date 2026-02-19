---
title: Third-party API (opt-in)
sidebar_position: 40
---

Use this profile when your API must accept operations authored by untrusted or
third-party clients.

## Intended for

- Public platform APIs
- Partner ecosystems
- Any endpoint where ad-hoc documents are expected

## Recommended practices

- [Operation cost controls](/practices/operation-cost-controls)
- [Pagination limits](/practices/pagination-limits)
- [Error hardening](/practices/error-hardening)
- [Batched execution](/practices/batched-execution)

## Recommended patterns

- [Query complexity limits](/patterns/query-complexity-limits)
- [Depth limits](/patterns/depth-limits)
- [Token limits](/patterns/token-limits)
- [Validation timeouts](/patterns/validation-timeouts)
- [Execution timeouts](/patterns/execution-timeouts)

## Notes

- Full trusted-document allowlisting usually cannot be enforced.
- Keep strict parse/validation/runtime protections enabled by default.
- Disable introspection by default and publish schema docs through a separate
  integrator channel.
