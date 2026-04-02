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
- Extract operation documents at build time.
- Publish operation hashes/documents to the server-side registry.
- At runtime, send operation ID/hash instead of full document text.
- Use capability metadata to discover where documents are published and where
  they are executed.
- Keep hash algorithm and canonicalization aligned with server expectations.

### Server implementer

- Store and version trusted operations received during publish.
- Resolve incoming operation IDs to canonical documents.
- Reject unknown operation IDs by default.
- Optionally cache parse and validation results keyed by operation ID.

### Tooling implementer

- Provide CI checks that all shipped operations are published.
- Fail builds when operation IDs are missing or mismatched.
- Support rollback/revocation workflows for operations.

## Configuration (suggested defaults)

| Parameter                 | Default     | Notes                                           |
| ------------------------- | ----------- | ----------------------------------------------- |
| `mode`                    | `allowlist` | Reject unknown operations by default.           |
| `documentIdAlgorithm`     | `sha256`    | Stable hashing for IDs.                         |
| `unknownDocumentBehavior` | `reject`    | Error on unknown IDs.                           |
| `persistedDocumentStore`  | `required`  | Server-side operation store must be configured. |

## Cautions

- Third-party APIs may need hybrid rollout modes.
- Enforce strict canonicalization to avoid hash drift.
- Plan operational procedures for publish failures and rollback.

## Problems addressed

- [Request size](/problems/request-size)
- [Response size](/problems/response-size)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
- [Introspection exposure](/problems/introspection-exposure)
