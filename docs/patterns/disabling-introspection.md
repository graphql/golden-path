---
title: Disabling introspection
---

Introspection is incredibly powerful for application development, but
introspection queries can produce large amounts of data and since introspection
is baked into GraphQL it's a common target for malicious requests.

First-party APIs rarely need introspection in production, but they should use
trusted documents in which case only authorized (trusted and necessary)
introspection queries will be allowed in production, so there should be no need
to explicitly disable introspection.

Third-party APIs must choose between heavy validation of introspection queries,
or disabling introspection in favour of providing an SDL file with a description
of the schema.

## Not golden path for first-party APIs

The golden path recommends trusted documents, which protect against untrusted
introspection queries. This is generally a superior solution to disabling
introspection

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema registries

## Configuration (suggested defaults)

| Parameter              | Default       | Notes                                    |
| ---------------------- | ------------- | ---------------------------------------- |
| `introspectionEnabled` | profile-based | `true` first-party, `false` third-party. |

## Implementation notes

- Gate introspection by environment or auth scope.
- Provide explicit errors when introspection is blocked. Ideally redirect users
  to an SDL file containing a definition of the schema.
- For third-party profiles, publish SDL/schema docs via a separate channel when
  introspection is disabled.
- Enforce introspection depth/list-depth via the depth-limits rule.

## Cautions

- Disabling introspection can break tooling and codegen.
- If disabled, provide a stable SDL or schema-doc endpoint for integrators.
- Disabling introspection does NOT prevent users from discovering which fields
  are available in the schema. The schema should be treated as public
  information, any private information should not be added to the schema.

## Problems addressed

- [Introspection exposure](/problems/introspection-exposure)
