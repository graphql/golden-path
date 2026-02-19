---
title: GraphQL Golden Path
slug: /
---

The GraphQL Golden Path is a guide for people designing and implementing GraphQL
software. It outlines an opinionated set of practices to be implemented by
servers, clients, tooling and schema designers such that consumers can "walk the
golden path" and have the greatest chance of success in their usage of GraphQL.

The Golden Path is a community-maintained resource, lead by the GraphQL
Technical Steering Committee, that is likely to evolve over time. It is
motivated by problems that users face whilst using GraphQL, and aims to reduce
these problems for future users. Sometimes this involves changes to the GraphQL
specifications itself (for example: `onError: "NULL"`, service capabilities),
but typically it involves aligning the ecosystem on a set of practices that
minimize downsides for application developers without requiring them to read
large amounts of documentation.

## Model

The content is organized around four concepts:

- **Profiles**: visitor-oriented entrypoints that map role and deployment
  context to recommended practices.
- **Practices**: default behaviors you should adopt, one way or another.
- **Patterns**: concrete implementation approaches that implement one or more
  practices.
- **Problems**: failure modes these practices and patterns are intended to
  prevent.

In short: choose your profile, implement the linked practices by picking and
appling one or more patterns for your implementer type.

## Get started

The practices you need to implement will differ depending on your role; start by
picking the [Profile or Profiles](/profiles) that best reflect you or your
project. You will also find terminology definitions on that page.

## Status

This site is a work in progress and not official. Guidance may be incomplete or
incorrect.

## References

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
