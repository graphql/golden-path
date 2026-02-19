---
title: Profiles
slug: /profiles
sidebar_position: 2
---

Profiles are opinionated bundles of practices that we recommend are adopted for
a particular implementor (schema designer, application developer, server,
client, tooling), such that consumers downstream of the implementor walk the
golden path, avoiding common downsides and pitfalls.

Pick the profile that matches your role, then follow the recommended practices
and patterns.

## Terminology

- **Organization**: the entity using GraphQL to deliver experiences to
  employees, constituents, partners, or customers. This includes businesses,
  nonprofits, government agencies, and similar institutions.
- **Community**: the broader GraphQL ecosystem of clients, servers, tooling,
  documentation, and other off-the-shelf resources.

## Community implementers

Most of the work in the Golden Path is to ensure that off-the-shelf GraphQL
software sets users up for success. Broadly we break this kind of software down
into three categories:

- [Server](/profiles/server): off-the-shelf libraries/frameworks that expose a
  GraphQL schema.
- [Client](/profiles/client): off-the-shelf libraries/frameworks that issue
  requests to GraphQL servers and expose results to application code.
- [Tooling](/profiles/tooling): supporting tools such as linters, schema
  diffing, codegen, language servers, and IDE integrations.

## Organization implementers

Organizations (businesses, nonprofits, government agencies, and similar
institutions) generally consume GraphQL software from the community, and are
thus the beneficiaries of the Golden Path rather than the implementors of it.
That said, schema designers will want to set up application developers for
success, so they should implement a golden path for them. Application developers
should follow the path laid out before them, but we include some recommended
practices for them also to help engender success.

- [Schema designer](/profiles/schema-designer): designs and evolves the schema
  and resolvers to meet organizational and application needs.
- [Application developer](/profiles/application-developer): consumes the schema
  to build web, mobile, desktop, and backend applications.
