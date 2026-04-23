---
title: Cursor pagination
---

Use cursor-based pagination as the default contract for paginated lists.

## Applies to

- Schema designers
- GraphQL clients
- GraphQL servers
- Tooling and code generation

## Why this should be default

Cursor-based pagination is typically more efficient than traditional offset or
page-number pagination as it can leverage indexes and other backend
optimizations. Further, it gives clients stable forward/backward traversal,
encourages bounded list access, and creates a consistent contract across schema,
client abstractions, and enforcement tooling. Clients can easily leverage common
pagination patterns such as cursor connections to make list handling more
ergonomic for the developer.

(Note: cursor connections also make available space to expand your API into -
for example if a list field wants to be able to support "total count",
"aggregates" or similar related features it can do so without requiring sibling
fields to be added.

Cursor pagination is recommended to be the default experience, but where
absolute pagination (as opposed to relative pagination where just the
previous/next page is needed) is desired, other solutions may be used as
appropriate.

## Implementing patterns

- [Cursor Connections](/patterns/cursor-connections)

## Notes

- Clients and servers should provide first-class pagination primitives for
  connection fields.
