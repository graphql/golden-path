---
title: Schema designer
sidebar_position: 10
---

Use this profile if you design and evolve a GraphQL schema inside an
organization.

## Primary goals

- Design schema shapes that are predictable for clients.
- Keep schema evolution safe and observable.
- Enforce consistency through automated checks.

## Recommended patterns to implement

- [Connections](/patterns/connections)
- [Versionless schema design](/patterns/versionless-schema-design)
- [Mutation input objects](/patterns/mutation-input-objects)
- [Mutation payloads](/patterns/mutation-payloads)
- [Modeled mutation errors](/patterns/modeled-mutation-errors)
- [Batch resolvers](/patterns/batch-resolvers) (server collaboration)

## Consistency and governance checks

Run these checks continuously in CI/CD and schema review workflows:

- Naming convention linting (types, fields, arguments, enums, directives)
- Connection contract checks (cursor + pageInfo + bounded pagination args)
- Mutation contract checks (single input object + structured payload)
- Breaking change detection against the previous published schema
- Deprecation usage monitoring before removal

## Tooling expectations

- Linting rules for naming and schema conventions
- Schema diffing with breaking/dangerous change policy gates
- Operation usage analytics tied to fields and arguments
- Registry workflow for publish, check, and rollout coordination
