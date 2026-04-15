---
title: Mutation payloads
---

Return a dedicated payload object per mutation so successful results and
metadata remain structured and evolvable.

## Implementer guidance

### Schema designer

- Return a dedicated payload type instead of bare scalars/object types.
- Include core result objects plus extensible metadata fields.
- Keep payload shapes stable and additive.

### Client implementer

- Standardize mutation result handling around payload structures.
- Reuse fragments across related mutation payloads.

### Tooling implementer

- Lint for mutation payload naming and structural conventions.
- Generate typed payload helpers in SDK/codegen workflows.

## Problems addressed

- [Under-fetching](/problems/underfetching)
