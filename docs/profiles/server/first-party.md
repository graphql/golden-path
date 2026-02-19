---
title: First-party API (default)
sidebar_position: 30
---

Use this profile when the API is consumed by trusted clients owned by the same
organization.

## Intended for

- Internal product APIs
- Private BFFs
- Service-to-service GraphQL where operations are release-managed

## Recommended practices

- [Trusted documents](/practices/trusted-documents)
- [Batched execution](/practices/batched-execution)
- [Pagination limits](/practices/pagination-limits)
- [Error hardening](/practices/error-hardening)

## Recommended patterns

- [Trusted documents (operation allowlist)](/patterns/trusted-documents)
- [Batch resolvers](/patterns/batch-resolvers)
- [Validation pagination limits](/patterns/validation-pagination-limits)
- [Resolver pagination limits](/patterns/resolver-pagination-limits)

## Notes

- Keep introspection enabled by default for first-party APIs.
- Prefer strict trusted document enforcement, with migration support where
  needed.
