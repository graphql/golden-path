---
title: Profiles
slug: /profiles
sidebar_position: 2
---

Profiles are role-first entrypoints into the Golden Path.

Pick the profile that matches who you are, then follow the recommended practices
and patterns.

## Organization implementers

- [Schema designer](/profiles/schema-designer)
- [Application developer](/profiles/application-developer)

## Community implementers

- [Server](/profiles/server)
- [Client implementer](/profiles/client-implementer)
- [Tooling implementer](/profiles/tooling-implementer)

For most users, the server default should be
[First-party API](/profiles/server/first-party). Use
[Third-party API](/profiles/server/third-party) only when untrusted external clients
must send arbitrary documents.

Client implementers do not need separate first-party vs third-party profiles.
Instead, clients should detect endpoint behavior using service capabilities and
configure themselves from those advertised capabilities.
