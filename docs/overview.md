---
title: GraphQL Golden Path
slug: /
---

The GraphQL Golden Path is a draft guide for people designing and implementing
GraphQL systems.

It is organized so visitors can enter based on their role, then apply the
practices and patterns most relevant to that role.

## Terminology

- **Organization**: the entity using GraphQL to deliver experiences to
  employees, constituents, partners, or customers. This includes businesses,
  nonprofits, government agencies, and similar institutions.
- **Community**: the broader GraphQL ecosystem of clients, servers, tooling,
  documentation, and other off-the-shelf resources.

### Organization implementers

- **Schema designer**: designs and evolves the GraphQL schema and resolvers to
  meet organizational and application needs.
- **Application developer**: consumes the schema to build applications (web,
  mobile, desktop, backend).

### Community implementers

- **Server**: an off-the-shelf library or framework that exposes a GraphQL
  schema.
- **Client**: an off-the-shelf library or framework that executes operations and
  exposes results to application code.
- **Tooling**: supporting tools such as linters, schema diffing, codegen,
  language servers, and IDE integrations.

## Model

The content is organized around four concepts:

- **Profiles**: visitor-oriented entrypoints that map role and deployment
  context to recommended practices.
- **Practices**: default behaviors you should adopt.
- **Patterns**: concrete implementation approaches used to implement practices.
- **Problems**: failure modes these practices and patterns are intended to
  prevent.

In short: choose your profile, implement the linked practices by picking and
appling one or more patterns for your implementer type.

## Get started

Go to [Profiles](/profiles) to choose your role and deployment context.

If you are a schema designer, start with consistency and lifecycle controls in
the schema design profile. If you are a server implementer, choose first-party
vs third-party API mode.

## Status

This site is a work in progress and not official. Guidance may be incomplete or
incorrect.

## References

- GraphQL best practices: https://graphql.org/learn/best-practices/
- GraphQL security: https://graphql.org/learn/security/
- GraphQL execution: https://graphql.org/learn/execution/
