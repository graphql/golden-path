---
title: Versionless schema design
---

Evolve a single schema over time with additive changes and deprecation workflows
instead of introducing versioned GraphQL endpoints.

## Implementer guidance

### Schema designer

- Prefer additive field and type evolution.
- Use deprecations with clear replacement guidance.
- Remove deprecated fields only after observed usage reaches an acceptable
  threshold.

### Tooling implementer

- Provide schema diffing with breaking/dangerous/additive classifications.
- Block breaking changes in CI by default.
- Surface deprecation usage and age to support removal decisions.

### Server implementer

- Coordinate schema rollout with client release cadence.
- Keep observability on deprecated field usage and resolver cost.

## Problems addressed

- [Over-fetching and under-fetching](/problems/overfetching-underfetching)
