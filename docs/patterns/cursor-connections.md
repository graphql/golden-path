---
title: Cursor Connections
---

Cursor Connections provide a consistent contract for paginated lists using
edges, cursors, and page metadata.

## Practices implemented

- [Cursor pagination](/practices/cursor-pagination)

## Implementer guidance

### Schema designer

- Expose list fields as connection types for forward/backward pagination.
- Include stable cursors and `pageInfo` with clear semantics.
- Define and enforce bounded pagination arguments (`first`/`last`, optional
  cursor args).

### Client implementer

- Detect connection shapes and provide ergonomic pagination APIs.
- Encourage fragment reuse so page 2+ operations stay structurally aligned with
  page 1.
- Hide cursor plumbing behind high-level pagination helpers where possible.

### Tooling implementer

- Lint for required connection elements (`edges/node/cursor/pageInfo`).
- Lint for required and bounded pagination arguments.
- Optionally enforce static page-size values in trusted document workflows.

### Server implementer

- Require pagination limits and reject unbounded requests.
- Ensure cursor decoding/encoding is stable and opaque.
- Keep ordering deterministic for repeatable pagination.

## Problems addressed

- [Execution cost spikes](/problems/execution-cost)
- [DoS via runtime execution](/problems/runtime-dos)
