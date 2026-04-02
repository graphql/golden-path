---
title: Trusted documents
sidebar_position: 20
---

Execute only operations written by your trusted developers.

## Applies to

- GraphQL clients
- GraphQL servers
- Gateways and proxies
- Build tooling and schema registries

## Why this should be default

Reduces attack surface, keeps parse/validation costs predictable (and can be
cached), reduces the need for broad operation cost controls.

## Solves

- [Request size](/problems/request-size)
- [Response size](/problems/response-size)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
- [Introspection exposure](/problems/introspection-exposure)

## Implementing patterns

- [Trusted documents (allowlist)](/patterns/trusted-documents)
- To document: document signing
- To document: operation registry

## Notes

Though only allowing documents written by your developers should rule out
overtly malicious operations, code review and static linting tools should be
used in combination to help ensure that the documents you are trusting are safe
and conform to your standards.

Limiting operations through an allow list does not place further restrictions on
variables, so care should be taken when adding variables to such documents. For
example, if the `first` argument to a collection field is specified via a
variable, an attacker could supply `{"first": 999999999}` which may still
constitute an attack. Similarly complex filter arguments could cause issues. It
may be wise to encode as much as possible into the document statically and use
variables in only the leaf-most positions if they impose a denial of service
threat. [Pagination limits](/practices/pagination-limits) is a separate
practice.
