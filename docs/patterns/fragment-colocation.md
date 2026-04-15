---
title: Fragment colocation
---

With fragment colocation, each component (function, class, UI element, and so
on) of a client application defines locally the GraphQL fragments that outline
its data requirements. This may be done in the same source file, or in
`.graphql` files alongside it. These fragments are then composed in a way that
mirrors the application logic, ultimately forming the operation that can be
issued to the GraphQL server.

## Practices implemented

- [Query componentization](/practices/query-componentization)

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Implementation notes

- Require that each fragment and operation belongs to a component.
- Require that a component may only reference data requested via its fragment or
  operation.
- Require that every field requested in a components fragment is used by that
  fragment (with the exception of fields needed for normalized caching or
  similar purposes).
- Discourage the user from adding lots of queries - fragments should be the
  default for requesting data with one query that composes the tree of
  fragments.
- Assemble operations automatically from fragment dependencies.

"Fragment masking" or "data masking" is a technique that can help ensure the
component can only access data that it has requested through its fragments.

## Cautions

- Composition must be deterministic.
- Ensure fragments can be statically analyzed for build-time tooling.
- Data masking can feel restrictive; provide clear errors and tooling support.

## Problems addressed

- [Over-fetching](/problems/overfetching)
- [Under-fetching](/problems/underfetching)
