---
title: Introspection exposure
---

Unrestricted introspection can expose schema details in environments where that
information should be limited.

## Symptoms

- Introspection available in production without controls
- Schema details visible to untrusted clients

## Why it matters

Exposure increases attack surface and can reveal internal structure.

## Practices that address this

- [Trusted documents](/practices/trusted-documents)

## Patterns that address this

- [Disabling introspection](/patterns/disabling-introspection)
- [Trusted documents (allowlist)](/patterns/trusted-documents)
