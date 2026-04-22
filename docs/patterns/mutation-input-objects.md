---
title: Mutation input objects
---

Define each mutation with a single, typed input object to enable clients to pass
a single variable that enables easier evolution.

## Implementer guidance

### Schema designer

- Use one required `input` argument per mutation.
- Place business inputs inside a dedicated input type.
- Keep room for additive optional inputs over time.

### Client implementer

- Generate typed mutation variables from input object definitions.
- Keep mutation construction stable as optional input fields are added.

### Tooling implementer

- Lint for single-input-argument mutation style.
- Validate naming conventions for mutation input types.
