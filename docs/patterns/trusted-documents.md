---
title: Trusted documents (allowlist)
---

Trusted documents allow only pre-registered operations to execute, reducing
attack surface and enabling predictable performance.

## Practices implemented

- [Trusted documents](/practices/trusted-documents)

## Implementer guidance

### Client implementer

- Detect trusted-document requirements from endpoint service capabilities.
- Extract operation documents at build time, hash, and publish to a registry.
- At runtime, send operation ID (hash) instead of full document text.
- Keep hash algorithm and canonicalization aligned with server expectations.

### Server implementer

- Store and version trusted operations received during publish.
- Ensure documents to store in registry _are_ trusted.
- Resolve incoming operation IDs to canonical documents.
- Reject requests without an ID.
- Reject requests with an unknown operation ID.
- Optionally cache parse and validation results keyed by operation ID.

### Tooling implementer

- Provide CI checks that all shipped operations are published.
- Fail builds when operation IDs are missing or mismatched.
- Support rollback/revocation workflows for operations.
- Track which versions of which applications use which operation IDs, this can
  aid with schema evolution decisions.

## See also

- [Trusted Documents article by Benjie](https://benjie.dev/graphql/trusted-documents)
- [Persisted Documents GraphQL-over-HTTP RFC](https://github.com/graphql/graphql-over-http/pull/264)
- [Persisted Documents URLs GraphQL-over-HTTP RFC](https://github.com/graphql/graphql-over-http/pull/305)

## Cautions

- Enforce strict canonicalization to avoid hash drift.
- Plan operational procedures for publish failures and rollback.
- Third-party APIs do not trust their incoming documents and typically cannot
  require users to pre-register documents.

## Problems addressed

- [Request size](/problems/request-size)
- [Response size](/problems/response-size)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
