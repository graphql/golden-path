---
title: Modeled mutation errors
---

Model expected business-level mutation failures in mutation results rather than
relying only on top-level GraphQL errors.

## Implementer guidance

### Schema designer

- Represent expected domain failures in payload fields or unions/interfaces.
- Use stable, machine-readable error codes.
- Reserve top-level GraphQL errors for exceptional/system failures.

### Client implementer

- Handle modeled mutation failures as part of normal typed control flow.
- Avoid treating all top-level GraphQL errors as business-rule failures.

### Tooling implementer

- Enforce conventions for modeled error types/codes.
- Generate strongly typed client helpers for modeled error branches.

## Problems addressed

- [Error leakage](/problems/error-leakage)
