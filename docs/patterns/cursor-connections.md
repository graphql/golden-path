---
title: Cursor Connections
---

Cursor Connections provide a consistent contract for paginated lists using
edges, cursors, and page metadata.

## Practices implemented

- [Cursor pagination](/practices/cursor-pagination)

## Implementer guidance

### Schema designer

- Expose data collections as connection types for forward (and ideally backward)
  cursor pagination and schema extensibility.
- Use stable cursors.
- You may add use-case specific extensions to the connection, pageInfo, and
  edges - for example a "members" connection might include details on edges of
  membership start date.
- The `nodes` field can be used as a shortcut to `edges`&rarr;`node` for user
  convenience. When this pattern is followed, `PageInfo` must include
  `startCursor` and `endCursor` to enable cursor pagination.

### Client implementer

- Detect connection shapes and provide ergonomic pagination APIs.
- Page 2+ should use a separate focussed operation that re-uses the connection
  field/fragment but omits sibling data fetches.
- Hide cursor plumbing behind high-level pagination helpers where possible.
- Prefer hard-coding pagination limits into the document rather than using
  variables.

### Tooling implementer

- Lint should discourage list fields with pagination arguments, preferring
  connections.
- Lint should assert any object type whose name ends with `Connection` must
  implement the cursor connections specification.
- Require each document has provided a pagination limit (`first` or `last`)
  either statically (preferred) or via a variable.

### Server implementer

- Require pagination limits and reject unbounded requests.
- Ensure cursor decoding/encoding is stable and opaque.
- Keep ordering deterministic for repeatable pagination.
- Treat cursors as untrusted user input and implement your own validation.

## Problems addressed

- [Execution cost spikes](/problems/execution-cost)
- [DoS via runtime execution](/problems/runtime-dos)
