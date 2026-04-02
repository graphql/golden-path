---
title: Pagination limits
sidebar_position: 30
---

Enforce bounded page sizes and pagination windows so list queries cannot request
unbounded result sets.

## Applies to

- GraphQL servers
- Gateways and proxies

## Why this should be default

GraphQL should typically only be used to fetch the data displayed on the screen,
additional data should be fetched as and when it's needed. Allowing API clients
to request unbounded results places a performance burden on servers and backend
infrastructure that could lead to denial of service and similar issues. Further,
GraphQL allows fetching nested lists, multiplying up result sets. Bounding page
sizes helps to limit this growth.

## Addresses

- [DoS via runtime execution](/problems/runtime-dos)
- [Execution cost spikes](/problems/execution-cost)
- [Response size](/problems/response-size)

## Implementing patterns

- [Validation pagination limits](/patterns/validation-pagination-limits)
- [Resolver pagination limits](/patterns/resolver-pagination-limits)

## Notes

[Trusted documents](/practices/trusted-documents) reduce untrusted query risk,
but even trusted operations can still request too much data via variables unless
pagination is bounded.
